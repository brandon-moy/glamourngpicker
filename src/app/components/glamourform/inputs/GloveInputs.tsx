"use client";
import { useGloveData } from "@/app/lib/useGloveData";

export default function GloveInputs() {
  const {
    glove,
    invalidGlove,
    allDyeGroups,
    invalidGloveDyeGroup,
    invalidGloveDye,
    handleGloveChange,
    handleGloveDyeGroup,
    handleGloveDyeColor,
  } = useGloveData();

  function displayError() {
    if (!invalidGlove && !invalidGloveDye && !invalidGloveDyeGroup)
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
          onChange={(e) => handleGloveChange(e.target.value)}
          className={`w-full pl-2 font-normal border-solid outline-none focus:ring-0 border rounded border-2 ${
            invalidGlove
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
            invalidGloveDyeGroup
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="dye-category"
          disabled={!glove.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleGloveDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            invalidGloveDye
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          name="dye-color"
          min="1"
          max={allDyeGroups[glove.dyeGroup].length}
          disabled={!glove.dyeable}
          placeholder={`1-${allDyeGroups[glove.dyeGroup].length}`}
          onChange={(e) => handleGloveDyeColor(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
