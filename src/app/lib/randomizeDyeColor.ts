export default function randomizeDyeColor(dyeGroup: string[]): string[] {
  const shuffledDyeGroup = [];

  while (dyeGroup.length) {
    const randomIndex = Math.floor(Math.random() * dyeGroup.length),
      element = dyeGroup.splice(randomIndex, 1);

    shuffledDyeGroup.push(element[0]);
  }

  return shuffledDyeGroup;
}
