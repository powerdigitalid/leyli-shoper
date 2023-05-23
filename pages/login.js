export default function Login() {
  return (
    <section className="login_box_area section-margin">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="login_form_inner">
              <h3>Login to admin</h3>
              <form className="row login_form" action="#/" id="contactForm">
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Username"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Username'"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Password"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Password'"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <button
                    type="submit"
                    value="submit"
                    className="button button-login w-100"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
