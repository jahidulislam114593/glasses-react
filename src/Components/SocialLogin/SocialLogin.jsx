import React from "react";
import useAuth from "../../hooks/useAuth";
const SocialLogin = () => {
  const { googleLogin, facebookLogin } = useAuth();
  return (
    <>
      <div className="divider">Continue wWith</div>
      <div className="text-center pb-4">
        <button
          onClick={() => googleLogin()}
          className="btn btn-primary btn-sm btn-outline mr-2"
        >
          Google
        </button>
        <button
          onClick={() => facebookLogin()}
          className="btn btn-primary btn-sm btn-outline"
        >
          Facebook
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
