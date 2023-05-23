import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({children}) {
  return (
    <div className="body-inner">
			<Navbar/>
      <main className="site-main">
        {children}
      </main>
			<Footer/>
    </div>
  )
}