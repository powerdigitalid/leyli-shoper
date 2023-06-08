import Link from 'next/link'
import React from 'react'
import {useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'

export default function Cart() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [addres, setAddres] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("unconfirmed");
  const router = useRouter()

  const handleOrder = ()=>{
    fetch('/api/orders/orderCart?state=uncormirmed', {
      method: "GET",
  })
      .then((res) => res.json())
      .then((res) => {
          if (res.data) {
              setData(res.data);
              setTotal(res.data.reduce((total, item) => total + item.total, 0));
          } else {
              setData([]);
          }
          setLoading(false);
      })
      .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(err);
      });
  }

  //handle data order clear ketika handle update dilakukan 
  const handleClear = () => {
    setName("");
    setAddres("");
    setPhone("");
    setData([]);
  };

  const handleUpdateOrder =(e)=>{
    e.preventDefault()
    fetch('/api/orders/update?state=unconfirmed', {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        addres: addres,
        phone: phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Berhasil diupdate",
            showConfirmButton: false,
            timer: 1500,
          });
          router.push('/checkout')
        } else {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Berhasil ditambahkan ke keranjang",
            showConfirmButton: false,
            timer: 1500,
          });
          handleClear();
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Terjadi kesalahan saat menyimpan data",
        });
      });
  }

  const handleDelete = (e, id) => {
    e.preventDefault();
    fetch(`/api/orders/orderCart?id=${id}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.data) {
                Swal.fire({
                    icon: "success",
                    title: "Berhasil dihapus",
                    showConfirmButton: true,
                    timer: 1500,
                });
                handleOrder();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Gagal",
                    text: "Terjadi kesalahan saat menghapus data",
                });
            }
        })
        .catch((err) => {
            console.log(err);
            alert("Terjadi kesalahan saat menghapus data");
        });
  };


  useEffect(() => {
    handleOrder()
  }, [])

  return (
    <div>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2" />
                          Continue shopping
                        </a>
                      </h5>
                      {/* <h6 className="mb-4">
                        Status : {state}
                      </h6> */}
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">Kamu memiliki {data.length} Barang</p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted"></span>{" "}
                            <a href="#!" className="text-body">
                              <i className="fas fa-angle-down mt-1" /> 
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="card-body">
                        {data.length > 0 ? data.map((ord, index) => (
                          <div className="d-flex justify-content-between" key={index}>
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src={ord.product.image}
                                  className="img-fluid rounded-3 mr-3"
                                  alt="Shopping item"
                                  style={{ width: 65 }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>{ord.product.name}</h5>
                                <p className="small mb-0">{ord.product.desc}</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: 130 }}>
                                <h5 className="mb-0">{ord.product.price}</h5>
                              </div>
                              <div className="d-flex align-items-center btn btn-secondary">
                                <a href="#!" className="text-primary " onClick={(e) => handleDelete(e, ord.id)}>
                                  X
                                </a>
                                </div>
                            </div>
                          </div>
                        )) : <p className="text-center">Belum ada Produk Yang Dipilih</p>}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                            <img
                              src="/dist/images/item-4.jpg"
                              className="img-fluid rounded-3"
                              style={{ width: 45 }}
                              alt="Avatar"
                            />
                          </div>
                          <p className="small mb-2">Card type</p>
                          <a href="#!" type="submit" className="text-white ml-2">
                            <i className="fa-2x me-2" />
                            - BCA
                          </a>
                          <a href="#!" type="submit" className="text-white ml-2">
                            <i className="fa-2x me-2" />
                            - BNI
                          </a>
                          <a href="#!" type="submit" className="text-white ml-2">
                            <i className="fa-2x me-2" />
                            - BRI
                          </a>
                          <a href="#!" type="submit" className="text-white ml-2">
                            <i className="fa-2x" />
                            - Mandiri
                          </a>
                          <form className="mt-4" onSubmit={handleUpdateOrder}>
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeName"
                                className="form-control form-control-lg"
                                siez={17}
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                              <label className="form-label" htmlFor="typeName">
                                Nama
                              </label>
                            </div>
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                siez={17}
                                placeholder="08123456789"
                                minLength={11}
                                maxLength={19}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                              <label className="form-label" htmlFor="typeText">
                                No Wa
                              </label>
                            </div>
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                siez={17}
                                placeholder="Jl KH Hasyim Ashari"
                                minLength={19}
                                maxLength={19}
                                value={addres}
                                onChange={(e) => setAddres(e.target.value)}
                              />
                              <label className="form-label" htmlFor="typeText">
                                Alamat
                              </label>
                            </div>
                            {/* <input type="hidden" name="id" value={data.id} /> */}
                            <button
                            type="submit"
                            className="btn btn-info btn-block btn-lg"

                          >
                            <div className="">
                              <span>
                                Beli Sekarang
                              </span>
                            </div>
                          </button>
                          </form>
                          <hr className="my-4" />
                          {/* <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">Rp. 300.000</p>
                          </div> */}
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">Rp. 20.000</p>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total</p>
                            <p className="mb-2">{total}</p>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
