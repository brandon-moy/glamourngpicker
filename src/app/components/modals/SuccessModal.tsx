"use client";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { useModalContext } from "../context/ModalContext";
import { fullGlamSet } from "@/app/lib/types";
import capitalizeWord from "@/app/lib/capitalizeWord";
import Image from "next/image";
import LoadingSpinner from "./Loading";
import { useHelmetData } from "@/app/lib/useHelmetData";
import { useChestData } from "@/app/lib/useChestData";
import { useGloveData } from "@/app/lib/useGloveData";
import { useLegData } from "@/app/lib/useLegData";
import { useBootData } from "@/app/lib/useBootData";

export default function SuccessModal() {
  // const { completedGlam, resetGlam, randomizeGlamour } = useAppContext();
  const [completedGlam, setCompletedGlam] = useState<fullGlamSet>({
    helmet: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    chest: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    glove: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    leg: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    boot: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
  });
  const { helmet, randomizeHelmet, resetHelmet } = useHelmetData();
  const { chest, randomizeChest, resetChest } = useChestData();
  const { glove, randomizeGlove, resetGlove } = useGloveData();
  const { leg, randomizeLeg, resetLeg } = useLegData();
  const { boot, randomizeBoot, resetBoot } = useBootData();

  const { displaySuccess, closeSuccessWindow } = useModalContext();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setCompletedGlam({ helmet, chest, glove, leg, boot });
    setTimeout(() => setLoading(false), 1000);
  }, [displaySuccess, helmet, chest, glove, leg, boot]);

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
    resetHelmet();
    resetChest();
    resetGlove();
    resetLeg();
    resetBoot();
    closeSuccessWindow();
  };

  const rerollGlamour = () => {
    setLoading(true);
    randomizeHelmet();
    randomizeChest();
    randomizeGlove();
    randomizeLeg();
    randomizeBoot();
    setTimeout(() => setLoading(false), 1000);
  };

  if (!displaySuccess) return <></>;
  return (
    <div className="absolute inset-0 z-50 bg-gray-900 bg-opacity-25">
      {loading && <LoadingSpinner />}
      <div className="w-5/6 p-6 mx-auto mt-8 rounded bg-background lg:mt-24 lg:w-3/5">
        <p className="p-2 mb-4 text-xl font-bold text-center text-white lg:mb-8 bg-darker lg:p-4 font-poppins lg:text-4xl">
          Enjoy your brand new{" "}
          <span className="magic-text animate-[rtl_5s_linear_infinite] bg-[size:200%] text-transparent bg-clip-text bg-gradient">
            Glamour
          </span>{" "}
          choice!
        </p>
        <div className="flex flex-wrap">{renderGlam(completedGlam)}</div>
        <div className="flex w-full pt-4 justify-evenly">
          <button
            className={`px-2 py-1 rounded lg:text-2xl text-white bg-extra font-poppins active:translate-y-0.5 active:brightness-75`}
            onClick={rerollGlamour}
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
