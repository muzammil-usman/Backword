import { useState } from "react";
import GoogleBtn from "./GoogleBtn";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import Popup from "./PopUp";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const SignUpForm = (props) => {
  const [gender, selectedGender] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [reWritePassword, setReWritePassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  let signUpFormFiller = (e) => {
    e.preventDefault();

    if (
      !email ||
      !password ||
      !name ||
      !password ||
      !reWritePassword ||
      !gender
    ) {
      setShowPopup(true);
      return;
    }

    if (reWritePassword !== password) {
      setShowPopup2(true);
      return;
    }

    if (name < 4) {
      setShowPopup4(true);
      return;
    }
    if (/^[A-Za-z\s]+$/.test(name)) {
      console.log("name theek hey");
    } else {
      setShowPopup5(true);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user andar aagaye hein", user);
        AddUserToFireBase(user);
        navigate("/feed");
      })
      .catch((error) => {
        setShowPopup3(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  let handleChange = (f) => {
    selectedGender(f.target.value);
  };

  let AddUserToFireBase = async (user) => {
    await setDoc(doc(db, "users", user?.uid), {
      name: name,
      uid: user?.uid,
      email: email,
      photoUrl: "",
      gender: gender,
      joinTime: Date.now(),
    });
  };

  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen 
                 bg-gradient-to-br from-[#000000c4] via-[#2686f7] to-[#fe5a59] px-4
                 max-[375px]:bg-white max-[375px]:px-0"
      >
        <form
          onSubmit={signUpFormFiller}
          className=" bg-white h-140 md:h-152 relative sm:p-10 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-500 flex flex-col gap-5 items-center justify-center "
        >
          <button
            className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white rounded hover:cursor-pointer"
            onClick={props.close}
          >
            ✖
          </button>

          <h2 className="text-3xl font-bold text-gray-800 text-center overflow-y-hidden">
            Sign up
          </h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-11/12 h-12 border pl-3 border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-[#2686f7] transition"
            onChange={(e) => setEmail(e.target.value.trim())}
          />
          <input
            type="text"
            placeholder="Enter your name"
            className="w-11/12 h-12 border pl-3 border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-[#2686f7] transition"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-11/12 h-12 border pl-3 border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-[#2686f7] transition"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Re-Write your password"
            className="w-11/12 h-12 border pl-3 border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-[#2686f7] transition"
            onChange={(e) => setReWritePassword(e.target.value)}
          />
          <div className="radioChecker flex gap-5 w-full justify-center ">
            <p>Select your gender :</p>

            <div className="male flex gap-2">
              <input
                type="radio"
                name="gender"
                id="male"
                value="Male"
                checked={gender === "Male"}
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>

            <div className="female flex gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                id="female"
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-10/12 h-12 bg-[#2686f7] hover:cursor-pointer text-white font-semibold rounded-xl shadow-md transition transform hover:translate-y-[-2px] hover:bg-[#109e5a]"
          >
            Sign Up
          </button>
          <GoogleBtn />
          <p className="text-center text-gray-600 ">
            Already have an account?{""}
            <a
              href="#"
              className="text-[#2686f7] hover:text-[#109e5a] font-medium"
              onClick={props.signtoLogin}
            >
              login
            </a>
          </p>
        </form>
        {showPopup && (
          <Popup
            message={"Please kindly fill all the fileds"}
            onClose={() => {
              setShowPopup(false);
            }}
          />
        )}
        {showPopup2 && (
          <Popup
            message={"yours password did not match to your confirm password"}
            onClose={() => {
              setShowPopup2(false);
            }}
          />
        )}
        {showPopup3 && (
          <Popup
            message={errorMessage}
            onClose={() => {
              setShowPopup3(false);
            }}
          />
        )}
        {showPopup4 && (
          <Popup
            message={"Name should be greater than 4 alphabets"}
            onClose={() => {
              setShowPopup4(false);
            }}
          />
        )}
        {showPopup5 && (
          <Popup
            message={"Number or special character are not allowed in name"}
            onClose={() => {
              setShowPopup5(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default SignUpForm;
