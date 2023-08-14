import { useState, useEffect } from "react";
import { fullPiece, gearPiece } from "./types";
import { helmets } from "./helmets";
import { itemsData } from "./items";
import { allDyes } from "./dyes";
import randomizeItemSets from "./randomizeItemSets";

const defaultHelmet = {
  name: "",
  dyeable: false,
  dyeGroup: 0,
  dye: "",
};

export function useHelmetData() {
  const [helmet, setHelmet] = useState<fullPiece>(defaultHelmet);
  const [invalidHelmet, setInvalidHelmet] = useState<boolean>(false);
  const [invalidHelmetDye, setInvalidHelmetDye] = useState<boolean>(false);
  const [helmetData, setHelmetData] = useState(helmets);

  useEffect(() => {
    const randomizedHelmets = randomizeItemSets(helmets);
    setHelmetData(randomizedHelmets);
  }, []);

  const handleHelmetChange = (value: string) => {
    console.log(helmets);
    if (value.length && (+value < 1 || +value > 213)) {
      setInvalidHelmet(true);
      return;
    }
    setInvalidHelmet(false);
    const index = +value;
    const { name, dyeable } = helmetData[index];
    const { dyeGroup, dye } = helmet;
    const updatedHelmet = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    if (!dyeable) {
      updatedHelmet.dyeGroup = 0;
      updatedHelmet.dye = "";
    }
    setHelmet(updatedHelmet);
  };

  const handleHelmetDyeGroup = (value: string) => {
    if (value.length && (+value < 1 || +value > allDyes.length)) {
      setInvalidHelmetDye(true);
      return;
    }
    setInvalidHelmetDye(false);
    const { name, dyeable, dye } = helmet;
    const updatedHelmet = {
      name,
      dyeable,
      dyeGroup: +value,
      dye,
    };
    setHelmet(updatedHelmet);
  };

  const handleHelmetDyeColor = (value: string) => {
    const dyeIndex = helmet.dyeGroup;
    if (value.length && (+value < 1 || +value > allDyes[dyeIndex].length)) {
      setInvalidHelmetDye(true);
      return;
    }
    setInvalidHelmetDye(false);
    const randomizedDyes = randomizeItemSets(allDyes[dyeIndex]);

    const dye = randomizedDyes[+value];
    const { name, dyeable, dyeGroup } = helmet;
    const updatedHelmet = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    setHelmet(updatedHelmet);
  };

  const helmetProps = {
    helmet,
    invalidHelmet,
    invalidHelmetDye,
    handleHelmetChange,
    handleHelmetDyeGroup,
    handleHelmetDyeColor,
  };

  return helmetProps;
}
