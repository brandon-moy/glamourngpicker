"use client";
import React, { useState } from "react";

export default function GlamourForm() {
  return (
    <form className="flex flex-wrap mx-auto">
      <label className="mb-4 text-lg font-bold basis-full">
        Name:
        <input
          type="name"
          className="w-2/5 pl-2 ml-2 font-normal"
          name="name"
          placeholder="Beemoy"
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Helmet:
        <input
          className="w-full pl-2 font-normal lg:w-5/6"
          type="number"
          name="helmet"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Chest:
        <input
          className="w-full pl-2 font-normal lg:w-5/6"
          type="number"
          name="chest"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Gloves:
        <input
          className="w-full pl-2 font-normal lg:w-5/6"
          type="number"
          name="gloves"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Legs:
        <input
          className="w-full pl-2 font-normal lg:w-5/6"
          type="number"
          name="legs"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col py-2 font-bold basis-full">
        Boots:
        <input
          className="w-full pl-2 font-normal lg:w-5/6"
          type="number"
          name="boots"
          min="1"
        ></input>
      </label>
    </form>
  );
}
