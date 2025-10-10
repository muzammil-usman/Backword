import { useState } from "react";
import GetDataFromFireStore from "./GetDataFromFireStore";
import Loader from "./Loader";

const UserBio = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  const [joinTime, setJoinTime] = useState("");
  const [gender, setGender] = useState("");

  const dayJoined =
    typeof joinTime === "number" ? new Date(joinTime).getDate() : "";

  const formattedDate =
    typeof joinTime === "number"
      ? new Date(joinTime).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "";

  return (
    <>
      <GetDataFromFireStore
        setLoading={setLoading}
        item={setUser}
        time={setJoinTime}
        genderStatus={setGender}
      />

      <div className="capitalize relative w-screen md:w-120 h-96 items-center justify-center sm:w-full bg-white shadow-lg rounded-2xl border border-gray-100 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-800 text-center absolute left-6 top-3">
          ✨ Intro
        </h2>
        {loading ? (
          <Loader />
        ) : (
          <>
            <input
              type="text"
              placeholder="Write something about yourself..."
              className="w-80 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 text-gray-700 transition-all duration-200"
            />

            <button className="w-40 bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 font-medium">
              ✏️ Edit Bio
            </button>

            <p>gender : {gender}</p>
            <p>Joined on : {formattedDate}</p>
          </>
        )}
      </div>
    </>
  );
};

export default UserBio;
