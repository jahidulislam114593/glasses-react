import React, { createContext, useEffect, useState } from "react";
import auth from "../FireBase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
export const AuthContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  console.log(user);

  //create users
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInUser
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // googleLogin
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // facebookLogin
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  //observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
  }, []);

  //allvalues
  const allValues = {
    createUser,
    signInUser,
    googleLogin,
    facebookLogin,
  };
  return (
    <div>
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
    </div>
  );
};

export default FirebaseProvider;
