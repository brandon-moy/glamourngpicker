"use client";
import { allDyes } from "@/app/lib/dyes";
import { useFormContext } from "../context/AppContext";

export default function GlamourForm() {
  const {
    helmet,
    chest,
    glove,
    leg,
    boot,
    handleHelmetChange,
    handleHelmetDyeGroup,
    handleHelmetDyeColor,
    handleChestChange,
    handleChestDyeGroup,
    handleChestDyeColor,
    handleGloveChange,
    handleGloveDyeGroup,
    handleGloveDyeColor,
    handleLegChange,
    handleLegDyeGroup,
    handleLegDyeColor,
    handleBootChange,
    handleBootDyeGroup,
    handleBootDyeColor,
    invalid,
  } = useFormContext();

  return (
    <form className="flex flex-wrap mx-auto">
      <div className="relative w-full h-12 text-center ">
        <p className="w-full text-2xl font-bold">GlamouRNG Picker</p>
        <p className="absolute bottom-[-1.25rem] lg:bottom-[-1.5rem] w-full text-sm font-bold text-red-500 ">
          {invalid}
        </p>
      </div>
      <label className="flex flex-col py-2 font-bold basis-full">
        Helmet:
        <input
          onChange={(e) => handleHelmetChange(e.target.value)}
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
          disabled={!helmet.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleHelmetDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className="w-1/3 mx-2 font-normal"
          name="dye-color"
          min="1"
          max={allDyes[helmet.dyeGroup].length}
          disabled={!helmet.dyeable}
          placeholder={`1-${allDyes[helmet.dyeGroup].length}`}
          onChange={(e) => handleHelmetDyeColor(e.target.value)}
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Chest:
        <input
          onChange={(e) => handleChestChange(e.target.value)}
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
          disabled={!chest.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleChestDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className="w-1/3 mx-2 font-normal"
          name="dye-color"
          min="1"
          max={allDyes[chest.dyeGroup].length}
          disabled={!chest.dyeable}
          placeholder={`1-${allDyes[chest.dyeGroup].length}`}
          onChange={(e) => handleChestDyeColor(e.target.value)}
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Gloves:
        <input
          onChange={(e) => handleGloveChange(e.target.value)}
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
          disabled={!glove.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleGloveDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className="w-1/3 mx-2 font-normal"
          name="dye-color"
          min="1"
          max={allDyes[glove.dyeGroup].length}
          disabled={!glove.dyeable}
          placeholder={`1-${allDyes[glove.dyeGroup].length}`}
          onChange={(e) => handleGloveDyeColor(e.target.value)}
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Legs:
        <input
          onChange={(e) => handleLegChange(e.target.value)}
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
          disabled={!leg.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleLegDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className="w-1/3 mx-2 font-normal"
          name="dye-color"
          min="1"
          max={allDyes[leg.dyeGroup].length}
          disabled={!leg.dyeable}
          placeholder={`1-${allDyes[leg.dyeGroup].length}`}
          onChange={(e) => handleLegDyeColor(e.target.value)}
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Boots:
        <input
          onChange={(e) => handleBootChange(e.target.value)}
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
          disabled={!boot.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleBootDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className="w-1/3 mx-2 font-normal"
          name="dye-color"
          min="1"
          max={allDyes[boot.dyeGroup].length}
          disabled={!boot.dyeable}
          placeholder={`1-${allDyes[boot.dyeGroup].length}`}
          onChange={(e) => handleBootDyeColor(e.target.value)}
        ></input>
      </label>
    </form>
  );
}
