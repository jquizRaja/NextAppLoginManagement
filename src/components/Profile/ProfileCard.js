import Image from "next/image";
import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div>
      <h1>Name : {user?.name} </h1>
      {user?.image && (
        <Image src={user?.image} alt="avatar" width={100} height={100} />
      )}
      <h3>Email : {user?.email}</h3>
      <p>Role : {user?.role}</p>
      <p>Provider : {user?.provider}</p>
    </div>
  );
};

export default ProfileCard;
