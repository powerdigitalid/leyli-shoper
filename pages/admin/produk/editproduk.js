import React from "react";
import Editproduct from "../../../components/admin/formproduct/editproduct";
import Layout from "../../../components/admin/utils/layout";
import { useEffect } from 'react'
import { getCookie, validateToken } from '../../../libs/cookie.lib'

export default function Editproduk() {
  useEffect(() => {
    if(getCookie('token') === "" && getCookie("username") === ""){
      window.location.href = "/login";
    }else{
      validateToken(getCookie('token')) ? null : window.location.href = "/login";
    }
  }, [])
  return (
    <div>
      <Layout>
        <Editproduct />
      </Layout>
    </div>
  );
}
