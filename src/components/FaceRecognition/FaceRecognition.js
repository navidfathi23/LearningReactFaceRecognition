import React from 'react';

const FaceRecognition = ({imageUrl , box}) =>{
	return(
		<div className="center ma">
			<div className="absolute mt2 mb4">
					<img id='inputimage' src={imageUrl} alt="" className="mt4 br4" width='700px' height='auto'/>
				<div style={{position: 'absolute', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', cursor: 'pointer', boxShadow : '0 0 0 3px #149df2 inset' ,
					top: box.topRow , right : box.rightCol , left : box.leftCol , bottom: box.bottomRow}}>
				</div>	
			</div>	
		</div>
	);
}

export default FaceRecognition;