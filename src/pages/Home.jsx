import { useState } from "react";
import Header from "../Components/Header";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";

const Home = () => {
  const [activeForm, setActiveForm] = useState(null);

  function loginClickChecker() {
    setActiveForm("login");
  }
  function signUpClickChecker() {
    setActiveForm("signup");
  }
  function closeForm() {
    setActiveForm(null);
  }

  return (
    <>
      <div className="mainCont w-11/12 ">
        {activeForm === null && (
          <Header login={loginClickChecker} sign={signUpClickChecker} />
        )}

        {activeForm === "login" && (
          <LoginForm close={closeForm} logintoSign={signUpClickChecker} />
        )}

        {activeForm === "signup" && (
          <SignUpForm close={closeForm} signtoLogin={loginClickChecker} />
        )}
      </div>
    </>
  );
};

export default Home;
