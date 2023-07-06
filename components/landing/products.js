import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import {useRouter} from 'next/router';
import Swal from "sweetalert2";
import { useSession, signIn } from "next-auth/react";

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();

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

  //button buy add to chart
  const handleAddBuy = (id, price) => {
    if(session){
      fetch('/api/orders/create', {
        method: "POST",
        body: JSON.stringify({
          name: "",
          email: session.user.email,
          date: new Date(),
          total: parseInt(price),
          productId: id,
          addres: "",
          phone: "",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          router.push("/landingpage/cart");
          Swal.fire({
            icon: "success",
            title: "Berhasil ditambahkan ke keranjang",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        else {
          Swal.fire({
            icon: "success",
            title: "Berhasil ditambahkan ke keranjang",
            showConfirmButton: false,
            timer: 1500,
          });
          // router.push("/landingpage/cart");
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Gagal ditambahkan ke keranjang",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }else{
      Swal.fire({
        icon: "error",
        title: "Silahkan login terlebih dahulu",
        showConfirmButton: false,
        timer: 1500,
      });
      signIn();
    }
  };

  useEffect(() => {
    handleProduct();
  }, []);
  return (
    <>
      <section className="section-margin calc-60px" id="product">
        <div className="container">
          <div className="section-intro pb-60px">
            <h2>
              <span className="section-intro__style">Product</span>
            </h2>
          </div>
          <div className="row">
            {data.length > 0 ? (
              data.map((prod, index) => (
                <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                  <div className="card text-center card-product">
                    <div className="card-product__img">
                      <img className="card-img" src={prod.image} alt="image" />
                      <ul className="card-product__imgOverlay">
                        <li>
                          <a
                            className="btn btn-outline-primary"
                            href={`/landingpage/view?id=${prod.id}`}
                          >
                            Lihat
                          </a>
                        </li>
                        <li>
                          <a href="/landingpage/cart"  className="btn btn-outline-primary" onClick={()=>handleAddBuy(prod.id, prod.price)} >
                            Beli
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h4 className="card-product__title">
                        <a href="single-product.html">{prod.name}</a>
                      </h4>
                      <p className="card-product__price">{prod.desc}</p>
                      <p className="card-product__price">Rp.{prod.price}</p>
                      {/* <a href className="btn btn-primary ml-2 btn-sm" >Buy</a>s */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3 className="text-center">Belum ada produk</h3>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
