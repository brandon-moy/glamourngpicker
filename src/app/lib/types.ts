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

export type formInputData = {
  pieceName: string;
  maxOptions: number;
};

export type fullGlamSet = {
  helmet: fullPiece;
  chest: fullPiece;
  glove: fullPiece;
  leg: fullPiece;
  foot: fullPiece;
};

export type AppContextType = {
  completedGlam: fullGlamSet;
  invalid: invalid;
  displayWelcome: boolean;
  displaySuccess: boolean;
  resetGlam: () => void;
  openSuccessWindow: () => void;
  closeSuccessWindow: () => void;
  handleDisplayWelcome: () => void;
  handleGearChange: (arg0: string, arg1: number, arg2: string) => void;
  handleGearDyeGroup: (arg0: string, arg1: string) => void;
  handleGearDyeColor: (arg0: string, arg1: string) => void;
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
  foot: invalidPiece;
};
