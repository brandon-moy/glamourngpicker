"use client";
import { useAppContext } from "../context/AppContext";
import { inputData } from "@/app/lib/formInputs";
import { allDyes } from "@/app/lib/dyes";
import { fullGlamSet, invalidPiece } from "@/app/lib/types";
import capitalizeWord from "@/app/lib/capitalizeWord";
import { invalid } from "@/app/lib/types";

export default function FormInputs() {
  const {
    completedGlam,
    handleGearChange,
    handleGearDyeColor,
    handleGearDyeGroup,
    invalid,
  } = useAppContext();

  function displayError(invalidPiece: invalidPiece, pieceName: string) {
    if (!invalidPiece.piece && !invalidPiece.dye) return <></>;
    return (
      <span className="pl-2 text-sm text-red-500">
        Invalid values for {pieceName} or dye
      </span>
    );
  }

  function renderInputs() {
    return inputData.map((piece) => {
      return (
        <div key={piece.pieceName} className="w-full">
          <label className="flex flex-wrap py-2 font-bold font-josefinsans basis-full">
            {capitalizeWord(piece.pieceName) + ":"}
            {displayError(
              invalid[piece.pieceName as keyof invalid],
              piece.pieceName
            )}
            <input
              onChange={(e) =>
                handleGearChange(
                  piece.pieceName,
                  piece.maxOptions,
                  e.target.value
                )
              }
              className={`w-full pl-2 font-normal border-solid outline-none focus:ring-0 border rounded border-2 ${
                invalid[piece.pieceName as keyof invalid].piece
                  ? "border-red-500 text-red-500"
                  : "focus:border-secondary"
              }`}
              type="number"
              name={piece.pieceName}
              min="1"
              max={piece.maxOptions}
              placeholder={`1-${piece.maxOptions}`}
            ></input>
          </label>
          <label className="w-full font-bold font-josefinsans">
            Dye:{" "}
            <input
              className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
                invalid[piece.pieceName as keyof invalid].dye
                  ? "border-red-500 text-red-500"
                  : "focus:border-secondary"
              }`}
              type="number"
              name="dye-category"
              disabled={
                !completedGlam[piece.pieceName as keyof fullGlamSet].dyeable
              }
              placeholder="1-9"
              min="1"
              max="9"
              onChange={(e) =>
                handleGearDyeGroup(piece.pieceName, e.target.value)
              }
            ></input>
            <input
              type="number"
              className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
                invalid[piece.pieceName as keyof invalid].dye
                  ? "border-red-500 text-red-500"
                  : "focus:border-secondary"
              }`}
              name="dye-color"
              min="1"
              max={
                allDyes[
                  completedGlam[piece.pieceName as keyof fullGlamSet].dyeGroup
                ].length
              }
              disabled={
                !completedGlam[piece.pieceName as keyof fullGlamSet].dyeable
              }
              placeholder={`1-${
                allDyes[
                  completedGlam[piece.pieceName as keyof fullGlamSet].dyeGroup
                ].length
              }`}
              onChange={(e) =>
                handleGearDyeColor(piece.pieceName, e.target.value)
              }
            ></input>
          </label>
        </div>
      );
    });
  }

  return <>{renderInputs()}</>;
}
