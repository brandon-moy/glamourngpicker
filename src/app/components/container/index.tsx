"use client";
import React, { useState } from "react";
import GlamourForm from "../glamourform";
import Modal from "../modal";

export default function Container() {
  const [displayed, setDisplayed] = useState<boolean>(true);

  return (
    <div className="w-5/6 p-4 mx-auto mt-8 bg-gray-100 bg-opacity-75 rounded lg:w-1/5">
      <Modal display={displayed} closeModal={() => setDisplayed(false)} />
      <GlamourForm />
    </div>
  );
}
