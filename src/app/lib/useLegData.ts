import { useState } from "react";
import { fullPiece } from "./types";
import { legs } from "./legs";
import { allDyes } from "./dyes";
import randomizeItemSets from "./randomizeItemSets";

const defaultLeg: fullPiece = {
  name: "",
  dyeable: false,
  dyeGroup: 0,
  dye: "",
};

export function useLegData() {
  const [leg, setLeg] = useState<fullPiece>(defaultLeg);
  const [invalidLeg, setInvalidLeg] = useState<boolean>(false);
  const [invalidLegDyeGroup, setInvalidLegDyeGroup] = useState<boolean>(false);
  const [invalidLegDye, setInvalidLegDye] = useState<boolean>(false);
  const [allDyeGroups, setAllDyeGroups] = useState(allDyes);

  const handleLegChange = (value: string) => {
    if (!value.length) return;
    if (+value < 1 || +value > 213) {
      setInvalidLeg(true);
      return;
    }
    setInvalidLeg(false);
    const randomizedLegs = randomizeItemSets([...legs]);
    const index = +value - 1;
    const { name, dyeable } = randomizedLegs[index];
    const { dyeGroup, dye } = leg;
    const updatedLeg = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    if (!dyeable) {
      updatedLeg.dyeGroup = 0;
      updatedLeg.dye = "";
    }
    setLeg(updatedLeg);
  };

  const handleLegDyeGroup = (value: string) => {
    if (!value.length) return;
    if (+value < 1 || +value > allDyeGroups.length) {
      setInvalidLegDyeGroup(true);
      return;
    }
    setInvalidLegDyeGroup(false);
    const randomizedDyeGroups = randomizeItemSets([...allDyeGroups]);
    setAllDyeGroups(randomizedDyeGroups);
    const { name, dyeable, dye } = leg;
    const dyeGroup = +value - 1;
    const updatedLeg = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    setLeg(updatedLeg);
  };

  const handleLegDyeColor = (value: string) => {
    if (!value.length) return;
    const dyeIndex = leg.dyeGroup;
    if (+value < 1 || +value > allDyeGroups[dyeIndex].length) {
      setInvalidLegDye(true);
      return;
    }
    setInvalidLegDye(false);
    const randomizedDyes = randomizeItemSets([...allDyeGroups[dyeIndex]]);
    const dye = randomizedDyes[+value - 1];
    const { name, dyeable, dyeGroup } = leg;
    const updatedLeg = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    setLeg(updatedLeg);
  };

  const legProps = {
    leg,
    invalidLeg,
    invalidLegDyeGroup,
    invalidLegDye,
    allDyeGroups,
    handleLegChange,
    handleLegDyeGroup,
    handleLegDyeColor,
  };

  return legProps;
}
