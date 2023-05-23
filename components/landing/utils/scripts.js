import Script from "next/script";

export default function Scripts() {
    return (
        <>
        <Script src="/dist/vendors/bootstrap/bootstrap.min.js" />
        <Script src="/dist/vendors/skrolls.min.js" />
        <Script src="/dist/js/main.js" />
        </>
    )
}