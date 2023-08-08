"use client";
import { useAppContext } from "../context/AppContext";
import { FormEvent } from "react";
import FormInputs from "./inputs";

export default function GlamourForm() {
  const { completedGlam, openSuccessWindow } = useAppContext();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    openSuccessWindow();
  }

  const disabled =
    (completedGlam.helmet.name === "" && completedGlam.helmet.dyeable) ||
    (completedGlam.chest.name === "" && completedGlam.helmet.dyeable) ||
    (completedGlam.glove.name === "" && completedGlam.helmet.dyeable) ||
    (completedGlam.leg.name === "" && completedGlam.helmet.dyeable) ||
    (completedGlam.boot.name === "" && completedGlam.helmet.dyeable);
  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap mx-auto">
      <FormInputs />
      <div className="flex w-full my-4 justify-evenly">
        <button
          disabled={disabled}
          className="px-2 py-1 text-white bg-gray-600 rounded"
        >
          Submit!
        </button>
      </div>
    </form>
  );
}
