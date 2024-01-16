import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValiDate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { AVTAR_URL } from "../utils/constrant";

const Login = () => {
  const [isloggedIn, setIsloggedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the data /form
    const message = checkValiDate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    //Sign In /Sign Up
    //Sign Up Logic
    if (!isloggedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up => Profile updated!
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVTAR_URL,
          })
            .then(() => {
              // dispatch action

              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .then(() => {})
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " " + errorCode);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsloggedIn(!isloggedIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="banner"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 my-40 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-2xl py-4">
          {isloggedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isloggedIn && (
          <input 
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full rounded bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded bg-gray-800"
        />
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded bg-gray-800"
        />
        <p className="font-bold text-red-500 text-lg">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded"
          onClick={handleButtonClick}
        >
          {isloggedIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm}>
          {isloggedIn
            ? "New to Netflix?Singn Up now"
            : "Allready registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
