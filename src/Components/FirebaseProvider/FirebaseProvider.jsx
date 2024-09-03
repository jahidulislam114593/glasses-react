import React, { createContext, useEffect, useState } from "react";
import auth from "../FireBase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
export const AuthContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  // console.log(loading);

  //create users
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update userprofile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // signInUser
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // googleLogin
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // facebookLogin
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // logout
  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  // Forget Password Reset by Eamil
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  //allvalues
  const allValues = {
    createUser,
    signInUser,
    googleLogin,
    facebookLogin,
    logout,
    user,
    loading,
    updateUserProfile,
    passwordReset,
  };
  return (
    <div>
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
    </div>
  );
};

export default FirebaseProvider;
