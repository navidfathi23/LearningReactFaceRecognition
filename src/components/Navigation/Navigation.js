import React from 'react';


const Navigation = ({onRouteChange , isSignIn}) =>
{
	if(isSignIn)
		return (
			<nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
				<p className="link black pa4 ma2 br3 f4 dim pointer" onClick={()=>onRouteChange("signout")}>Sign Out</p>
			</nav>
		);
		else
			return(
				<nav className="pa4" style={{display: 'flex' , justifyContent: 'flex-end'}}>
					<p className="link black ma2 br3 f4 dim pointer" onClick={()=>onRouteChange("signin")}>Sign In / </p>
					<p className="link black ma2 br3 f4 dim pointer" onClick={()=>onRouteChange("register")}>Register</p>
				</nav>
			);
}

export default Navigation;