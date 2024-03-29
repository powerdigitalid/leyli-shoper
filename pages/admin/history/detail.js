import React from 'react'
import Detailhistory from '../../../components/admin/history/detailhistory'
import Layout from '../../../components/admin/utils/layout'
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
            <Detailhistory />
        </Layout>
    </div>
  )
}
