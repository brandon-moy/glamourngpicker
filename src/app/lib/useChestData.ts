import { useState, useEffect } from "react";
import { fullPiece } from "./types";
import { chests } from "./chests";
import { allDyes } from "./dyes";
import randomizeItemSets from "./randomizeItemSets";

const defaultChest: fullPiece = {
  name: "",
  dyeable: false,
  dyeGroup: 0,
  dye: "",
};

export function useChestData() {
  const [chest, setChest] = useState<fullPiece>(defaultChest);
  const [invalidChest, setInvalidChest] = useState<boolean>(false);
  const [invalidChestDyeGroup, setInvalidChestDyeGroup] =
    useState<boolean>(false);
  const [invalidChestDye, setInvalidChestDye] = useState<boolean>(false);
  const [allDyeGroups, setAllDyeGroups] = useState(allDyes);

  const handleChestChange = (value: string) => {
    if (!value.length) return;
    if (+value < 1 || +value > 213) {
      setInvalidChest(true);
      return;
    }
    setInvalidChest(false);
    const randomizedChests = randomizeItemSets([...chests]);
    const index = +value - 1;
    const { name, dyeable } = randomizedChests[index];
    const { dyeGroup, dye } = chest;
    const updatedChest = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    if (!dyeable) {
      updatedChest.dyeGroup = 0;
      updatedChest.dye = "";
    }
    setChest(updatedChest);
  };

  const handleChestDyeGroup = (value: string) => {
    if (!value.length) return;
    if (+value < 1 || +value > allDyes.length) {
      setInvalidChestDyeGroup(true);
      return;
    }
    setInvalidChestDyeGroup(false);
    const randomizedDyeGroups = randomizeItemSets([...allDyeGroups]);
    setAllDyeGroups(randomizedDyeGroups);
    const { name, dyeable, dye } = chest;
    const dyeGroup = +value - 1;
    const updatedChest = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    setChest(updatedChest);
  };

  const handleChestDyeColor = (value: string) => {
    if (!value.length) return;
    const dyeIndex = chest.dyeGroup;
    if (+value < 1 || +value > allDyeGroups[dyeIndex].length) {
      setInvalidChestDye(true);
      return;
    }
    setInvalidChestDye(false);
    const randomizedDyes = randomizeItemSets([...allDyeGroups[dyeIndex]]);

    const dye = randomizedDyes[+value - 1];
    const { name, dyeable, dyeGroup } = chest;
    const updatedChest = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    setChest(updatedChest);
  };

  const randomizeChest = () => {
    const randomChestIndex = Math.floor(Math.random() * 213);
    const randomizedChests = randomizeItemSets([...chests]);
    const { name, dyeable } = randomizedChests[randomChestIndex];
    let dyeGroup = 0;
    let dye = "";
    if (dyeable) {
      const randomDyeGroupIndex = Math.floor(Math.random() * 9);
      const randomizedDyeGroups = randomizeItemSets([...allDyeGroups]);
      dyeGroup = randomDyeGroupIndex;
      const randomDyeGroup = randomizedDyeGroups[randomDyeGroupIndex];

      const randomDyeIndex = Math.floor(Math.random() * randomDyeGroup.length);
      const randomizedDyes = randomizeItemSets([...randomDyeGroup]);
      dye = randomizedDyes[randomDyeIndex];
    }

    const updatedChest = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };

    setChest(updatedChest);
  };

  const chestProps = {
    chest,
    invalidChest,
    invalidChestDyeGroup,
    invalidChestDye,
    allDyeGroups,
    handleChestChange,
    handleChestDyeGroup,
    handleChestDyeColor,
    randomizeChest,
  };

  return chestProps;
}
