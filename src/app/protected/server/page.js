"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const ProtectedServerPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 style={{ color: "green" }}>ProtectedServerPage</h1>
      <p style={{ color: "green" }}>
        You are Logged as <b>{session?.user?.name}@INDIA</b>
      </p>
    </div>
  );
};

export default ProtectedServerPage;
