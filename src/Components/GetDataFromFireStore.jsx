import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useContext, useEffect } from "react";
import { UserStatusContext } from "./OnAuthStateC";

const GetDataFromFireStore = ({ item, setLoading, time, genderStatus }) => {
  const { userUid } = useContext(UserStatusContext);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "users", userUid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userName = docSnap.data()?.name;
        const joinTime = docSnap.data()?.joinTime;
        const gender = docSnap.data()?.gender;
        item(userName);
        time(joinTime);
        setLoading(false);
        genderStatus(gender);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, [item, setLoading, userUid, time, genderStatus]);

  return null;
};

export default GetDataFromFireStore;
