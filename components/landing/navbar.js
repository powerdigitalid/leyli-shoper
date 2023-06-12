import React from "react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [order, setOrder] = useState([]);
  const [state, setState] = useState("unconfirmed");

  const handleOrder = () => {
    fetch("/api/orders/orderCart?state=unconfirmed", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setOrder(res.data);
        } else {
          setOrder([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    handleOrder();
  }, []);

  return (
    <>
      <header className="header_area" id="navbar">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed top">
            <div className="container">
              <a className="navbar-brand" href="/#navbar">
                <h3><img src="/dist/img/Fevicon.png" alt /> ElShop</h3>
                
              </a>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="/#product"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Produk
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#contact">
                      Kontak
                    </a>
                  </li>
                </ul>
                <ul className="nav-shop">
                  <li className="nav-item">
                    <a className="button button-header" href="/login">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
