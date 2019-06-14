import React from 'react';

const SignIn = ({onRouteChange}) =>{
	return(
		<div style={{display: 'flex' , justifyContent: 'center'}}>
			<main className="pa4 black-80 tc shadow-5 w-25">
			  <form className="measure">
			    <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hover-white" 
			      type="submit" value="Sign in" onClick={()=>onRouteChange("home")}/>
			    </div>
			    <div className="lh-copy mt3">
			      <a href="#0" className="f6 link dim black db"  onClick={()=>onRouteChange("register")} >Register</a>
			    </div>
			  </form>
			</main>
		</div>	
	);
}

export default SignIn;