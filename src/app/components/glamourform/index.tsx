"use client";
import React, { useState } from "react";
import { helmets } from "@/app/lib/helmets";
import { chests } from "@/app/lib/chests";
import { gloves } from "@/app/lib/gloves";
import { legs } from "@/app/lib/legs";
import { boots } from "@/app/lib/boots";
import { allDyes } from "@/app/lib/dyes";
type gearPiece = {
  name: string;
  dyeable: boolean;
  dyeGroup: number;
  dye: string;
};

export default function GlamourForm() {
  const [helmet, setHelmet] = useState<gearPiece>({
    name: "",
    dyeable: false,
    dyeGroup: 0,
    dye: "",
  });
  const [chest, setChest] = useState<gearPiece>({
    name: "",
    dyeable: false,
    dyeGroup: 0,
    dye: "",
  });
  const [glove, setGloves] = useState<gearPiece>({
    name: "",
    dyeable: false,
    dyeGroup: 0,
    dye: "",
  });
  const [leg, setLegs] = useState<gearPiece>({
    name: "",
    dyeable: false,
    dyeGroup: 0,
    dye: "",
  });
  const [boot, setBoots] = useState<gearPiece>({
    name: "",
    dyeable: false,
    dyeGroup: 0,
    dye: "",
  });
  const [invalid, setInvalid] = useState<string>("");

  const handleHelmet = (value: string) => {
    if (value.length && (+value < 1 || +value > helmets.length)) {
      setInvalid("Please enter a valid number for helmet");
      setHelmet({ name: "", dyeable: false, dyeGroup: 0, dye: "" });
      return;
    } else {
      setInvalid("");
      const index = Math.floor(Math.random() * +value);
      const { name, dyeable } = helmets[index];
      setHelmet({
        ...helmet,
        name,
        dyeable,
      });
      console.log(helmet);
    }
  };

  const handleHelmetDyeChange = (value: string) => {
    if (value.length && (+value < 1 || +value > allDyes.length)) {
      setInvalid("Please enter a valid number for dye group");
    } else {
      setInvalid("");
      const dyeGroup = Math.floor(Math.random() * +value);
      console.log(dyeGroup);
      setHelmet({
        ...helmet,
        dyeGroup,
      });
      console.log(helmet);
    }
  };

  const handleHelmetDyeColor = (value: string) => {
    if (
      value.length &&
      (+value < 1 || +value > allDyes[helmet.dyeGroup].length)
    ) {
      setInvalid("Please enter a valid number for dye color");
    } else {
      setInvalid("");
      const dye = allDyes[helmet.dyeGroup][Math.floor(Math.random() * +value)];
      setHelmet({
        ...helmet,
        dye,
      });
      console.log(helmet);
    }
  };

  return (
    <form className="flex flex-wrap mx-auto">
      <div className="font-bold text-red-500">{invalid}</div>
      <label className="flex flex-col py-2 font-bold basis-full">
        Helmet:
        <input
          onChange={(e) => handleHelmet(e.target.value)}
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
          onChange={(e) => handleHelmetDyeChange(e.target.value)}
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
        Chest: (1-83)
        <input
          className="w-full pl-2 font-normal"
          type="number"
          name="chest"
          min="1"
          max="83"
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Gloves: (1-33)
        <input
          className="w-full pl-2 font-normal"
          type="number"
          name="gloves"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Legs: (1-61)
        <input
          className="w-full pl-2 font-normal"
          type="number"
          name="legs"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Boots: (1-58)
        <input
          className="w-full pl-2 font-normal"
          type="number"
          name="boots"
          min="1"
        ></input>
      </label>
    </form>
  );
}
