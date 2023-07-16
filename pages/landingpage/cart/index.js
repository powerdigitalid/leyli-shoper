import React from 'react'
import Cart from '../../../components/landing/cart/cart'
import Layout from '../../../components/landing/layout'
import {useSession, signIn} from 'next-auth/react'

export default function index() {
  const {data: session, status} = useSession();
    return (
      <>
        <Layout>
          <Cart />
        </Layout>
      </>
    )
}