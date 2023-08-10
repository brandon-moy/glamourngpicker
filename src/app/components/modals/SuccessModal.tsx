"use client";
import React from "react";
import { useAppContext } from "../context/AppContext";
import { fullGlamSet } from "@/app/lib/types";
import capitalizeWord from "@/app/lib/capitalizeWord";
import Image from "next/image";

export default function SuccessModal() {
  const {
    completedGlam,
    displaySuccess,
    closeSuccessWindow,
    resetGlam,
    randomizeGlamour,
  } = useAppContext();

  function renderItemIcon(itemType: string, name: string) {
    const formattedName = name.replace(/\s+/g, "_");
    if (formattedName.includes("/")) {
      const items = formattedName.split("/");
      return (
        <div key={name}>
          <Image
            width="60"
            height="60"
            alt={items[0]}
            src={`/${itemType}/60px-${items[0]}_Icon.png`}
            className="min-w-[60px] aspect-square"
          />
          <Image
            width="60"
            height="60"
            alt={items[1]}
            src={`/${itemType}/60px-${items[1]}_Icon.png`}
          />
        </div>
      );
    } else {
      return (
        <div key={name}>
          <Image
            width="60"
            height="60"
            alt={name}
            src={`/${itemType}/60px-${formattedName}_Icon.png`}
            className="min-w-[60px] aspect-square"
          />
          <div className="w-0 lg:min-w-[60px] aspect-square"></div>
        </div>
      );
    }
  }

  function renderGlam(glamSet: fullGlamSet) {
    return Object.entries(glamSet).map(([item, value]) => {
      const { name, dyeable, dye } = value;
      const itemName = capitalizeWord(item);
      return (
        <div
          key={item}
          className="p-1 lg:p-2 font-durusans basis-full lg:basis-1/3"
        >
          <p className="font-bold lg:text-2xl font-josefinsans">{itemName}</p>
          <div className="flex">
            {renderItemIcon(item, name)}
            <div className="pl-2">
              <p className="text-lg lg:text-xl">{name}</p>
              <p className="text-sm italic lg:text-md">
                {!dyeable
                  ? "Not dyeable"
                  : !dye.length
                  ? "No dye was selected"
                  : dye}
              </p>
            </div>
          </div>
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
      <div className="w-5/6 p-6 mx-auto mt-8 rounded bg-background lg:mt-24 lg:w-3/5">
        <p className="p-2 text-xl font-bold text-center lg:p-4 font-poppins lg:text-4xl">
          Enjoy your brand new Glamour choice!
        </p>
        <div className="flex flex-wrap">{renderGlam(completedGlam)}</div>
        <div className="flex w-full pt-4 justify-evenly">
          <button
            className="px-2 py-1 text-white rounded lg:text-2xl bg-secondary font-poppins active:translate-y-0.5 active:brightness-75"
            onClick={() => randomizeGlamour()}
          >
            Reroll!
          </button>
          <button
            className="px-2 py-1 text-white rounded lg:text-2xl bg-secondary font-poppins active:translate-y-0.5 active:brightness-75"
            onClick={restartGlamouRNG}
          >
            Restart?
          </button>
        </div>
      </div>
    </div>
  );
}
