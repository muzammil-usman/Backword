import { useContext, useState } from "react";
import { UserStatusContext } from "./OnAuthStateC";
import { Link } from "react-router-dom";
import GetDataFromFireStore from "./GetDataFromFireStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import MiniLoader from "./MiniLoader";

const FeedHeader = () => {
  const { user } = useContext(UserStatusContext);
  const [userName, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState("");
  const [gender, setGender] = useState("");

  return (
    <>
      <GetDataFromFireStore
        item={setUsername}
        setLoading={setLoading}
        time={setTime}
        genderStatus={setGender}
      />

      <header className="flex justify-between w-full h-16 items-center px-4 bg-white shadow-md">
        <p className="logo text-2xl font-bold text-[#2686f7] cursor-pointer">
          Back Word
        </p>
        <Link className="flex gap-2.5 items-center" to={`/profile/${userName}`}>
          <FontAwesomeIcon icon={faUser} />
          {loading ? (
            <>
              <div className="w-12 h-12">
                <MiniLoader />
              </div>
            </>
          ) : (
            <p className="capitalize">{user ? userName : "Guest"}</p>
          )}
        </Link>
      </header>
    </>
  );
};

export default FeedHeader;
