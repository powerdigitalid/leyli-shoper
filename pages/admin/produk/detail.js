import React from "react";
import Detailproduk from "../../../components/admin/formproduct/detailproduk";
import Layout from "../../../components/admin/utils/layout";
import { useEffect } from 'react'
import { getCookie, validateToken } from '../../../libs/cookie.lib'

export default function Detail() {
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
        <Detailproduk />
      </Layout>
    </div>
  );
}
