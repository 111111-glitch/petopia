import { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import "./Register.css";
function Register() {
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone_number: '',
        password: '',
        confirm_password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/userRegister', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'  
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const userData = await response.json();
                console.log('User registered successfully:', userData);
                // Redirect to login page after successful registration
                navigate('/login');
            } else {
                const errorMessage = await response.json();
                console.error('Registration failed:', errorMessage);
                // Handle registration error
            }
        } catch (error) {
            console.error('Error occurred during registration:', error);
        }
    };

    return (
       <div className="bodyReg">
           <div className="container">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="form-container">
                <h1>Welcome to Petopia</h1>
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">User Name</label>
                        <input type="text" className="form-control" id="username" name="username" placeholder="Enter Username" value={formData.username} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone_number"
                name="phone_number"
                placeholder="Enter Phone Number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password"  placeholder="Enter Password" value={formData.password} onChange={handleChange}/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm Password" value={formData.confirm_password} onChange={handleChange}/>
                    </div>
                    
                    <span className="register-span">Already Registered? <NavLink to='/login'><u>Log in</u></NavLink><br /> <br /></span>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
            
        </div>
        <div className="image-container">
          <img src="https://i.pinimg.com/564x/24/1a/e1/241ae18e116a69b28593a02eed8455bf.jpg" alt="Petopia" />
        </div>
       </div>
    );
}

export default Register;
