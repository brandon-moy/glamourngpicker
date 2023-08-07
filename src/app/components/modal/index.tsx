"use client";
import React, { useState } from "react";

export default function Modal() {
  const [display, setDisplayed] = useState<boolean>(true);

  function closeModal() {
    setDisplayed(false);
  }
  if (!display) return <></>;
  return (
    <div className="absolute inset-0 bg-gray-900 bg-opacity-25">
      <div className="w-5/6 p-8 mx-auto mt-24 bg-gray-100 rounded lg:w-1/2">
        <p className="p-4 text-2xl text-center lg:text-4xl">
          Welcome to GlamouRNG Picker
        </p>
        <p className="text-sm lg:text-lg">
          Have you ever wanted a new glam but couldn&apos;t decide what you
          wanted? Well you&apos;ve come to the right place!
        </p>
        <p className="py-2 font-bold">How this works:</p>
        <p className="pb-4 text-sm lg:text-lg">
          Currently available are all items on the Marketboard for any job at
          level 1. You just need to go through the inputs and add in a number
          within the range. To make it extra spicy from your number, it will
          pick a random number from there to ensure different results each time.
          If the gear piece is able to be dyed, then there will be an option to
          add two more numbers for the dye! This way, you can ensure an
          abomination to everyone&apos;s eyes!
        </p>
        <button className="font-bold" onClick={closeModal}>
          Get started!
        </button>
      </div>
    </div>
  );
}
