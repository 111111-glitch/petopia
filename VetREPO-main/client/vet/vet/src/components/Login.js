import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setData = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/userLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("this is the data", data);
        localStorage.setItem("access_token", data.access_token);
        //window.alert("Login successful");

        // Retrieve role from response data
        const role = data.role;
        console.log("this is the role", role);

        // Check user role and redirect accordingly
        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/client");
        }
      } else {
        window.alert("Login failed, Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred while processing your request");
    }
  };

  return (
    <section>
      <div className="containerLog">
       
        <div className="glass-form-container">
          <h2>Welcome Back!</h2>
          <p>Login to your account</p>
          <div className="form-box">
            <form method="POST">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary" id="login" name="login" onClick={setData}>
                Login
              </button>
              <br />
              <span className="register-span">New to Petopia? </span>
              <NavLink to="/register"><u>Register here</u></NavLink>
            </form>
          </div>
        </div>
        <div className="image-container">
          <img src="https://i.pinimg.com/564x/24/1a/e1/241ae18e116a69b28593a02eed8455bf.jpg" alt="Petopia" />
        </div>
      </div>
    </section>
  );
}

export default Login;
