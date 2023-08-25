import React from 'react'
import { Link,useHistory } from 'react-router-dom'

function Signup() {
	const history = useHistory()
    const handleSubmit = (event)=>{
        event.preventDefault();
		history.push("/verify_email")
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
				<h2 className="title">Signup</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<h5>Your Full Name</h5>
           		   		<input type="text" className="input"/>
           		   </div>
           		</div>
                   <div className="input-div one">
           		   <div className="i">
                      <i className="fas fa-envelope"></i>
           		   </div>
           		   <div className="div">
           		   		<h5>Your Email</h5>
           		   		<input type="email" className="input"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<h5>Your Password</h5>
           		    	<input type="password" className="input"/>
            	   </div>
            	</div>
            	
            	<input type="submit" className="btnss" value="Signup" />
                <span>Already have an account?  <Link to="/" style={{color:"#38d39f"}}>Sign In</Link></span>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Signup
