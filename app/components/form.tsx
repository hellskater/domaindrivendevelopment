"use client";

import { useRef } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { saveDDDEntry } from "../actions";
import { signOut, useSession } from "next-auth/react";

export default function Form() {
  const { data } = useSession();

  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  return (
    <>
      <form
        className="flex mt-4"
        ref={formRef}
        action={async (formData) => {
          await saveDDDEntry(
            formData,
            data?.user as {
              name: string;
              email: string;
              image: string;
            }
          );
          formRef.current?.reset();
        }}
      >
        <input
          aria-label="Your story"
          placeholder="Your story"
          disabled={pending}
          name="entry"
          type="text"
          maxLength={1000}
          required
          className="w-full rounded-md px-4 py-2 bg-gray-500 bg-opacity-30 border-none outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        />
        <button
          className="bg-blue-500 bg-opacity-20 hover:text-white hover:bg-opacity-50 transition-all duration-300 text-blue-400 text-base px-4 py-2 rounded-md ml-2"
          disabled={pending}
          type="submit"
        >
          Submit
        </button>
      </form>
      <button
        onClick={() => signOut()}
        className="bg-red-500 bg-opacity-20 hover:bg-opacity-50 transition-all duration-300 hover:text-white text-red-400 py-1 px-4 rounded-md mt-4"
      >
        Sign out
      </button>
    </>
  );
}
