"use client";

import { BsGithub } from "react-icons/bs";
import { signIn } from "next-auth/react";

const ConnectGithub = () => {
  return (
    <div>
      <p className="mt-6 text-orange-500">
        Sign in with Github to make an entry
      </p>
      <button
        onClick={() => signIn("github")}
        className="mt-4 bg-gray-900 hover:bg-gray-800 transition-all duration-300 text-white px-4 py-2 rounded-md"
      >
        <BsGithub className="inline-block mr-2" />
        Connect Github
      </button>
    </div>
  );
};

export default ConnectGithub;
