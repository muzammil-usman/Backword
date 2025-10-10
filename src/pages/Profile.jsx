import { useParams } from "react-router-dom";
import ProfileHeader from "../Components/ProfileHeader";
import UserInfo from "../Components/UserInfo";
import { useState } from "react";
import EditNameModal from "../Components/EditNameModal";
import UserBio from "../Components/UserBio";

const Profile = () => {
  const { username } = useParams();
  const [modal, activeModal] = useState(false);

  function ModalStatusChanger() {
    activeModal(true);
  }
  function ModalStatusChanger2() {
    activeModal(false);
  }

  return (
    <>
      <div
        className={`${
          modal ? "w-screen" : "w-11/12 flex gap-10 flex-col"
        } mx-auto`}
      >
        {!modal && <ProfileHeader />}
        {!modal && <UserInfo status={ModalStatusChanger} />}
        <div className="flex ">{!modal && <UserBio />}</div>
        {modal && <EditNameModal close={ModalStatusChanger2} />}
      </div>
    </>
  );
};

export default Profile;
