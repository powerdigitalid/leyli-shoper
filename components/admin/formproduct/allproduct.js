import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Allproduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleProduct = () => {
    fetch("/api/produk/all", {
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
  };

  const handleDelete = (id) => {
    fetch(`/api/produk/delete?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          Swal.fire({
            icon: "success",
            title: "Produk berhasil dihapus",
            showConfirmButton: false,
            timer: 1500,
          });
          handleProduct();
        } else {
          Swal.fire({
            icon: "error",
            title: "Produk gagal dihapus",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Produk gagal dihapus");
      });
  };

  useEffect(() => {
    handleProduct();
  }, []);
  return (
    <div className='container-fluid'>
      <div className="card author-box card-primary mt-2">
        <div className="card-body">
          <div className="colorlib-product">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
                  <h2>All Produk</h2>
                  <hr className="sidebar-divider" />
                </div>
              </div>
              <div className="row row-pb-md">
                {data.length > 0 ? (
                  data.map((prod, index) => (
                    <div className="col-lg-3 mb-4 text-center" key={index}>
                      <div className="product-entry border">
                        <a href="#" className="prod-img">
                          <img
                            src={prod.image}
                            className="img-fluid"
                            alt="Free html5 bootstrap 4 template"
                          />
                        </a>
                        <div className="desc">
                          <h2>
                            <a href="#">{prod.name}</a>
                          </h2>
                          <p>
                            <span className="price">{prod.desc}</span>
                          </p>
                          <span className="price">Rp.{prod.price}</span>
                        </div>
                        <div>
                          {/* <Link href="/admin/produk/detail" className="btn btn-primary btn-sm">Detail</Link> */}
                          <Link
                            href={`/admin/produk/editproduk?id=${prod.id}`}
                            className="btn btn-success btn-sm mr-1"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => handleDelete(prod.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h3 className="text-center">Belum ada produk</h3>
                )}
                <div className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
