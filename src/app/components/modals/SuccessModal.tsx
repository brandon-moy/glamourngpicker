"use client";
import React from "react";
import { useAppContext } from "../context/AppContext";

export default function SuccessModal() {
  const { completedGlam } = useAppContext();

  return (
    <div className="absolute inset-0 bg-gray-900 bg-opacity-25">
      <div className="w-5/6 p-8 mx-auto mt-24 bg-gray-100 rounded lg:w-1/2">
        <p className="p-4 text-2xl text-center lg:text-4xl">
          Enjoy your brand new Glamour choice!
        </p>

        <button className="font-bold">Get started!</button>
      </div>
    </div>
  );
}
