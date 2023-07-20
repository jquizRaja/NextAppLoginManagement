"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import User from "@/models/userModel";
import { redirect } from "next/navigation";

export async function updateUser({ name, image }) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("UnAuthorization!");

  try {
    const user = await User.findByIdAndUpdate(
      session?.user?._id,
      {
        name,
        image
      },
      { new: true }
    ).select("-password")

    if(!user) throw new Error("Email does not Exsits!")

    return {msg: "Updated Profile Successfully!"}
    
  } catch (error) {
    redirect(`/errors?error=${error.message}`)
  }
}