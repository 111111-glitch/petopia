
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AdminLogin.css'; // Import the CSS file

// function AdminLogin({ setIsAdmin }) {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: ''
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         try {
//             const response = await fetch('/admin/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (response.ok) {
//                 const userData = await response.json();
//                 localStorage.setItem("token", userData.access_token);
                
//                 if (userData.role === 'admin') {
//                     setIsAdmin(true);
//                     navigate('/admin');
//                 } else {
//                     console.error('User is not an admin');
//                 }
//             } else {
//                 console.error('Login failed:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error occurred during login:', error);
//         }
//     };

//     return (
//         <div className="containerLog">
//             <div className="glass-form-container">
//                 <h2>Admin Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <input
//                             type="text"
//                             name="username"
//                             value={formData.username}
//                             onChange={handleChange}
//                             placeholder="Username"
//                             className="form-control"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             placeholder="Password"
//                             className="form-control"
//                         />
//                     </div>
//                     <button type="submit" className="btn">Login</button>
//                 </form>
//             </div>
//             <div className="image-container">
//                 <img src="https://i.pinimg.com/564x/24/1a/e1/241ae18e116a69b28593a02eed8455bf.jpg" alt="Login background" />
//             </div>
//         </div>
//     );
// }

// export default AdminLogin;
