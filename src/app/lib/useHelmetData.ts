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

  const handleHelmetChange = (value: string) => {
    if (value.length && (+value < 1 || +value > 213)) {
      setInvalidHelmet(true);
      return;
    }
    setInvalidHelmet(false);
    const randomizedHelmets = randomizeItemSets(helmets);
    const { name, dyeable } = randomizedHelmets[+value];
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
      setInvalidHelmet(true);
      return;
    }
    setInvalidHelmet(false);
    const randomizedDyeGroup = randomizeItemSets(allDyes);
    const dyeGroup = randomizedDyeGroup[+value];
    const { name, dyeable, dye } = helmet;
    const updatedHelmet = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    setHelmet(updatedHelmet);
  };

  const handleHelmetDyeColor = (value: string) => {
    const dyeIndex = helmet.dyeGroup;
    if (value.length && (+value < 1 || +value > allDyes[dyeIndex].length)) {
      setInvalidHelmet(true);
      return;
    }
    setInvalidHelmet(false);
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
}
