import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login-form'>
        <form className='form'>
       {/* <Images/> */}
       <div className='awignlogo'>
      <img src = 'https://awign.com/_next/image?url=%2Fimages%2Fawign_blue_logo.svg&w=256&q=75' alt='logo'/>
      <br/>
      </div >
      <div className='sign-in'><h5>SIGN IN</h5></div>
      
      <div className='google'>
       <button className='google-button'> <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=1190&height=800&name=image8-2.jpg" alt="google logo" width={50} height={50}/>Continue with Google</button>
      </div>
      
      
      <div className='or'>
        <p>OR</p><br/>
      </div>

      <div className='login'>
      <label>Email</label><br/><br/>
      <hr/>
      <label>Password</label><br/><br/>
      <hr/>
      </div>
      
      <div className='forgot'>
      <a href=" ">Forgot Password ?</a><br/><br/><br/>
      </div>
      <div className='sign-button'><button className='button1'>Sign In</button><br/><br/><br/></div>

      <div className='authorize'>
        <img src="https://www.pngall.com/wp-content/uploads/10/Lock-Transparent-Images.png" alt='lock' width={30} height={30}></img>
        <span >Only authorized people can acces this page</span></div>
        
        <br/><br/><br/>
        <div>
        <footer>By Logging in I agree to all terms and Conditions</footer>
        </div>
        </form>
      </div>
  )
}

export default Login