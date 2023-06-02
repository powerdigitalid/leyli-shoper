import React from "react";
import Dashboard from "../../components/admin/dashboard/dashboard";
import Layout from "../../components/admin/utils/layout";
import {useEffect} from 'react'
import {getCookie, validateToken} from '../../libs/cookie.lib'

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
       <Dashboard />
      </Layout>
    </div>
  );
}
