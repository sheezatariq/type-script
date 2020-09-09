import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { GOOGLE_API_KEY } from '../constant';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: FC<any> = () => {
 
  const history = useHistory();

  const responseGoogle = (response: any) => {
    console.log("responsiveness",response?.tokenId)
    if (response?.tokenId) {
      // sessionStorage.setItem('user-data',JSON.stringify(response.accessToken));
      // sessionStorage.setItem('token', response?.tokenId);
      toast.success('Successfully Logged In');
      history.push('/item')
    }
    // if(error) {
    //   toast.error('Something went wrong');
    // }
  };
  
  return(
    <div className="center">
      <div className="card">
        <div>
          <img src="/assests/google.png" alt="" className="logoLogin" />
          <h1>Login With Google</h1>
          <h3>Please click on button</h3>
        </div>
        <GoogleLogin
          clientId={GOOGLE_API_KEY}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          className="googleButton"
        
        />
      </div>
    </div>
  );
};

export default Login;