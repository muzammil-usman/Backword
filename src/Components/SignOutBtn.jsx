import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const SignOutBtn = () => {
  let signOuter = () => {
    signOut(auth)
      .then(() => {
        console.log("user bahar aagaya");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={signOuter}>Sign Out</button>
    </>
  );
};

export default SignOutBtn;
