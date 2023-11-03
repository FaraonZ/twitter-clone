import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default Profile;
