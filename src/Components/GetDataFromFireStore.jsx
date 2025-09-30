import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";

const GetDataFromFireStore = ({ item }) => {
  useEffect(() => {
    const fetchData = async () => {
      const userUid = localStorage.getItem("user");

      if (!userUid) return;

      const docRef = doc(db, "users", userUid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userName = docSnap.data().name;
        item(userName);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, [item]);

  return null;
};

export default GetDataFromFireStore;
