"use client";
import React from "react";
import { useAppContext } from "../context/AppContext";

export default function WelcomeModal() {
  const { displayWelcome, handleDisplayWelcome } = useAppContext();

  if (!displayWelcome) return <></>;
  return (
    <div className="absolute inset-0 z-50 bg-gray-900 bg-opacity-25">
      <div className="w-5/6 p-4 mx-auto mt-6 rounded lg:p-8 bg-background lg:mt-24 lg:w-1/2">
        <p className="p-4 text-2xl font-bold text-center lg:py-6 font-poppins lg:text-4xl">
          Welcome to GlamouRNG Picker
        </p>
        <p className="text-md lg:text-lg font-josefinsans">
          Have you ever wanted a new glam but couldn&apos;t decide what you
          wanted? Well you&apos;ve come to the right place!
        </p>
        <p className="py-4 text-lg font-bold lg:text-xl font-poppins">
          How this works:
        </p>
        <p className="pb-4 text-md lg:text-lg font-josefinsans">
          The items currently implemented are available on the Marketboard for
          any job at level 1. Go through the inputs and enter a number within
          the range. To make it extra spicy, your number will then be used to
          generate another random number to ensure different results each time.
          If the gear piece is able to be dyed, then there will be the option to
          randomize the dye group and color but it is not required. This way,
          you can ensure an{" "}
          <span className="line-through">
            abomination to everyone&apos;s eyes
          </span>{" "}
          amazing glam to show off to your friends!
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
