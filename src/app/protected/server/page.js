"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProtectedComponent from "@/components/Profile/Protected";
import { getServerSession } from "next-auth";

const ProtectedServerPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 style={{ color: "green" }}>ProtectedServerPage</h1>
      <ProtectedComponent user={session?.user} />
    </div>
  );
};

export default ProtectedServerPage;
