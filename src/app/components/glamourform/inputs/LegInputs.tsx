import { useLegData } from "@/app/lib/useLegData";

export default function LegInputs() {
  const {
    leg,
    invalidLeg,
    allDyeGroups,
    invalidLegDyeGroup,
    invalidLegDye,
    handleLegChange,
    handleLegDyeGroup,
    handleLegDyeColor,
  } = useLegData();

  function displayError() {
    if (!invalidLeg && !invalidLegDye && !invalidLegDyeGroup) return <></>;
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
          onChange={(e) => handleLegChange(e.target.value)}
          className={`w-full pl-2 font-normal border-solid outline-none focus:ring-0 border rounded border-2 ${
            invalidLeg
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
            invalidLegDyeGroup
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="dye-category"
          disabled={!leg.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleLegDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            invalidLegDye
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          name="dye-color"
          min="1"
          max={allDyeGroups[leg.dyeGroup].length}
          disabled={!leg.dyeable}
          placeholder={`1-${allDyeGroups[leg.dyeGroup].length}`}
          onChange={(e) => handleLegDyeColor(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
