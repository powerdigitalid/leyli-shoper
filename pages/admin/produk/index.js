import React from "react";
import Allproduct from "../../../components/admin/formproduct/allproduct";
import Inputproduct from "../../../components/admin/formproduct/inputproduct";
import Layout from "../../../components/admin/utils/layout";
import { useEffect } from 'react'
import { getCookie, validateToken } from '../../../libs/cookie.lib'

export default function Index() {
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
        <Inputproduct />
        <Allproduct />
      </Layout>
    </div>
  );
}
