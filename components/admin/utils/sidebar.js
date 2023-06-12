import Link from "next/link";
import React from "react";
import {useRouter} from 'next/router';
import { useEffect, useState } from "react";
import { removeCookie } from "../../../libs/cookie.lib";
import Swal from "sweetalert2";

export default function Sidebar() {
  const router = useRouter();
  const [user, setUser] = useState({});

  const handelLogout = () => {
    removeCookie("token");
    Swal.fire({
      icon: "success",
      title: "Logout berhasil",
      showConfirmButton: false,
      timer: 1500,
    });
    router.push("/");
  };

  return (
    <div>
      <ul
        className="navbar-nav sidebar sidebar-light accordion"
        id="accordionSidebar"
      > 
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon">
            <img src="/dist/admin/img/logo/logo2.png" />
          </div>
          <div className="sidebar-brand-text mx-3">Leyli Shoper</div>
        </a>
        
        <li className="nav-item active">
          <Link className="nav-link" href="/admin/dashboard">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="/admin/produk"
            data-toggle="collapse"
            data-target="#collapseBootstrap"
            aria-expanded="true"
            aria-controls="collapseBootstrap"
          >
            <i className="far fa-fw fa-window-maximize" />
            <span>Input Produk</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="/admin/user"
            data-toggle="collapse"
            data-target="#collapseForm"
            aria-expanded="true"
            aria-controls="collapseForm"
          >
            <i className="fab fa-fw fa-wpforms" />
            <span>User</span>
          </Link>
          <div
            id="collapseForm"
            className="collapse"
            aria-labelledby="headingForm"
            data-parent="#accordionSidebar"
          ></div>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="/admin/pemesanan"
            data-toggle="collapse"
            data-target="#collapseTable"
            aria-expanded="true"
            aria-controls="collapseTable"
          >
            <i className="fas fa-fw fa-table" />
            <span>Pemesanan</span>
          </Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/admin/history">
            <i className="fas fa-fw fa-palette" />
            <span>History Pemesanan</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item">
        <a className="nav-link" onClick={handelLogout}>
            <i className="fas fa-fw fa-chart-area" /> 
            <span>Log Out</span>
          </a>
        </li>
        <hr className="sidebar-divider" />
      </ul>
    </div>
  );
}
