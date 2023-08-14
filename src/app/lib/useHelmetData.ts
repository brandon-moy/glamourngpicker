import { useState } from "react";
import { fullPiece } from "./types";
import { helmets } from "./helmets";

const defaultHelmet = {
  name: "",
  dyeable: false,
  dyeGroup: 0,
  dye: "",
};

export function useHelmetData() {
  const [helmet, setHelmet] = useState<fullPiece>(defaultHelmet);
}
