// assets landing page
import '../public/dist/vendors/bootstrap/bootstrap.min.css'
import '../public/dist/vendors/bootstrap/bootstrap.min.css'
import '../public/dist/vendors/fontawesome/css/all.min.css'
import '../public/dist/vendors/nice-select/nice-select.css'
import '../public/dist/css/style.css'
import '../public/dist/vendors/themify-icons/ie7/ie7.css'
import '../public/dist/css/icomoon.css'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// assets admin page
import "../public/dist/admin/css/ruang-admin.min.css"
// import "../public/dist/admin/css/style.css"
// import "../public/dist/admin/css/jquery.mCustomScrollbar.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
