"use client";
import { useHelmetData } from "@/app/lib/useHelmetData";
import { allDyes } from "@/app/lib/dyes";
import { useEffect } from "react";
import randomizeItemSets from "@/app/lib/randomizeItemSets";

export default function HelmetInputs() {
  const {
    helmet,
    invalidHelmet,
    invalidHelmetDye,
    handleHelmetChange,
    handleHelmetDyeGroup,
    handleHelmetDyeColor,
  } = useHelmetData();

  useEffect(() => {
    console.log("helmet", helmet);
    console.log("invalidHelmet", invalidHelmet);
  }, [helmet, invalidHelmet]);

  function displayError() {
    if (!invalidHelmet) return <></>;
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
          onChange={(e) => handleHelmetChange(e.target.value)}
          className={`w-full pl-2 font-normal border-solid outline-none focus:ring-0 border rounded border-2 ${
            invalidHelmet
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
            invalidHelmetDye
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="dye-category"
          disabled={!helmet.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleHelmetDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            invalidHelmetDye
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          name="dye-color"
          min="1"
          max={allDyes[helmet.dyeGroup].length}
          disabled={!helmet.dyeable}
          placeholder={`1-${allDyes[helmet.dyeGroup].length}`}
          onChange={(e) => handleHelmetDyeColor(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
