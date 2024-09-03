import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassByEmail = () => {
  const [email, setEmail] = useState("");
  const { passwordReset } = useAuth();

  const handleSubmit = () => {
    passwordReset(email)
      .then(() => {
        toast.success("Password reset email sent successfully!");
        document.getElementById("my_modal_5").close(); // Close the modal after success
      })
      .catch((error) => {
        toast.error("Failed to send password reset email.");
        console.error(error);
      });
  };

  const handleClose = () => {
    document.getElementById("my_modal_5").close(); // Close the modal when clicking close
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
            {/* Use a div instead of form and handle close manually */}
            <div>
              <button className="btn" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ForgetPassByEmail;
