import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const params = useParams();
  return (
    <>
      <h1>{username} ki profile</h1>
      {console.log(params)}
    </>
  );
};

export default Profile;
