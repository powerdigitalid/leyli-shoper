export default function Navbar() {
  return (
    <>
      <header className="header_area" id="navbar">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed top">
            <div className="container">
              <a className="navbar-brand" href="/#navbar">
                <h3><img src="/dist/img/Fevicon.png" alt /> ElShop</h3>
                
              </a>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/#navbar">
                      Home
                    </a>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="/#product"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Produk
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="category.html">
                          Shop Category
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="single-product.html">
                          Product Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="checkout.html">
                          Product Checkout
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="confirmation.html">
                          Confirmation
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="cart.html">
                          Shopping Cart
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#contact">
                      Kontak
                    </a>
                  </li>
                </ul>
                <ul className="nav-shop">
                  <li className="nav-item">
                    <a className="button button-header" href="/login">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
