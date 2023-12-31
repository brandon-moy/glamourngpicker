import { useState } from "react";
import { fullPiece, gearPiece } from "./types";
import {
  allDyes,
  randomizeDyeSets,
  randomizeDyeColor,
  randomizeItemSets,
} from ".";
const defaultPiece: fullPiece = {
  name: "",
  dyeable: false,
  dyeGroup: 0,
  dye: "",
};

export function usePieceData(itemSet: gearPiece[], maxValue: number) {
  const [piece, setPiece] = useState<fullPiece>(defaultPiece);
  const [invalidPiece, setInvalidPiece] = useState<boolean>(false);
  const [invalidPieceDyeGroup, setInvalidPieceDyeGroup] =
    useState<boolean>(false);
  const [invalidPieceDye, setInvalidPieceDye] = useState<boolean>(false);
  const [allDyeGroups, setAllDyeGroups] = useState(allDyes);

  const resetPiece = () => {
    setPiece(defaultPiece);
  };

  const handlePieceChange = (value: string) => {
    if (!value.length) return;
    if (+value < 1 || +value > maxValue) {
      setInvalidPiece(true);
      return;
    }
    setInvalidPiece(false);
    const randomizedPieces = randomizeItemSets([...itemSet]);
    const index = +value - 1;
    const { name, dyeable } = randomizedPieces[index];
    const { dyeGroup, dye } = piece;
    const updatedPiece = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    if (!dyeable) {
      updatedPiece.dyeGroup = 0;
      updatedPiece.dye = "";
    }
    setPiece(updatedPiece);
  };

  const handlePieceDyeGroup = (value: string) => {
    if (!value.length) return;
    if (+value < 1 || +value > allDyes.length) {
      setInvalidPieceDyeGroup(true);
      return;
    }
    setInvalidPieceDyeGroup(false);
    const randomizedDyeGroups = randomizeDyeSets([...allDyeGroups]);
    setAllDyeGroups(randomizedDyeGroups);
    const { name, dyeable, dye } = piece;
    const dyeGroup = +value - 1;
    const updatedPiece = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    setPiece(updatedPiece);
  };

  const handlePieceDyeColor = (value: string) => {
    if (!value.length) return;
    const dyeIndex = piece.dyeGroup;
    if (+value < 1 || +value > allDyeGroups[dyeIndex].length) {
      setInvalidPieceDye(true);
      return;
    }
    setInvalidPieceDye(false);
    const randomizedDyes = randomizeDyeColor([...allDyeGroups[dyeIndex]]);
    const dye = randomizedDyes[+value - 1];
    const { name, dyeable, dyeGroup } = piece;
    const updatedPiece = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };
    setPiece(updatedPiece);
  };

  const randomizePiece = () => {
    const randomPieceIndex = Math.floor(Math.random() * maxValue);
    const randomizedPieces = randomizeItemSets([...itemSet]);
    const { name, dyeable } = randomizedPieces[randomPieceIndex];
    let dyeGroup = 0;
    let dye = "";
    if (dyeable) {
      const randomDyeGroupIndex = Math.floor(Math.random() * 9);
      const randomizedDyeGroups = randomizeDyeSets([...allDyeGroups]);
      dyeGroup = randomDyeGroupIndex;
      const randomDyeGroup = randomizedDyeGroups[randomDyeGroupIndex];

      const randomDyeIndex = Math.floor(Math.random() * randomDyeGroup.length);
      const randomizedDyes = randomizeDyeColor([...randomDyeGroup]);
      dye = randomizedDyes[randomDyeIndex];
    }

    const updatedPiece = {
      name,
      dyeable,
      dyeGroup,
      dye,
    };

    setPiece(updatedPiece);
  };

  const pieceProps = {
    piece,
    invalidPiece,
    invalidPieceDyeGroup,
    invalidPieceDye,
    allDyeGroups,
    handlePieceChange,
    handlePieceDyeGroup,
    handlePieceDyeColor,
    randomizePiece,
    resetPiece,
  };

  return pieceProps;
}
