import { Html, Head, Main, NextScript } from "next/document";
import LandingScripts from "../components/landing/utils/scripts";
import AdminScripts from "../components/admin/utils/scripts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <LandingScripts /> */}
        {/* <AdminScripts /> */}
      </body>
    </Html>
  );
}

