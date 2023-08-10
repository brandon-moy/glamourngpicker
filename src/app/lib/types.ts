export type gearPiece = {
  name: string;
  dyeable: boolean;
};

export type fullPiece = {
  name: string;
  dyeable: boolean;
  dyeGroup: number;
  dye: string;
};

export type allItems = {
  helmets: gearPiece[];
  chests: gearPiece[];
  gloves: gearPiece[];
  legs: gearPiece[];
  boots: gearPiece[];
};

export type formInputData = {
  pieceName: string;
  maxOptions: number;
};

export type fullGlamSet = {
  helmet: fullPiece;
  chest: fullPiece;
  glove: fullPiece;
  leg: fullPiece;
  boot: fullPiece;
};

export type AppContextType = {
  completedGlam: fullGlamSet;
  invalid: invalid;
  resetGlam: () => void;
  handleGearChange: (arg0: string, arg1: number, arg2: string) => void;
  handleGearDyeGroup: (arg0: string, arg1: string) => void;
  handleGearDyeColor: (arg0: string, arg1: string) => void;
  randomizeGlamour: () => void;
};

export type ModalContextType = {
  displayWelcome: boolean;
  displaySuccess: boolean;
  openSuccessWindow: () => void;
  closeSuccessWindow: () => void;
  handleDisplayWelcome: () => void;
};

export type invalidPiece = {
  piece: boolean;
  dye: boolean;
};

export type invalid = {
  helmet: invalidPiece;
  chest: invalidPiece;
  glove: invalidPiece;
  leg: invalidPiece;
  boot: invalidPiece;
};
