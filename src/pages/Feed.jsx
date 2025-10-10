import { useContext } from "react";
import FeedHeader from "../Components/FeedHeader";
import { UserStatusContext } from "../Components/OnAuthStateC";
import GenderPopUp from "../Components/GenderPopUp";

const Feed = () => {
  const { showGenderPrompt } = useContext(UserStatusContext);
  return (
    <>
      <div
        className={`${
          showGenderPrompt ? "w-screen" : "w-11/12 flex gap-10 flex-col"
        } mx-auto`}
      >
        {showGenderPrompt ? <GenderPopUp /> : <FeedHeader />}
      </div>
    </>
  );
};

export default Feed;
