import { gearPiece } from "./types";

export default function randomizeItemSets(itemSet: gearPiece[]): gearPiece[] {
  const shuffledItemSet = [];

  while (itemSet.length) {
    const randomIndex = Math.floor(Math.random() * itemSet.length),
      element = itemSet.splice(randomIndex, 1);

    shuffledItemSet.push(element[0]);
  }

  return shuffledItemSet;
}
