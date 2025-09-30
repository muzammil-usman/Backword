import { useParams } from "react-router-dom";
import ProfileHeader from "../Components/ProfileHeader";

const Profile = () => {
  const { username } = useParams();
  return (
    <>
      <ProfileHeader />
    </>
  );
};

export default Profile;
