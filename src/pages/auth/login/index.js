import React, { useState } from 'react'
import "../../../assets/css/signup.css"
import { Link } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Login() {
	const [data,setData] = useState({
		email: "",
		password: ""
	})
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((prev) => ({
		  ...prev,
		  [name]: value,
		}));
		
	  };
    const handleSubmit = (event)=>{
        event.preventDefault();
		console.log("data", data);
    }
  return (
    <div>
      <img className="wave" src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png" alt='login'/>
	<div className="containerss">
		<div className="imgss">
			<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/bg.svg" alt='login'/>
		</div>
		<div className="login-content">
			<form className="formss" onSubmit={handleSubmit}>
				<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" alt='login'/>
				<h2 className="title">Sign In</h2>
           		<div className="input-div one">
           		   <div className="i">
                      <i className="fas fa-envelope"></i>
           		   </div>
           		   <div className="div">
           		   		{/* <lable className="your-email">Your Email</lable> */}
           		   		<input type="email" className="input" name="email" placeholder='Enter Your Email'  value={data.email} onChange={handleChange}/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	{/* <lable className="your-email">Your Password</lable> */}
           		    	<input type={showPassword ? "text" : "password"} className="input" name="password" placeholder='Enter Your Password'  value={data.password} onChange={handleChange}/>
						   
            	   </div>
				   {/* <div  className='border'>
                      {showPassword ? (
                        <AiFillEye size={25} onClick={() => setShowPassword(!showPassword)}/>
                      ) : (
                        <AiFillEyeInvisible size={25} onClick={() => setShowPassword(!showPassword)}/>
                      )}
                    </div> */}
            	</div>
            	<span className="forget" href="#">Forgot Password?</span>
            	<input type="submit" className="btnss" value="Sign In"/>

                <span>New user? <Link to="/Signup" style={{color:"#38d39f"}}>Create an account</Link></span>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login
