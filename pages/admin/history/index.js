import React from 'react'
import Tabelhistory from '../../../components/admin/history/tabelhistory'
import Layout from '../../../components/admin/utils/layout'
import { useEffect } from 'react'
import { getCookie, validateToken } from '../../../libs/cookie.lib'

export default function index() {
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
            <Tabelhistory />
        </Layout>
    </div>
  )
}
