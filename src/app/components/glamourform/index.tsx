"use client";
import { FormEvent } from "react";
import { useModalContext } from "../context/ModalContext";
import { useAppContext } from "../context/AppContext";
import FormInputs from "./inputs/FormInputs";

export default function GlamourForm() {
  const { openSuccessWindow } = useModalContext();
  const { helmet, chest, glove, leg, boot } = useAppContext();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    openSuccessWindow();
  }

  const randomize = () => {
    helmet.randomizePiece();
    chest.randomizePiece();
    glove.randomizePiece();
    leg.randomizePiece();
    boot.randomizePiece();
    openSuccessWindow();
  };

  const emptyInputs =
    helmet.piece.name !== "" &&
    chest.piece.name !== "" &&
    glove.piece.name !== "" &&
    leg.piece.name !== "" &&
    boot.piece.name !== "";
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-wrap mx-auto">
        <div className="w-full pt-2 text-center bg-darker">
          <p className="w-full pb-2 text-2xl font-bold text-white font-poppins">
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
