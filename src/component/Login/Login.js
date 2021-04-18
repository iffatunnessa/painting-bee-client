import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                console.log(result.user);
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { displayName, email, photoURL };  
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, credential, email);
            });
    }
    const storeAuthToken=()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
           sessionStorage.setItem('token',idToken);
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div>
            <div style={{ textAlign: 'center', marginTop:"100px" }}>
                <hr className='solid' />
                <button onClick={handleGoogleSignIn} className="btn btn-success btn-lg">
                <FontAwesomeIcon icon={faGooglePlusG} style={{ fontSize: 20, color: "white" }} />  Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;