import { useAppContext } from "../../context/AppContext";

export default function GloveInputs() {
  const { glove } = useAppContext();

  function displayError() {
    if (
      !glove.invalidPiece &&
      !glove.invalidPieceDye &&
      !glove.invalidPieceDyeGroup
    )
      return <></>;
    return (
      <span className="pl-2 text-sm text-red-500">
        Invalid values for glove or dye
      </span>
    );
  }

  return (
    <div className="w-full">
      <label className="flex flex-wrap py-2 font-bold font-josefinsans basis-full">
        Glove:
        <p>{displayError()}</p>
        <input
          onChange={(e) => glove.handlePieceChange(e.target.value)}
          className={`w-full pl-2 font-normal border-solid outline-none focus:ring-0 border rounded border-2 ${
            glove.invalidPiece
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="glove"
          min="1"
          max="47"
          placeholder="1-47"
        ></input>
      </label>
      <label className="w-full font-bold font-josefinsans">
        Dye:{" "}
        <input
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            glove.invalidPieceDyeGroup
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="dye-category"
          disabled={!glove.piece.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => glove.handlePieceDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            glove.invalidPieceDye
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          name="dye-color"
          min="1"
          max={glove.allDyeGroups[glove.piece.dyeGroup].length}
          disabled={!glove.piece.dyeable}
          placeholder={`1-${glove.allDyeGroups[glove.piece.dyeGroup].length}`}
          onChange={(e) => glove.handlePieceDyeColor(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
