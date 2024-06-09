import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center align-center">
      <div
        className="bg-[url(/spinner.svg)] w-full
      "
      ></div>
    </div>
  );
}
