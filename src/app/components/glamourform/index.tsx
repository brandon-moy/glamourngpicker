"use client";
import { useAppContext } from "../context/AppContext";
import { FormEvent } from "react";
import FormInputs from "./inputs";
import { useModalContext } from "../context/ModalContext";

export default function GlamourForm() {
  const { completedGlam, randomizeGlamour } = useAppContext();
  const { openSuccessWindow } = useModalContext();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    openSuccessWindow();
  }

  const randomize = () => {
    randomizeGlamour();
    openSuccessWindow();
  };

  const emptyInputs =
    completedGlam.helmet.name !== "" &&
    completedGlam.chest.name !== "" &&
    completedGlam.glove.name !== "" &&
    completedGlam.leg.name !== "" &&
    completedGlam.boot.name !== "";
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-wrap mx-auto">
        <div className="w-full h-12 text-center ">
          <p className="w-full text-2xl font-bold font-poppins">
            GlamouRNG Picker
          </p>
          <div className="h-[5px] bg-gradient"></div>
        </div>
        <FormInputs />
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
