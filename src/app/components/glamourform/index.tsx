"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { helmets } from "@/app/lib/helmets";
import { chests } from "@/app/lib/chests";
import { gloves } from "@/app/lib/gloves";
import { legs } from "@/app/lib/legs";
import { boots } from "@/app/lib/boots";
import { gearPiece } from "@/app/lib/types";

export default function GlamourForm() {
  const [helmet, setHelmet] = useState<gearPiece>({ name: "", dyeable: false });
  const [chest, setChest] = useState<gearPiece>({ name: "", dyeable: false });
  const [glove, setGloves] = useState<gearPiece>({ name: "", dyeable: false });
  const [leg, setLegs] = useState<gearPiece>({ name: "", dyeable: false });
  const [boot, setBoots] = useState<gearPiece>({ name: "", dyeable: false });
  const [invalid, setInvalid] = useState<string>("");

  const handleHelmet = (value: string) => {
    if (value.length && (+value < 1 || +value > helmets.length)) {
      setInvalid("Please enter a valid number for helmet");
      return;
    } else {
      setInvalid("");
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
          name="dye-category"
          disabled={!helmet.dyeable}
        ></input>
        <input
          className="w-1/3 mx-2 font-normal"
          name="dye-color"
          disabled={!helmet.dyeable}
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
