import { gearPiece } from "./types";

// need to update from any type after fixing other errors from converting code
export default function randomizeItemSets(itemSet: any) {
  const shuffledItemSet = [];

  while (itemSet.length) {
    const randomIndex = Math.floor(Math.random() * itemSet.length),
      element = itemSet.splice(randomIndex, 1);

    shuffledItemSet.push(element[0]);
  }

  return shuffledItemSet;
}
