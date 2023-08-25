import React from 'react'
import { Link } from 'react-router-dom'
function Verify_Email() {
  const handleSubmit = (event)=>{
    event.preventDefault();
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
     <h2 className="title">Verify it's you</h2>
            <div className="input-div one">
               <div className="i">
                   <i className="fas fa-user"></i>
               </div>
               <div className="div">
                   <h5>Verification Code</h5>
                   <input type="text" className="input"/>
               </div>
            </div>
              
           <input type="submit" className="btnss" value="Submit"/>
           <span className='still-span'>Still haven't received a code?</span>
           <br/>
             <span className='Check-span'>Check your spam/updates folder or  <Link style={{color:"#38d39f"}}>get a new code</Link></span>
         </form>
     </div>
 </div>
 </div>
  )
}

export default Verify_Email