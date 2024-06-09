"use client";

import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button
        className="hover:text-amber-600 dark:bg-white bg-gray-500 text-white dark:text-gray-500 px-4 py-2 rounded-lg mt-5"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
