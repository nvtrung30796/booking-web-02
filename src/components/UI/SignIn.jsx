import {GoogleAuthProvider, signInWithPopup, FacebookAuthProvider} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider, signin, providerGG } from "../../config/firebase";
import fbLogo from "../../assets/all-images/logo/facebook.webp";
import ggLogo from "../../assets/all-images/logo/google.webp";
import {useAuthState} from "react-firebase-hooks/auth";

import "../../styles/signIn.scss";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    } catch {
      setError("Failed to Sign In");
    }
    setLoading(false);
  }

  const handleFbLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const user = result.user;
    console.log('log::19 signInWithPopup user', user, accessToken)

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    console.log('log::22 signInWithPopup: error case: ', error)


    // ...
  });



  };

  const onSignInWithGGAccount = (e) => {
    e.preventDefault()
    signInWithPopup(auth, providerGG)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('log::19 signInWithPopup user', user, token)
       
        if (user && token) {
            navigate("/home");
        }
      }).catch((error) => {
      // Handle Errors here.
      console.log('log::22 signInWithPopup: error case: ', error)
    });
  }

//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       navigate("/home");
//     }
//   });

  return (
    <Container className="d-flex align-items-center justify-content-center form__container">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign In</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
              <Form.Group id="email">
                <Form.Label className="text-left">Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password" className="mt-3">
                <Form.Label className="text-left">Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>

              <Button disabled={loading} className="w-100 mt-3" type="submit">
                {" "}
                Sign In
              </Button>

              <p className="or">Or</p>
              <Button onClick={handleFbLogin} className="fbBtn w-100 mt-3">
                <img src={fbLogo} alt="" />
                <p>SIGN IN WITH FACEBOOK</p>
              </Button>
              <button onClick={onSignInWithGGAccount} className="ggBtn w-100 mt-3">
                <img src={ggLogo} alt="" />
                <p>SIGN IN WITH GOOGLE</p>
              </button>
            </Form>
          </Card.Body>
        </Card>
        <small className="text-right mt-2">
          Need an account? <Link className="link" to="/sign-up">Sign up</Link>
        </small>
      </div>
    </Container>
  );
}

export default SignIn;
