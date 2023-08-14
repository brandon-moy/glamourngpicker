import { useAppContext } from "../../context/AppContext";

export default function LegInputs() {
  const { leg } = useAppContext();

  function displayError() {
    if (!leg.invalidPiece && !leg.invalidPieceDye && !leg.invalidPieceDyeGroup)
      return <></>;
    return (
      <span className="pl-2 text-sm text-red-500">
        Invalid values for leg or dye
      </span>
    );
  }

  return (
    <div className="w-full">
      <label className="flex flex-wrap py-2 font-bold font-josefinsans basis-full">
        Leg:
        <p>{displayError()}</p>
        <input
          onChange={(e) => leg.handlePieceChange(e.target.value)}
          className={`w-full pl-2 font-normal border-solid outline-none focus:ring-0 border rounded border-2 ${
            leg.invalidPiece
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="leg"
          min="1"
          max="75"
          placeholder="1-75"
        ></input>
      </label>
      <label className="w-full font-bold font-josefinsans">
        Dye:{" "}
        <input
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            leg.invalidPieceDyeGroup
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="dye-category"
          disabled={!leg.piece.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => leg.handlePieceDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            leg.invalidPieceDye
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          name="dye-color"
          min="1"
          max={leg.allDyeGroups[leg.piece.dyeGroup].length}
          disabled={!leg.piece.dyeable}
          placeholder={`1-${leg.allDyeGroups[leg.piece.dyeGroup].length}`}
          onChange={(e) => leg.handlePieceDyeColor(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
