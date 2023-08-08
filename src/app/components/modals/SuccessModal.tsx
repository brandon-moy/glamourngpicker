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
      console.log(dye);
      const itemName = capitalizeWord(item);
      return (
        <div key={item}>
          <p className="font-bold">{itemName}</p>
          <p>{name}</p>
          {!dyeable ? (
            <p>Sorry, this piece isn&apos;t dyeable</p>
          ) : !dye.length ? (
            <p>No dye option was selected</p>
          ) : (
            <p>{dye}</p>
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
        <p className="p-4 text-2xl font-bold text-center lg:text-4xl">
          Enjoy your brand new Glamour choice!
        </p>
        {renderGlam(completedGlam)}
        <button className="font-bold" onClick={restartGlamouRNG}>
          Restart?
        </button>
      </div>
    </div>
  );
}
