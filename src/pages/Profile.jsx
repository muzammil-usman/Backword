import { useParams } from "react-router-dom";
import ProfileHeader from "../Components/ProfileHeader";
import UserInfo from "../Components/UserInfo";
import { useState } from "react";
import EditNameModal from "../Components/EditNameModal";

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
      <div className={`${modal ? "w-screen" : "w-11/12"} mx-auto`}>
        {!modal && <ProfileHeader />}
        {!modal && <UserInfo status={ModalStatusChanger} />}
        {modal && <EditNameModal close={ModalStatusChanger2} />}
      </div>
    </>
  );
};

export default Profile;
