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
  const [allDyesData, setAllDyesData] = useState(allDyes);

  useEffect(() => {
    const randomizedHelmets = randomizeItemSets(helmets);
    const randomizedDyes = randomizeItemSets([...allDyes]);
    setHelmetData(randomizedHelmets);
    setAllDyesData(randomizedDyes);
  }, []);

  const handleHelmetChange = (value: string) => {
    if (!value.length) return;
    if (+value < 1 || +value > 213) {
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
    if (!value.length) return;
    if (+value < 1 || +value > allDyesData.length) {
      setInvalidHelmetDye(true);
      return;
    }
    setInvalidHelmetDye(false);
    const { name, dyeable, dye } = helmet;
    const dyeGroup = +value - 1;
    const updatedHelmet = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    setHelmet(updatedHelmet);
  };

  const handleHelmetDyeColor = (value: string) => {
    if (!value.length) return;
    const dyeIndex = helmet.dyeGroup;
    if (+value < 1 || +value > allDyesData[dyeIndex].length) {
      setInvalidHelmetDye(true);
      return;
    }
    setInvalidHelmetDye(false);
    const randomizedDyes = randomizeItemSets([...allDyesData[dyeIndex]]);

    const dye = randomizedDyes[+value - 1];
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
    allDyesData,
    handleHelmetChange,
    handleHelmetDyeGroup,
    handleHelmetDyeColor,
  };

  return helmetProps;
}
