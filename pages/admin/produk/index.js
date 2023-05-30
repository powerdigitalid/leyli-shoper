import React from "react";
import Allproduct from "../../../components/admin/formproduct/allproduct";
import Inputproduct from "../../../components/admin/formproduct/inputproduct";
import Layout from "../../../components/admin/utils/layout";

export default function Index() {
  return (
    <div>
      <Layout>
        <Inputproduct />
        <Allproduct />
      </Layout>
    </div>
  );
}
