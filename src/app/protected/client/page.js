"use client";
import { useSession } from "next-auth/react";

const ProtectedClientPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1 style={{ color: "red" }}>ProtectedClientPage</h1>
      <p style={{ color: "red" }}>
        You are Logged as <b>{session?.user?.name}@INDIA</b>
      </p>
    </div>
  );
};

export default ProtectedClientPage;