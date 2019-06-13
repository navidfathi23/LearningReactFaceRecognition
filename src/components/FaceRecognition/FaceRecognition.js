import React from 'react';

const FaceRecognition = ({imageUrl}) =>{
	return(
		<div className="center ma">
			<div className="absolute mt2 mb4">
				<img src={imageUrl} alt="" className="mt4 br4" width='500px' height='auto'/>
			</div>	
		</div>
	);
}

export default FaceRecognition;

// https://cdn.images.express.co.uk/img/dynamic/11/590x/skincare-994444.jpg?r=1532587813853