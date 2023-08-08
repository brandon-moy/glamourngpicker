"use client";
import { useAppContext } from "../context/AppContext";
import { FormEvent } from "react";
import FormInputs from "./inputs";

export default function GlamourForm() {
  const { completedGlam, openSuccessWindow, invalid } = useAppContext();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    openSuccessWindow();
  }

  const emptyInputs =
    completedGlam.helmet.name !== "" &&
    completedGlam.chest.name !== "" &&
    completedGlam.glove.name !== "" &&
    completedGlam.leg.name !== "" &&
    completedGlam.boot.name !== "";
  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap mx-auto">
      <div className="relative w-full h-12 text-center ">
        <p className="w-full text-2xl font-bold font-poppins">
          GlamouRNG Picker
        </p>
        <p className="absolute bottom-[-1.25rem] font-durusans lg:bottom-[-1.5rem] w-full text-sm font-bold text-red-500 ">
          {invalid}
        </p>
      </div>
      <FormInputs />
      <div className="flex w-full mt-4 justify-evenly">
        <button
          disabled={!emptyInputs}
          className="px-2 py-1 text-white rounded bg-secondary font-poppins"
        >
          Submit!
        </button>
      </div>
    </form>
  );
}
