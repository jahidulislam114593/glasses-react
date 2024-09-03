import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const ForgetPassByEmail = () => {
  const [email, setEmail] = useState("");
  const { passwordReset } = useAuth();
  const handleSubmit = () => {
    passwordReset(email);
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <label className="label">
        <a
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="label-text-alt link link-hover"
        >
          Forgot password?
        </a>
      </label>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">Reset Password!</h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            className="input input-bordered"
          />
          <button onClick={handleSubmit} className="btn btn-primary ml-2">
            Submit
          </button>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ForgetPassByEmail;
