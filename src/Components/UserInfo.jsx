import { useState } from "react";
import GetDataFromFireStore from "./GetDataFromFireStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";

const UserInfo = (prop) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <>
      <GetDataFromFireStore item={setUser} setLoading={setLoading} />

      {loading ? (
        <Loader />
      ) : (
        <div className="w-full h-40 flex justify-between items-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className=" flex justify-around items-center gap-5  ">
            <div className="w-30 h-30 rounded-full ml-5 bg-[#2686f7]"></div>
            <p className="text-2xl capitalize">{user}</p>
          </div>
          <div className="w-40 h-30 flex items-end ">
            <div
              onClick={prop.status}
              className="flex text-white hover:cursor-pointer items-center justify-center w-32 h-10 gap-1.5 bg-[#2686f7]"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
              <p>Edit Profile</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;
