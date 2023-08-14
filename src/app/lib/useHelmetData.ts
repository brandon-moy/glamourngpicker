import { useState } from "react";
import { fullPiece } from "./types";
import { helmets } from "./helmets";
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
  const [invalidHelmetDyeGroup, setInvalidHelmetDyeGroup] =
    useState<boolean>(false);
  const [invalidHelmetDye, setInvalidHelmetDye] = useState<boolean>(false);
  const [allDyeGroups, setAllDyeGroups] = useState(allDyes);

  const handleHelmetChange = (value: string) => {
    if (!value.length) return;
    if (+value < 1 || +value > 213) {
      setInvalidHelmet(true);
      return;
    }
    setInvalidHelmet(false);
    const randomizedHelmets = randomizeItemSets([...helmets]);
    const index = +value;
    const { name, dyeable } = randomizedHelmets[index];
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
    if (+value < 1 || +value > allDyes.length) {
      setInvalidHelmetDyeGroup(true);
      return;
    }
    setInvalidHelmetDyeGroup(false);
    const randomizedDyeGroups = randomizeItemSets([...allDyeGroups]);
    setAllDyeGroups(randomizedDyeGroups);
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
    if (+value < 1 || +value > allDyeGroups[dyeIndex].length) {
      setInvalidHelmetDye(true);
      return;
    }
    setInvalidHelmetDye(false);
    const randomizedDyes = randomizeItemSets([...allDyeGroups[dyeIndex]]);

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
    invalidHelmetDyeGroup,
    invalidHelmetDye,
    allDyeGroups,
    handleHelmetChange,
    handleHelmetDyeGroup,
    handleHelmetDyeColor,
  };

  return helmetProps;
}
