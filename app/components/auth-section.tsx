"use client";

import { useSession } from "next-auth/react";
import ConnectGithub from "./connect-github";
import Form from "./form";

const AuthSection = () => {
  const { data, status } = useSession();

  const isAuthenticated = status === "authenticated" && !!data?.user;

  return <div>{isAuthenticated ? <Form /> : <ConnectGithub />}</div>;
};

export default AuthSection;
