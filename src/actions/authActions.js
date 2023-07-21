"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import User from "@/models/userModel";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { generateToken } from "@/utils/token";

export async function updateUser({ name, image }) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("UnAuthorization!");

  try {
    const user = await User.findByIdAndUpdate(
      session?.user?._id,
      {
        name,
        image,
      },
      { new: true }
    ).select("-password");

    if (!user) throw new Error("Email does not Exsits!");

    return { msg: "Updated Profile Successfully!" };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function signUpWithCredentials(data) {
  try {
    const user = await User.findOne({ email: data.email });
    if (user) throw new Error("Email already Exsits!");

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 12);
    }
    const token = generateToken({ user: data });
    console.log({ token });

    return {
      msg: "Sign Up Sucess! Check your email to complete the Registeration",
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}
