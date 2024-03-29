import React from 'react'
import Detailpemesanan from '../../../components/admin/formpemesanan/detailpemesanan'
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
            <Detailpemesanan />
        </Layout>
    </div>
  )
}
