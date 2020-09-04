import React from 'react';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import './Login.css';
import { GOOGLE_API_KEY } from '../constant';

const Login = () => {
 
  const history = useHistory();
  const responseGoogle = (response: any) => {
    if (response?.tokenId) {
      history.push('/item')
    }
  };
  
  return(
    <div className= "center">
      <div className= "card-login">
        <div>
          <h1>Login With Google</h1>
          <h3>Please click on button</h3>
        </div>
        <GoogleLogin
          clientId={GOOGLE_API_KEY}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};

export default Login;