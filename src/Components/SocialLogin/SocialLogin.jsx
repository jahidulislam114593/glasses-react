import React from "react";
import { IoLogoGoogle } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
const SocialLogin = () => {
  const { googleLogin } = useAuth();
  return (
    <>
      <div className="divider">continue with</div>
      <div>
        <button
          onClick={() => googleLogin()}
          className="btn btn-primary btn-sm btn-outline"
        >
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
