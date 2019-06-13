import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () =>{
	return(
		<div className="ma4 mt0" >
			<Tilt className="Tilt shadow-4 pa3 br3" options={{ max : 30 }} style={{ height: 100, width: 100 }} >
		   		<div className="Tilt-inner pa2"> 
		   			<img src={brain} alt="Logo" />
		   		</div>
			</Tilt>
		</div>
	);
}

export default Logo;