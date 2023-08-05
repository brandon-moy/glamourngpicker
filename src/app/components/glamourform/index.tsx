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
      <label className="flex flex-col font-bold basis-full lg:basis-1/2">
        Helmet:
        <input
          className="w-full pl-2 font-normal lg:w-5/6"
          type="number"
          name="helmet"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col font-bold basis-full lg:basis-1/2">
        Chest:
        <input
          className="w-full pl-2 font-normal lg:w-5/6"
          type="number"
          name="chest"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col font-bold basis-full lg:basis-1/2">
        Gloves:
        <input
          className="w-full pl-2 font-normal lg:w-5/6"
          type="number"
          name="gloves"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col font-bold basis-full lg:basis-1/2">
        Legs:
        <input
          className="w-full pl-2 font-normal lg:w-5/6"
          type="number"
          name="legs"
          min="1"
        ></input>
      </label>
      <label className="flex flex-col font-bold basis-full lg:basis-1/2">
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
