import { useState } from "react";
import { fullPiece } from "./types";
import { gloves } from "./gloves";
import { allDyes } from "./dyes";
import randomizeItemSets from "./randomizeItemSets";

const defaultGlove: fullPiece = {
  name: "",
  dyeable: false,
  dyeGroup: 0,
  dye: "",
};

export function useGloveData() {
  const [glove, setGlove] = useState<fullPiece>(defaultGlove);
  const [invalidGlove, setInvalidGlove] = useState<boolean>(false);
  const [invalidGloveDyeGroup, setInvalidGloveDyeGroup] =
    useState<boolean>(false);
  const [invalidGloveDye, setInvalidGloveDye] = useState<boolean>(false);
  const [allDyeGroups, setAllDyeGroups] = useState(allDyes);

  const handleGloveChange = (value: string) => {
    if (!value.length) return;
    if (+value < 1 || +value > 213) {
      setInvalidGlove(true);
      return;
    }
    setInvalidGlove(false);
    const randomizedGloves = randomizeItemSets([...gloves]);
    const index = +value - 1;
    const { name, dyeable } = randomizedGloves[index];
    const { dyeGroup, dye } = glove;
    const updatedGlove = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    if (!dyeable) {
      updatedGlove.dyeGroup = 0;
      updatedGlove.dye = "";
    }
    setGlove(updatedGlove);
  };

  const handleGloveDyeGroup = (value: string) => {
    if (!value.length) return;
    if (+value < 1 || +value > allDyeGroups.length) {
      setInvalidGloveDyeGroup(true);
      return;
    }
    setInvalidGloveDyeGroup(false);
    const randomizedDyeGroups = randomizeItemSets([...allDyeGroups]);
    setAllDyeGroups(randomizedDyeGroups);
    const { name, dyeable, dye } = glove;
    const dyeGroup = +value - 1;
    const updatedGlove = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    setGlove(updatedGlove);
  };

  const handleGloveDyeColor = (value: string) => {
    if (!value.length) return;
    const dyeIndex = glove.dyeGroup;
    if (+value < 1 || +value > allDyeGroups[dyeIndex].length) {
      setInvalidGloveDye(true);
      return;
    }
    setInvalidGloveDye(false);
    const randomizedDyes = randomizeItemSets([...allDyeGroups[dyeIndex]]);
    const dye = randomizedDyes[+value - 1];
    const { name, dyeable, dyeGroup } = glove;
    const updatedGlove = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    setGlove(updatedGlove);
  };

  const gloveProps = {
    glove,
    invalidGlove,
    invalidGloveDyeGroup,
    invalidGloveDye,
    allDyeGroups,
    handleGloveChange,
    handleGloveDyeGroup,
    handleGloveDyeColor,
  };

  return gloveProps;
}
