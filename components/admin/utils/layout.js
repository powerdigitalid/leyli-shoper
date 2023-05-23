import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div id="pcoded" className="pcoded">
      <div className="pcoded-overlay-box"></div>
      <div className="pcoded-container navbar-wrapper">
        <Navbar />
        <div className="pcoded-main-container">
          <div className="pcoded-wrapper">
            <Sidebar />
            <div className="pcoded-content">
              {/* Page-header start */}
              <div className="page-header">
                <div className="page-block">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="page-header-title">
                        <h5 className="m-b-10">Dashboard</h5>
                        <p className="m-b-0">Welcome to Mega Able</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <ul className="breadcrumb-title">
                        <li className="breadcrumb-item">
                          <a href="index.html">
                            {" "}
                            <i className="fa fa-home" />{" "}
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#!">Dashboard</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Page-header end */}
              <div className="pcoded-inner-content">
                {/* Main-body start */}
                <div className="main-body">
                  <div className="page-wrapper">
                    {/* Page-body start */}
                    <div className="page-body">
                      <div className="row">
                        {children}
                      </div>
                    </div>
                    {/* Page-body end */}
                  </div>
                  <div id="styleSelector" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
