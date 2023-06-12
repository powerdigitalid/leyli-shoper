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
    // router.push("/");
  };

  return (
    <div>
      <ul
        className="navbar-nav sidebar sidebar-light accordion"
        id="accordionSidebar"
      > 
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/admin/dashboard"
        >
          <div className="sidebar-brand-text mx-3">Leyli Shop</div>
        </a>
        
        <li className="nav-item active">
          <Link className="nav-link" href="/admin/dashboard">
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="/admin/produk"
          >
            <span>Input Produk</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="/admin/user"
          >
            <span>User</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="/admin/pemesanan"
          >
            <span>Pemesanan</span>
          </Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/admin/history">
            <span>History Pemesanan</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item">
        <a href="/" className="nav-link" onClick={handelLogout}>
            <span>Log Out</span>
          </a>
        </li>
        <hr className="sidebar-divider" />
      </ul>
    </div>
  );
}
