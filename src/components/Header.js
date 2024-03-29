import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constrant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
 const handleSignOut = () => {
   signOut(auth)
     .then(() => {
       // Sign-out successful.
     })
     .catch((error) => {
       // An error happened.
       navigate("/errr");
     });
  };
   useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
       if (user) {
         // User is signed out
         const { uid, email, displayName, photoURL } = user;
         dispatch(
           addUser({
             uid: uid,
             email: email,
             displayName: displayName,
             photoURL: photoURL,
            })
            );
            navigate("/browse")
       } else {
         // User is signed out
     dispatch(removeUser());
      navigate("/")
       }
    });
     // Unsubscribe when component will unmount
     return () => unsubscribe();
   }, []);
    const handleGptSearchClick = () => {
      // Toggle GPT Search
      dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));
    };
  
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between ">
      <img className="w-36  mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex  mr-2 my-auto">
          {showGptSearch && (
            <select
              className="p-2 m-2  bg-gray-700 text-white rounded-sm"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2  bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <p
            className="font-bold text-xl p-2 text-gray-700 cursor-pointer"
            onClick={handleSignOut}
          >
            (Log Out)
          </p>
          <img
            className="hidden md:inline-block w-10 p-1 rounded-3xl"
            src={user.photoURL}
            alt="LoginLogo"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
