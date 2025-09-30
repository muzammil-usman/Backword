import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const GoogleBtn = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  let GoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        SignUpUser(user);
        localStorage.setItem("user", user.uid);

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  let SignUpUser = async (user) => {
    await setDoc(doc(db, "users", user?.uid), {
      name: user?.displayName,
      uid: user?.uid,
      email: user?.email,
      photoUrl: user?.photoURL,
    });
  };

  return (
    <div
      onClick={GoogleSignIn}
      className="
        flex items-center justify-center md:w-10/12
        sm:w-52 h-10 sm:h-12 
        bg-red-500 text-white font-medium gap-2.5 rounded-lg shadow-md
        transition-all duration-300 ease-in-out 
        hover:bg-red-600 hover:scale-105 hover:shadow-lg
        active:scale-95 cursor-pointer
      "
    >
      <FontAwesomeIcon icon={faGoogle} className="text-lg sm:text-xl" />
      <p className="text-sm sm:text-base">Continue with Google</p>
    </div>
  );
};

export default GoogleBtn;
