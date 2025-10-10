import { useEffect, createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const UserStatusContext = createContext();

const OnAuthStateC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [showGenderPrompt, setShowGenderPrompt] = useState(false);
  const [gender, setGender] = useState("");

  useEffect(() => {
    const userChecker = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const ref = doc(db, "users", uid);

        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();
          setCurrentUser(data);
          if (!data.gender) {
            setShowGenderPrompt(true);
          }
        }

        setUser(user);
        setUserUid(uid);
        navigate("/feed", { replace: true });
      } else {
        setUser(null);
        navigate("/", { replace: true });
        console.log("no user logged in");
      }
      setLoading(false);
    });
    return () => userChecker();
  }, []);

  return (
    <UserStatusContext.Provider value={{ user, userUid, showGenderPrompt }}>
      <>{!loading && children}</>
    </UserStatusContext.Provider>
  );
};

export default OnAuthStateC;
