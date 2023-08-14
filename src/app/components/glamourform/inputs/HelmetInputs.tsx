import { useAppContext } from "../../context/AppContext";

export default function HelmetInputs() {
  const { helmet } = useAppContext();

  function displayError() {
    if (
      !helmet.invalidPiece &&
      !helmet.invalidPieceDye &&
      !helmet.invalidPieceDyeGroup
    )
      return <></>;
    return (
      <span className="pl-2 text-sm text-red-500">
        Invalid values for helmet or dye
      </span>
    );
  }

  return (
    <div className="w-full">
      <label className="flex flex-wrap py-2 font-bold font-josefinsans basis-full">
        Helmet:
        <p>{displayError()}</p>
        <input
          onChange={(e) => helmet.handlePieceChange(e.target.value)}
          className={`w-full pl-2 font-normal border-solid outline-none focus:ring-0 border rounded border-2 ${
            helmet.invalidPiece
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="helmet"
          min="1"
          max="213"
          placeholder="1-213"
        ></input>
      </label>
      <label className="w-full font-bold font-josefinsans">
        Dye:{" "}
        <input
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            helmet.invalidPieceDyeGroup
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="dye-category"
          disabled={!helmet.piece.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => helmet.handlePieceDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            helmet.invalidPieceDye
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          name="dye-color"
          min="1"
          max={helmet.allDyeGroups[helmet.piece.dyeGroup].length}
          disabled={!helmet.piece.dyeable}
          placeholder={`1-${helmet.allDyeGroups[helmet.piece.dyeGroup].length}`}
          onChange={(e) => helmet.handlePieceDyeColor(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
