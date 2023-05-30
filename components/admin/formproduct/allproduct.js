import Link from "next/link";
import React from "react";

export default function Allproduct() {

  return (
    <div>
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
            
                <div className="col-lg-3 mb-4 text-center" >
                  <div className="product-entry border">
                    <a href="#" className="prod-img">
                      <img
                        src="/dist/landing/images/product-1.jpg"
                        className="img-fluid"
                        alt="Free html5 bootstrap 4 template"
                      />
                    </a>
                    <div className="desc">
                      <h2>
                        <a href="#">tas terbaik</a>
                      </h2>
                      <span className="price">Rp. 500.000</span>
                    </div>
                    <div>
                      <Link href="/admin/produk/detail" className="btn btn-primary btn-sm">Detail</Link>
                      <Link href="/admin/produk/editproduk" className="btn btn-primary btn-sm">Edit</Link>
                      <button className="btn btn-primary btn-sm">Delete</button>
                    </div>
                  </div>
                </div>
                : <h3 className="text-center">Belum ada produk</h3>
                <div className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
