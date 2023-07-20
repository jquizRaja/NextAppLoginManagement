import SignIn from "@/components/Auth/SignIn";
import React from "react";

const SignInPage = ({searchParams:{callbackUrl}}) => {
  return (
    <div>
      <h1 style={{ color: "green" }}>SignInPage</h1>
      <SignIn callbackUrl={callbackUrl || '/'}/>
    </div>
  );
};

export default SignInPage;