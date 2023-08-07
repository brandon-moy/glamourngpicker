"use client";
import React, { useState } from "react";

type gearPiece = {
  name: string;
  dyeable: boolean;
};

export default function GlamourForm() {
  const [helmet, setHelmet] = useState<gearPiece>({ name: "", dyeable: false });
  const [chest, setChest] = useState<gearPiece>({ name: "", dyeable: false });
  const [gloves, setGloves] = useState<gearPiece>({ name: "", dyeable: false });
  const [legs, setLegs] = useState<gearPiece>({ name: "", dyeable: false });
  const [boots, setBoots] = useState<gearPiece>({ name: "", dyeable: false });

  return (
    <form className="flex flex-wrap mx-auto">
      <label className="flex flex-col py-2 font-bold basis-full">
        Helmet:
        <input
          className="w-full pl-2 font-normal"
          type="number"
          name="helmet"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Chest:
        <input
          className="w-full pl-2 font-normal"
          type="number"
          name="chest"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Gloves:
        <input
          className="w-full pl-2 font-normal"
          type="number"
          name="gloves"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Legs:
        <input
          className="w-full pl-2 font-normal"
          type="number"
          name="legs"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Boots:
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
