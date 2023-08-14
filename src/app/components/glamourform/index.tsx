"use client";
import { FormEvent } from "react";
import { useModalContext } from "../context/ModalContext";
// import { useHelmetData } from "@/app/lib/useGearData";
import { useChestData } from "@/app/lib/useChestData";
import { useGloveData } from "@/app/lib/useGloveData";
import { useLegData } from "@/app/lib/useLegData";
import { useBootData } from "@/app/lib/useBootData";
import HelmetInputs from "./inputs/HelmetInputs";
import ChestInputs from "./inputs/ChestInputs";
import GloveInputs from "./inputs/GloveInputs";
import LegInputs from "./inputs/LegInputs";
import BootInputs from "./inputs/BootInputs";

export default function GlamourForm() {
  // const { helmet, randomizeHelmet } = useHelmetData();
  const { chest, randomizeChest } = useChestData();
  const { glove, randomizeGlove } = useGloveData();
  const { leg, randomizeLeg } = useLegData();
  const { boot, randomizeBoot } = useBootData();
  const { openSuccessWindow } = useModalContext();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    openSuccessWindow();
  }

  const randomize = () => {
    // randomizeHelmet();
    randomizeChest();
    randomizeGlove();
    randomizeLeg();
    randomizeBoot();
    openSuccessWindow();
  };

  const emptyInputs =
    // helmet.name !== "" &&
    chest.name !== "" &&
    glove.name !== "" &&
    leg.name !== "" &&
    boot.name !== "";
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-wrap mx-auto">
        <div className="w-full pt-2 text-center bg-darker">
          <p className="w-full pb-2 text-2xl font-bold text-white font-poppins">
            GlamouRNG Picker
          </p>
          <div className="h-[5px] bg-gradient"></div>
        </div>
        <HelmetInputs />
        <ChestInputs />
        <GloveInputs />
        <LegInputs />
        <BootInputs />
        <div className="flex w-full mt-4 justify-evenly">
          <button
            type="button"
            className="px-2 py-1 text-white rounded cursor-pointer bg-extra font-poppins active:translate-y-0.5 active:brightness-75"
            onClick={randomize}
          >
            Randomize
          </button>
          <button
            disabled={!emptyInputs}
            className={`px-2 py-1 text-white rounded bg-secondary font-poppins active:translate-y-0.5 active:brightness-75 ${
              !emptyInputs ? "brightness-50" : "cursor-pointer"
            }`}
          >
            Submit!
          </button>
        </div>
      </form>
    </>
  );
}
