"use client";
import React from "react";
import { useAppContext } from "../context/AppContext";
import { fullGlamSet } from "@/app/lib/types";
import capitalizeWord from "@/app/lib/capitalizeWord";

export default function SuccessModal() {
  const { completedGlam, displaySuccess, closeSuccessWindow, resetGlam } =
    useAppContext();

  function renderGlam(glamSet: fullGlamSet) {
    return Object.entries(glamSet).map(([item, value]) => {
      const { name, dyeable, dye } = value;
      const itemName = capitalizeWord(item);
      return (
        <div key={item} className="p-2 font-durusans basis-full lg:basis-1/3">
          <p className="text-2xl font-bold font-josefinsans">{itemName}</p>
          <p className="text-xl">{name}</p>
          {!dyeable ? (
            <p className="text-md">Sorry, this piece isn&apos;t dyeable</p>
          ) : !dye.length ? (
            <p className="text-md">No dye option was selected</p>
          ) : (
            <p className="text-md">{dye}</p>
          )}
        </div>
      );
    });
  }

  const restartGlamouRNG = () => {
    resetGlam();
    closeSuccessWindow();
  };

  if (!displaySuccess) return <></>;
  return (
    <div className="absolute inset-0 z-50 bg-gray-900 bg-opacity-25">
      <div className="w-5/6 p-8 mx-auto mt-8 bg-gray-100 rounded lg:mt-24 lg:w-1/2">
        <p className="p-4 text-2xl font-bold text-center font-poppins lg:text-4xl">
          Enjoy your brand new Glamour choice!
        </p>
        <div className="flex flex-wrap">{renderGlam(completedGlam)}</div>
        <div className="flex justify-center w-full pt-4">
          <button
            className="text-2xl underline font-poppins"
            onClick={restartGlamouRNG}
          >
            Restart?
          </button>
        </div>
      </div>
    </div>
  );
}
