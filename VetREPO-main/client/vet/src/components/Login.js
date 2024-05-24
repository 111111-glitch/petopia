// import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "./Login.css";


// function UserLogin() {
//   const [formData, setFormData] = useState({
//       username: '',
//       password: ''
//   });

//   const navigate = useNavigate(); // Initialize useHistory

//   const handleChange = (e) => {
//       setFormData({
//           ...formData,
//           [e.target.name]: e.target.value
//       });
//   };

//   const handleSubmit = async (e) => {
//       e.preventDefault();
//       // Implement logic to send form data to the server for admin login

//       try {
//           // Example: Sending form data to the server for authentication
//           const response = await fetch('/user/login', {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(formData)
//           });

//           if (response.ok) {
//               const userData = await response.json();
//               localStorage.setItem("token", userData.access_token);
//               // Assuming the server returns user data including roles

//               navigate('/home')
//           } else {
//               // Handle errors, perhaps show an error message
//               console.error('Login failed:', response.statusText);
//           }
//       } catch (error) {
//           console.error('Error occurred during login:', error);
//       }
//   };

//   return (
//     <section>
//       <div className="containerLog">
       
//         <div className="glass-form-container">
//           <h2>Welcome Back!</h2>
//           <p>Login to your account</p>
//           <div className="form-box">
//             <form method="POST" onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="email">Username</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="username"
//                   name="username"
//                   placeholder="Enter Username"
//                   value={formData.username}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   placeholder="Enter Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Login
//               </button>
//               <br />
//               <span className="register-span">New to Petopia? </span>
//               <NavLink to="/register"><u>Register here</u></NavLink>
//             </form>
//           </div>
//         </div>
//         <div className="image-container">
//           <img src="https://i.pinimg.com/564x/24/1a/e1/241ae18e116a69b28593a02eed8455bf.jpg" alt="Petopia" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default UserLogin;


import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";


function UserLogin() {
  const [formData, setFormData] = useState({
      username: '',
      password: ''
  });

  const navigate = useNavigate(); // Initialize useHistory

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      // Implement logic to send form data to the server for admin login

      try {
          // Example: Sending form data to the server for authentication
          const response = await fetch('/user/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });

          if (response.ok) {
              const userData = await response.json();
              localStorage.setItem("token", userData.access_token);
              // Assuming the server returns user data including roles

              navigate('/')
          } else {
              // Handle errors, perhaps show an error message
              console.error('Login failed:', response.statusText);
          }
      } catch (error) {
          console.error('Error occurred during login:', error);
      }
  };

  return (
    <section>
      <div className="containerLog">
       
        <div className="glass-form-container">
          <h2>Welcome Back!</h2>
          <p>Login to your account</p>
          <div className="form-box">
            <form method="POST" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={handleChange}
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
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
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

export default UserLogin;
