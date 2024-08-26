import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SigninWidget = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default SigninWidget;