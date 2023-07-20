"use client";
import { signIn } from "next-auth/react";

const SignIn = ({ callbackUrl }) => {
  return (
    <div>
      <h1>SignIn with NEXTAUTH</h1>
      <h2>Component auth SignIn Page</h2>
      {/* Google Login */}
      <div style={{ margin: "30px 0" }}>
        <button onClick={() => signIn("google", { callbackUrl })}>
          Contiou with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
