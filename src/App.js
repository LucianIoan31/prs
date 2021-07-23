import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Register from './components/Register/Register';
import Particles from 'react-particles-js';
import Signin from './components/Signin/Signin';


import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
  super();
  this.state = {
    route: 'signin',
    isSignedIn: false,

}
}

onRouteChange = (route) => {
  if(route ==='signout') {
    this.setState({isSignedIn: false})
  } else if (route === 'home') {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route});
}

  render() {
    const { isSignedIn, route}
    return (
      <div className ="App">
        <Particles className = "particles" 
              params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' 
        
        ? <div>
        <Logo />
        <Register />
        </div>
        : (
        route === 'signin' 
        ? <Signin onRouteChange={this.onRouteChange}/>
        : <Register onRouteChange={this.onRouteChange}/>
        )
        
      }
      </div>
    );
  }
}

export default App;
