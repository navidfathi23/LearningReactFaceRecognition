import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Tachyons from 'tachyons';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register'


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
        imageUrl: '',
        box : {},
        route: 'signin',
        isSignIn: false
      }
    }

    onRouteChange = (route) =>{
       if (route === 'signout') {
        this.setState({isSignIn: false})
      } else if (route === 'home') {
        this.setState({isSignIn: true})
      }
        this.setState({route : route});
    }

    calculateFaceLocation = (data)=>{
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        console.log(width , height);
        return{
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }
    
    displayFaceBox= (box) =>{
      this.setState({box : box});
    }

    onInputChange = (event) =>{
      this.setState({input : event.target.value});
    }

    onButtonSubmit = () =>{
        this.setState({imageUrl : this.state.input});
        app.models.predict( Clarifai.FACE_DETECT_MODEL , this.state.input)
        .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.log(err));
    }

    render (){
        return(
          <div className="App">
          <Particles className='particles' params={particlesOptions} />
          <Navigation   isSignIn={this.state.isSignIn} onRouteChange={this.onRouteChange}/>
          {
          this.state.route==="signin"
           ? <SignIn onRouteChange={this.onRouteChange}/>
          
          : this.state.route==="register" ?
            <Register onRouteChange={this.onRouteChange}/>
          :
            <div>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
             </div>
          }
        </div>
        );
    }
}

export default App;