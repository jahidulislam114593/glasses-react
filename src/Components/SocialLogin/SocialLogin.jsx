import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleLogin, facebookLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((res) => {
      if (res.user) {
        navigate(from);
      }
    });
  };
  return (
    <>
      <div className="divider">Continue With</div>
      <div className="text-center pb-4">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-primary btn-sm btn-outline mr-2"
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(facebookLogin)}
          className="btn btn-primary btn-sm btn-outline"
        >
          Facebook
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
