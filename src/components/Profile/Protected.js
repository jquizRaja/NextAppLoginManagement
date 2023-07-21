"use client"
import { useSession } from "next-auth/react";

const ProtectedComponent = ({ user }) => {
    const {data:session}=useSession();
  return (
    <div>
      <p style={{ color: "red" }}>
        You are Logged as <b>{session?.user?.name || user}@INDIA</b>
      </p>
    </div>
  );
};

export default ProtectedComponent;
