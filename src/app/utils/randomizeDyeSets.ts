import { dyeSets } from "./types";

export default function randomizeDyeSets(dyeSet: dyeSets[]): dyeSets[] {
  const shuffledDyeSet = [];

  while (dyeSet.length) {
    const randomIndex = Math.floor(Math.random() * dyeSet.length),
      element = dyeSet.splice(randomIndex, 1);

    shuffledDyeSet.push(element[0]);
  }

  return shuffledDyeSet;
}
