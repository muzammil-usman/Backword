import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GetDataFromFireStore from "./GetDataFromFireStore";
import { useContext, useState } from "react";
import { db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { UserStatusContext } from "./OnAuthStateC";
import Loader from "./Loader";

const EditNameModal = (prop) => {
  const { userUid } = useContext(UserStatusContext);
  const [user, setUser] = useState("");
  const [name, setUpdateName] = useState("");
  const [loading, setLoading] = useState(true);
  const userBio = doc(db, "users", userUid);

  let UpdateName = async () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name || name.trim() === user.trim() || !nameRegex.test(name)) {
      prop.close();
      return;
    } else {
      await updateDoc(userBio, {
        name: name,
      }).then(prop.close);
    }
  };

  console.log(user);

  return (
    <>
      <GetDataFromFireStore item={setUser} setLoading={setLoading} />

      {loading ? (
        <Loader />
      ) : (
        <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-[#000000c4] via-[#2686f7] to-[#fe5a59]">
          <div className=" w-96 relative h-48 bg-white flex flex-col justify-center items-center gap-6">
            <button
              className="absolute top-1 right-1 px-3 py-1 bg-red-500 text-white rounded hover:cursor-pointer"
              onClick={prop.close}
            >
              ✖
            </button>

            <input
              type="text"
              defaultValue={user}
              placeholder="Update your name"
              onChange={(e) => setUpdateName(e.target.value)}
              className="w-11/12 h-12 border capitalize pl-5 border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-[#2686f7] transition"
            />
            <div className="flex justify-center items-center gap-4 ">
              <div
                className="flex justify-center items-center bg-[#2686f7] w-20 h-8 hover:text-white hover:cursor-pointer"
                onClick={UpdateName}
              >
                <FontAwesomeIcon icon={faCheck} />
                <p>Save</p>
              </div>
              <div
                className="flex justify-center items-center bg-red-400  w-20 h-8 hover:text-white hover:cursor-pointer "
                onClick={prop.close}
              >
                <FontAwesomeIcon icon={faXmark} />
                <p>Cancel</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditNameModal;
