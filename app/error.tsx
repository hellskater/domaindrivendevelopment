"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-black flex justify-center items-center h-[80vh] text-white italic">
      <p className="text-center">
        Oops, something went wrong... Please refresh the page
      </p>
    </div>
  );
}
