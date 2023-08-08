"use client";
import { useAppContext } from "../context/AppContext";
import { inputData } from "@/app/lib/formInputs";
import { allDyes } from "@/app/lib/dyes";
import { fullGlamSet } from "@/app/lib/types";
import capitalizeWord from "@/app/lib/capitalizeWord";

export default function FormInputs() {
  const {
    completedGlam,
    handleGearChange,
    handleGearDyeColor,
    handleGearDyeGroup,
  } = useAppContext();

  function renderInputs() {
    return inputData.map((piece) => {
      return (
        <div key={piece.pieceName} className="w-full">
          <label className="flex flex-col py-2 font-bold basis-full">
            {capitalizeWord(piece.pieceName)}
            <input
              onChange={(e) =>
                handleGearChange(
                  piece.pieceName,
                  piece.maxOptions,
                  e.target.value
                )
              }
              className="w-full pl-2 font-normal"
              type="number"
              name={piece.pieceName}
              min="1"
              max={piece.maxOptions}
              placeholder={`1-${piece.maxOptions}`}
            ></input>
          </label>
          <label className="w-full font-bold">
            Dye:{" "}
            <input
              className="w-1/3 mx-2 font-normal"
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
              className="w-1/3 mx-2 font-normal"
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
