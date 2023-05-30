import { Html, Head, Main, NextScript } from "next/document";
import AdminScript from "../components/admin/utils/scripts";
import LadingScript from "../components/landing/utils/scripts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <AdminScript />
        <LadingScript />
      </body>
    </Html>
  );
}

