import { useAppContext } from "../../context/AppContext";

export default function ChestInputs() {
  const { chest } = useAppContext();

  function displayError() {
    if (
      !chest.invalidPiece &&
      !chest.invalidPieceDye &&
      !chest.invalidPieceDyeGroup
    )
      return <></>;
    return (
      <span className="pl-2 text-sm text-red-500">
        Invalid values for chest or dye
      </span>
    );
  }

  return (
    <div className="w-full">
      <label className="flex flex-wrap py-2 font-bold font-josefinsans basis-full">
        Chest:
        <p>{displayError()}</p>
        <input
          onChange={(e) => chest.handlePieceChange(e.target.value)}
          className={`w-full pl-2 font-normal border-solid outline-none focus:ring-0 border rounded border-2 ${
            chest.invalidPiece
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="chest"
          min="1"
          max="97"
          placeholder="1-97"
        ></input>
      </label>
      <label className="w-full font-bold font-josefinsans">
        Dye:{" "}
        <input
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            chest.invalidPieceDyeGroup
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="dye-category"
          disabled={!chest.piece.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => chest.handlePieceDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            chest.invalidPieceDye
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          name="dye-color"
          min="1"
          max={chest.allDyeGroups[chest.piece.dyeGroup].length}
          disabled={!chest.piece.dyeable}
          placeholder={`1-${chest.allDyeGroups[chest.piece.dyeGroup].length}`}
          onChange={(e) => chest.handlePieceDyeColor(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
