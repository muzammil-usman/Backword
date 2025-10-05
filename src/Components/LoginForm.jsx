import { useState, memo } from "react";
import GoogleBtn from "./GoogleBtn";
import Popup from "./PopUp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let valueTaker = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setShowPopup(true);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setShowPopup2(true);
      });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen 
                 bg-gradient-to-br from-[#000000c4] via-[#2686f7] to-[#fe5a59] px-4
                 max-[375px]:bg-white max-[375px]:px-0"
    >
      <form
        onSubmit={valueTaker}
        className="bg-white relative sm:p-10 rounded-2xl shadow-2xl 
             w-full max-w-md h-114 
             transform transition-all duration-500 hover:scale-[1.02] 
             flex flex-col gap-5 items-center justify-center
             max-[375px]:w-screen max-[375px]:h-screen max-[375px]:rounded-none"
      >
        <button
          className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white rounded hover:cursor-pointer"
          onClick={props.close}
        >
          ✖
        </button>
        <h2 className="text-3xl overflow-y-hidden font-bold text-gray-800 ">
          Sign In
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-11/12 h-12 border pl-5 border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-[#2686f7] transition"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-11/12 h-12 border pl-5 border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-[#2686f7] transition"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-10/12 h-12 bg-[#2686f7] text-white font-semibold rounded-xl shadow-md transition transform hover:translate-y-[-2px] hover:bg-[#109e5a]"
        >
          Sign Up
        </button>

        <GoogleBtn />

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-[#2686f7] hover:text-[#109e5a] font-medium"
            onClick={props.logintoSign}
          >
            Sign Up
          </a>
        </p>
      </form>
      {showPopup && (
        <Popup
          message="Please fill all fields"
          onClose={() => {
            setShowPopup(false);
          }}
        />
      )}
      {showPopup2 && (
        <Popup
          message={errorMessage}
          onClose={() => {
            setShowPopup2(false);
          }}
        />
      )}
    </div>
  );
};

export default memo(LoginForm);
