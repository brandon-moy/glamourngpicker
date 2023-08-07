"use client";
import React, { useState } from "react";
import GlamourForm from "../glamourform";
import Modal from "../modal";

export default function Container() {
  const [displayed, setDisplayed] = useState<boolean>(false);

  return (
    <div className="w-5/6 p-4 mx-auto mt-8 bg-gray-100 bg-opacity-75 rounded lg:w-3/5">
      <Modal display={displayed} />
      <GlamourForm />
    </div>
  );
}
