import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


const particlesOptions = {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 1500
          }
        }
      }
    }

const app = new Clarifai.App({
 apiKey: '989fdcf54c244ce189a89f03f6180308'
});

class App extends React.Component {

    constructor() {
      super();
      this.state = {
        input:'',
        imageUrl: '' 
      }
    }
    
    onInputChange = (event) =>{
      this.setState({input : event.target.value});
    }

    onButtonSubmit = () =>{
        this.setState({imageUrl : this.state.input});
        app.models.predict( Clarifai.FACE_DETECT_MODEL , this.state.input).then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(err) {
          // there was an error
        }
      );
    }

    render (){
      return(
        <div>
          <Particles className='particles' params={particlesOptions} />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition imageUrl={this.state.imageUrl}/>
        </div>
      );
    }
}

export default App;