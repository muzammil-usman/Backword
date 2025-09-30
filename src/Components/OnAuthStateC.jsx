import { useEffect, createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const UserStatusContext = createContext();

const OnAuthStateC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userChecker = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const uid = user.uid;
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
    <UserStatusContext.Provider value={{ user }}>
      <>{!loading && children}</>
    </UserStatusContext.Provider>
  );
};

export default OnAuthStateC;
