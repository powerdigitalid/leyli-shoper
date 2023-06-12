import {useState} from 'react';
import {useRouter} from 'next/router';
import {setCookie} from '../libs/cookie.lib.js'
import Swl from 'sweetalert2';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter();

  const handleLogin = (e) =>{
    e.preventDefault();
    setLoading(true);
    fetch('api/auth/login', {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.message === "Login success" && data.user.token){
        Swl.fire("Login Success!", "Login Success Redirected in 3 second!", "success");
        setCookie("token", data.user.token, 1);
        router.push("/admin");
      } else {
        setError(data.message);
      }
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      Swl.fire("Login Failed!", "Login Failed Redirected in 3 secon!" + err, "error");
      setLoading(false)
    });
  };

  return (
    <section className="login_box_area section-margin">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="login_form_inner">
              <h3>Login to admin</h3>
              <form className="row login_form" action="#/" id="contactForm"  >
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Username"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Username'"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}

                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Password"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Password'"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-md-12 form-group">
                  <button
                    type="submit"
                    value="submit"
                    className="button button-login w-100"
                    onClick={handleLogin}
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
