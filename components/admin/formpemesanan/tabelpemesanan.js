import Link from "next/link";
import React from "react";
import {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function Tabelpemesanan() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const router = useRouter();
  
  const handleTabelOrder = ()=>{
    fetch('/api/orders/orderCart?state=uncormirmed', {
      method: "GET",
  })
      .then((res) => res.json())
      .then((res) => {
          if (res.data) {
              setData(res.data);
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
  useEffect(() => {
    handleTabelOrder();
  }, []);

  const handleConfirm = (e,id)=>{
    e.preventDefault();
    fetch(`/api/orders/confirm`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: id}),
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.data) {
        Swal.fire({
          icon: "success",
          title: "Order berhasil dikonfirmasi",
          showConfirmButton: false,
          timer: 1500,
        });
        handleTabelOrder();
      } else {
        Swal.fire({
          icon: "error",
          title: "Order gagal dikonfirmasi",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Order gagal dikonfirmasi",
        showConfirmButton: false,
        timer: 1500,
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
                    showConfirmButton: false,
                    timer: 1500,
                });
                handleOrder();
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Berhasil dihapus",
                    showConfirmButton: false,
                    timer: 1500,
                });
                handleOrder();
            }
        })
        .catch((err) => {
          Swal.fire({
            icon: "success",
            title: "Berhasil dihapus",
            showConfirmButton: false,
            timer: 1500,
        });
        handleOrder();
        });
  };

  return (
    <div className='container-fluid'>
      <div className="card author-box card-primary mt-2">
        <div className="card-body">
          <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Data Pemesanan
                </h6>
              </div>
              <div className="table-responsive p-3">
                <div
                  id="dataTable_wrapper"
                  className="dataTables_wrapper dt-bootstrap4"
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        className="table align-items-center table-flush dataTable"
                        id="dataTable"
                        role="grid"
                        aria-describedby="dataTable_info"
                      >
                        <thead className="thead-light">
                          <tr role="row">
                            <th
                              className="sorting_asc"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                              style={{ width: "100.781px" }}
                            >
                              Name
                            </th>
                            <th
                              className="sorting_asc"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                              style={{ width: "100.781px" }}
                            >
                              Email
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                              style={{ width: "40px" }}
                            >
                              Nomor Hp
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                              style={{ width: "80.031px" }}
                            >
                              Alamat
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "250.953px" }}
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        
                        <tbody>
                        {data.length > 0 ? data.map((ord, index) => (
                          <tr role="row" className="odd" key={index}>
                            <td className="sorting_1">{ord.name}</td>
                            <td>{ord.email}</td>
                            <td>{ord.phone}</td>
                            <td>{ord.addres}</td>
                            <td>
                                <Link href={`/admin/pemesanan/detail?id=${ord.id}`}> 
                                <button className="btn btn-primary">Detail</button>
                                </Link>
                                <button className="btn btn-success" onClick={(e) => handleConfirm(e, ord.id)}>Konfirmasi</button>
                                <button className="btn btn-danger" onClick={(e) => handleDelete(e, ord.id)}>Hapus</button>
                            </td>
                          </tr>
                          )) : <p className="text-center">Belum ada Order</p>}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};