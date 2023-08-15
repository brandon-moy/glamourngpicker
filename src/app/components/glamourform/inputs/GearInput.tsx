import { itemContextType } from "@/app/utils/types";
import { capitalizeWord } from "@/app/utils";

interface GearInputProps {
  itemName: string;
  maxOptions: number;
  gearPiece: itemContextType;
}

export default function GearInputs({
  itemName,
  maxOptions,
  gearPiece,
}: GearInputProps) {
  const {
    piece,
    invalidPiece,
    invalidPieceDye,
    invalidPieceDyeGroup,
    handlePieceChange,
    handlePieceDyeGroup,
    handlePieceDyeColor,
    allDyeGroups,
  } = gearPiece;

  function displayError() {
    if (!invalidPiece && !invalidPieceDye && !invalidPieceDyeGroup) return;
    return (
      <span className="pl-2 text-sm text-red-500">
        Invalid values for {itemName} or dye
      </span>
    );
  }

  return (
    <div className="w-full">
      <label className="flex flex-wrap py-2 font-bold font-josefinsans basis-full">
        {capitalizeWord(itemName) + ":"}
        <p>{displayError()}</p>
        <input
          onChange={(e) => handlePieceChange(e.target.value)}
          className={`w-full pl-2 font-normal border-solid outline-none focus:ring-0 border rounded border-2 ${
            invalidPiece
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name={itemName}
          min="1"
          max={maxOptions}
          placeholder={`1-${maxOptions}`}
        ></input>
      </label>
      <label className="w-full font-bold font-josefinsans">
        Dye:{" "}
        <input
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            invalidPieceDyeGroup
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="dye-category"
          disabled={!piece.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handlePieceDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            invalidPieceDye
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          name="dye-color"
          min="1"
          max={allDyeGroups[piece.dyeGroup].length}
          disabled={!piece.dyeable}
          placeholder={`1-${allDyeGroups[piece.dyeGroup].length}`}
          onChange={(e) => handlePieceDyeColor(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
