import { useState } from "react";
import { fullPiece } from "./types";
import { boots } from "./boots";
import { allDyes } from "./dyes";
import randomizeItemSets from "./randomizeItemSets";

const defaultBoot: fullPiece = {
  name: "",
  dyeable: false,
  dyeGroup: 0,
  dye: "",
};

export function useBootData() {
  const [boot, setBoot] = useState<fullPiece>(defaultBoot);
  const [invalidBoot, setInvalidBoot] = useState<boolean>(false);
  const [invalidBootDyeGroup, setInvalidBootDyeGroup] =
    useState<boolean>(false);
  const [invalidBootDye, setInvalidBootDye] = useState<boolean>(false);
  const [allDyeGroups, setAllDyeGroups] = useState(allDyes);

  const handleBootChange = (value: string) => {
    if (!value.length) return;
    if (+value < 1 || +value > 213) {
      setInvalidBoot(true);
      return;
    }
    setInvalidBoot(false);
    const randomizedBoots = randomizeItemSets([...boots]);
    const index = +value - 1;
    const { name, dyeable } = randomizedBoots[index];
    const { dyeGroup, dye } = boot;
    const updatedBoot = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    if (!dyeable) {
      updatedBoot.dyeGroup = 0;
      updatedBoot.dye = "";
    }
    setBoot(updatedBoot);
  };

  const handleBootDyeGroup = (value: string) => {
    if (!value.length) return;
    if (+value < 1 || +value > allDyeGroups.length) {
      setInvalidBootDyeGroup(true);
      return;
    }
    setInvalidBootDyeGroup(false);
    const randomizedDyeGroups = randomizeItemSets([...allDyeGroups]);
    setAllDyeGroups(randomizedDyeGroups);
    const { name, dyeable, dye } = boot;
    const dyeGroup = +value - 1;
    const updatedBoot = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    setBoot(updatedBoot);
  };

  const handleBootDyeColor = (value: string) => {
    if (!value.length) return;
    const dyeIndex = boot.dyeGroup;
    if (+value < 1 || +value > allDyeGroups[dyeIndex].length) {
      setInvalidBootDye(true);
      return;
    }
    setInvalidBootDye(false);
    const randomizedDyes = randomizeItemSets([...allDyeGroups[dyeIndex]]);
    const dye = randomizedDyes[+value - 1];
    const { name, dyeable, dyeGroup } = boot;
    const updatedBoot = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    setBoot(updatedBoot);
  };

  const randomizeBoot = () => {
    const randomBootIndex = Math.floor(Math.random() * 213);
    const randomizedBoots = randomizeItemSets([...boots]);
    const { name, dyeable } = randomizedBoots[randomBootIndex];
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

    const updatedBoot = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };

    setBoot(updatedBoot);
  };

  const bootProps = {
    boot,
    invalidBoot,
    invalidBootDyeGroup,
    invalidBootDye,
    allDyeGroups,
    handleBootChange,
    handleBootDyeGroup,
    handleBootDyeColor,
    randomizeBoot,
  };

  return bootProps;
}
