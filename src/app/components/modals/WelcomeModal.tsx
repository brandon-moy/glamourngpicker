"use client";
import React from "react";
import { useAppContext } from "../context/AppContext";

export default function WelcomeModal() {
  const { displayWelcome, handleDisplayWelcome } = useAppContext();

  if (!displayWelcome) return <></>;
  return (
    <div className="absolute inset-0 z-50 bg-gray-900 bg-opacity-25">
      <div className="w-5/6 p-8 mx-auto mt-6 bg-gray-100 rounded lg:mt-24 lg:w-1/2">
        <p className="p-4 text-2xl text-center font-poppins lg:text-4xl">
          Welcome to GlamouRNG Picker
        </p>
        <p className="text-sm lg:text-lg font-josefinsans">
          Have you ever wanted a new glam but couldn&apos;t decide what you
          wanted? Well you&apos;ve come to the right place!
        </p>
        <p className="py-2 font-bold font-poppins">How this works:</p>
        <p className="pb-4 text-sm lg:text-lg font-josefinsans">
          Currently available are all items on the Marketboard for any job at
          level 1. You just need to go through the inputs and add in a number
          within the range. To make it extra spicy from your number, it will
          pick a random number from there to ensure different results each time.
          If the gear piece is able to be dyed, then there will be an option to
          add two more numbers for the dye! This way, you can ensure an
          abomination to everyone&apos;s eyes!
        </p>
        <div className="flex justify-center w-full">
          <button
            className="text-2xl underline font-poppins"
            onClick={handleDisplayWelcome}
          >
            Get started!
          </button>
        </div>
      </div>
    </div>
  );
}
