import { useContext, useState } from "react";
import { UserStatusContext } from "./OnAuthStateC";
import { Link } from "react-router-dom";
import GetDataFromFireStore from "./GetDataFromFireStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const FeedHeader = () => {
  const { user } = useContext(UserStatusContext);
  const [userName, setUsername] = useState("");

  return (
    <>
      <header className="flex justify-between w-full h-16 items-center px-4 bg-white shadow-md">
        <p className="logo text-2xl font-bold text-[#2686f7] cursor-pointer">
          Back Word
        </p>
        <GetDataFromFireStore item={setUsername} />

        <Link className="flex gap-2.5 items-center" to={`/profile/${userName}`}>
          <FontAwesomeIcon icon={faUser} />

          {user ? userName : "Guest"}
        </Link>
      </header>
    </>
  );
};

export default FeedHeader;
