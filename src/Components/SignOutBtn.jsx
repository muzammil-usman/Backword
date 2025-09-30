import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const SignOutBtn = () => {
  let signOuter = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        console.log("user bahar aagaya");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div onClick={signOuter}>
        <FontAwesomeIcon icon={faPowerOff} />
        <p>Sign Out</p>
      </div>
    </>
  );
};

export default SignOutBtn;
