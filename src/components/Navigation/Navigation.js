import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
  	if (isSignedIn) {
  		return (
	      <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
	        <p onClick={() => onRouteChange('signout')}className = 'f6 link dib light-blue dim mr3 mr4-ns pointer'>Sign Out </p>
	      </nav>
	    );
	  } else {
	  	return (
	  	  <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
	        <p onClick={() => onRouteChange('signin')}className = 'f6 link dib light-blue dim mr3 mr4-ns pointer'>Sign In</p>
	        <p onClick={() => onRouteChange('register')}className = 'f6 link dib light-blue dim mr3 mr4-ns pointer'>Register</p>
	      </nav>
	      
	    );
	  }
}

export default Navigation;