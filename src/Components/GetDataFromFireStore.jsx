import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useContext, useEffect } from "react";
import { UserStatusContext } from "./OnAuthStateC";

const GetDataFromFireStore = ({ item, setLoading }) => {
  const { userUid } = useContext(UserStatusContext);

  useEffect(() => {
    const fetchData = async () => {
      if (!userUid) return;

      const docRef = doc(db, "users", userUid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userName = docSnap.data().name;
        item(userName);
        setLoading(false);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, [item, setLoading, userUid]);

  return null;
};

export default GetDataFromFireStore;
