import { useState, useEffect } from "react";
import { fullPiece } from "./types";
import { chests } from "./chests";
import { itemsData } from "./items";
import { allDyes } from "./dyes";
import randomizeItemSets from "./randomizeItemSets";

const defaultChest = {
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
  const [chestData, setChestData] = useState(chests);
  const [allDyesData, setAllDyesData] = useState(allDyes);

  useEffect(() => {
    const randomizedChests = randomizeItemSets(chests);
    const randomizedDyes = randomizeItemSets([...allDyes]);
    setChestData(randomizedChests);
    setAllDyesData(randomizedDyes);
  }, []);

  const handleChestChange = (value: string) => {
    if (!value.length) return;
    if (+value < 1 || +value > 213) {
      setInvalidChest(true);
      return;
    }
    setInvalidChest(false);
    const index = +value;
    const { name, dyeable } = chestData[index];
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
    if (+value < 1 || +value > allDyesData.length) {
      setInvalidChestDyeGroup(true);
      return;
    }
    setInvalidChestDyeGroup(false);
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
    if (+value < 1 || +value > allDyesData[dyeIndex].length) {
      setInvalidChestDye(true);
      return;
    }
    setInvalidChestDye(false);
    const randomizedDyes = randomizeItemSets([...allDyesData[dyeIndex]]);

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

  const chestProps = {
    chest,
    invalidChest,
    invalidChestDyeGroup,
    invalidChestDye,
    allDyesData,
    handleChestChange,
    handleChestDyeGroup,
    handleChestDyeColor,
  };

  return chestProps;
}
