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

export type dyeSets = string[];

export type itemContextType = {
  piece: {
    name: string;
    dyeable: boolean;
    dyeGroup: number;
    dye: string;
  };
  invalidPiece: boolean;
  invalidPieceDyeGroup: boolean;
  invalidPieceDye: boolean;
  allDyeGroups: dyeSets[];
  handlePieceChange: (arg0: string) => void;
  handlePieceDyeGroup: (arg0: string) => void;
  handlePieceDyeColor: (arg0: string) => void;
  randomizePiece: () => void;
  resetPiece: () => void;
};

export type AppContextType = {
  helmet: itemContextType;
  chest: itemContextType;
  glove: itemContextType;
  leg: itemContextType;
  boot: itemContextType;
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
