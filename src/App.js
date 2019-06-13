import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

function App() {
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

  return (
    <div>
      <Particles className='particles'
          params={particlesOptions}
        />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {//<FaceRecognition />
  }
    </div>
  );
}

export default App;
