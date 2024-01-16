import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constrant";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const user = useSelector((store) => store.user);
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
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-48 "
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex  mr-2 my-auto">
          <img
            className="w-10 p-1 rounded-3xl"
            src={user.photoURL}
            alt="LoginLogo"
          />
          <p
            className="font-bold text-xl p-2 text-gray-700 cursor-pointer"
            onClick={handleSignOut}
          >
            (Log Out)
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
