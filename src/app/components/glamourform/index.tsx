"use client";
import { allDyes } from "@/app/lib/dyes";
import { useAppContext } from "../context/AppContext";
import { FormEvent } from "react";

export default function GlamourForm() {
  const {
    completedGlam,
    handleGearChange,
    handleGearDyeGroup,
    handleGearDyeColor,
    invalid,
    openSuccessWindow,
  } = useAppContext();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    openSuccessWindow();
  }

  const disabled =
    completedGlam.helmet.name === "" ||
    completedGlam.chest.name === "" ||
    completedGlam.glove.name === "" ||
    completedGlam.leg.name === "" ||
    completedGlam.boot.name === "";
  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap mx-auto">
      <div className="relative w-full h-12 text-center ">
        <p className="w-full text-2xl font-bold">GlamouRNG Picker</p>
        <p className="absolute bottom-[-1.25rem] lg:bottom-[-1.5rem] w-full text-sm font-bold text-red-500 ">
          {invalid}
        </p>
      </div>
      <label className="flex flex-col py-2 font-bold basis-full">
        Helmet:
        <input
          onChange={(e) => handleGearChange("helmet", 199, e.target.value)}
          className="w-full pl-2 font-normal"
          type="number"
          name="helmet"
          min="1"
          max="199"
          placeholder="1-199"
        ></input>
      </label>
      <label className="w-full font-bold">
        Dye:{" "}
        <input
          className="w-1/3 mx-2 font-normal"
          type="number"
          name="dye-category"
          disabled={!completedGlam.helmet.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleGearDyeGroup("helmet", e.target.value)}
        ></input>
        <input
          type="number"
          className="w-1/3 mx-2 font-normal"
          name="dye-color"
          min="1"
          max={allDyes[completedGlam.helmet.dyeGroup].length}
          disabled={!completedGlam.helmet.dyeable}
          placeholder={`1-${allDyes[completedGlam.helmet.dyeGroup].length}`}
          onChange={(e) => handleGearDyeColor("helmet", e.target.value)}
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Chest:
        <input
          onChange={(e) => handleGearChange("chest", 83, e.target.value)}
          className="w-full pl-2 font-normal"
          type="number"
          name="chest"
          min="1"
          max="83"
          placeholder="1-83"
        ></input>
      </label>
      <label className="w-full font-bold">
        Dye:{" "}
        <input
          className="w-1/3 mx-2 font-normal"
          type="number"
          name="dye-category"
          disabled={!completedGlam.chest.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleGearDyeGroup("chest", e.target.value)}
        ></input>
        <input
          type="number"
          className="w-1/3 mx-2 font-normal"
          name="dye-color"
          min="1"
          max={allDyes[completedGlam.chest.dyeGroup].length}
          disabled={!completedGlam.chest.dyeable}
          placeholder={`1-${allDyes[completedGlam.chest.dyeGroup].length}`}
          onChange={(e) => handleGearDyeColor("chest", e.target.value)}
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Gloves:
        <input
          onChange={(e) => handleGearChange("glove", 33, e.target.value)}
          className="w-full pl-2 font-normal"
          type="number"
          name="gloves"
          min="1"
          max="33"
          placeholder="1-33"
        ></input>
      </label>
      <label className="w-full font-bold">
        Dye:{" "}
        <input
          className="w-1/3 mx-2 font-normal"
          type="number"
          name="dye-category"
          disabled={!completedGlam.glove.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleGearDyeGroup("glove", e.target.value)}
        ></input>
        <input
          type="number"
          className="w-1/3 mx-2 font-normal"
          name="dye-color"
          min="1"
          max={allDyes[completedGlam.glove.dyeGroup].length}
          disabled={!completedGlam.glove.dyeable}
          placeholder={`1-${allDyes[completedGlam.glove.dyeGroup].length}`}
          onChange={(e) => handleGearDyeColor("glove", e.target.value)}
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Legs:
        <input
          onChange={(e) => handleGearChange("leg", 61, e.target.value)}
          className="w-full pl-2 font-normal"
          type="number"
          name="legs"
          min="1"
          max="61"
          placeholder="1-61"
        ></input>
      </label>
      <label className="w-full font-bold">
        Dye:{" "}
        <input
          className="w-1/3 mx-2 font-normal"
          type="number"
          name="dye-category"
          disabled={!completedGlam.leg.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleGearDyeGroup("leg", e.target.value)}
        ></input>
        <input
          type="number"
          className="w-1/3 mx-2 font-normal"
          name="dye-color"
          min="1"
          max={allDyes[completedGlam.leg.dyeGroup].length}
          disabled={!completedGlam.leg.dyeable}
          placeholder={`1-${allDyes[completedGlam.leg.dyeGroup].length}`}
          onChange={(e) => handleGearDyeColor("leg", e.target.value)}
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Boots:
        <input
          onChange={(e) => handleGearChange("boot", 58, e.target.value)}
          className="w-full pl-2 font-normal"
          type="number"
          name="boots"
          min="1"
          max="58"
          placeholder="1-58"
        ></input>
      </label>
      <label className="w-full font-bold">
        Dye:{" "}
        <input
          className="w-1/3 mx-2 font-normal"
          type="number"
          name="dye-category"
          disabled={!completedGlam.boot.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleGearDyeGroup("boot", e.target.value)}
        ></input>
        <input
          type="number"
          className="w-1/3 mx-2 font-normal"
          name="dye-color"
          min="1"
          max={allDyes[completedGlam.boot.dyeGroup].length}
          disabled={!completedGlam.boot.dyeable}
          placeholder={`1-${allDyes[completedGlam.boot.dyeGroup].length}`}
          onChange={(e) => handleGearDyeColor("boot", e.target.value)}
        ></input>
      </label>
      <div className="flex w-full my-4 justify-evenly">
        <button
          disabled={disabled}
          className="px-2 py-1 text-white bg-gray-600 rounded"
        >
          Submit!
        </button>
      </div>
    </form>
  );
}
