import Card from "../../components/admin/dashboard/card";
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
    <>
      <Layout>
        <Card />
      </Layout>
    </>
  );
}
