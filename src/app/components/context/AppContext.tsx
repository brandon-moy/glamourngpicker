"use client";
import { createContext, useContext, ReactNode } from "react";
import { allDyes, itemsData } from "@/app/utils";
import { AppContextType } from "@/app/utils/types";
import { usePieceData } from "@/app/utils/usePieceData";

const AppContextDefaultValues: AppContextType = {
  helmet: {
    piece: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    invalidPiece: false,
    invalidPieceDyeGroup: false,
    invalidPieceDye: false,
    allDyeGroups: allDyes,
    handlePieceChange: (arg0: string) => {},
    handlePieceDyeGroup: (arg0: string) => {},
    handlePieceDyeColor: (arg0: string) => {},
    randomizePiece: () => {},
    resetPiece: () => {},
  },
  chest: {
    piece: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    invalidPiece: false,
    invalidPieceDyeGroup: false,
    invalidPieceDye: false,
    allDyeGroups: allDyes,
    handlePieceChange: (arg0: string) => {},
    handlePieceDyeGroup: (arg0: string) => {},
    handlePieceDyeColor: (arg0: string) => {},
    randomizePiece: () => {},
    resetPiece: () => {},
  },
  glove: {
    piece: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    invalidPiece: false,
    invalidPieceDyeGroup: false,
    invalidPieceDye: false,
    allDyeGroups: allDyes,
    handlePieceChange: (arg0: string) => {},
    handlePieceDyeGroup: (arg0: string) => {},
    handlePieceDyeColor: (arg0: string) => {},
    randomizePiece: () => {},
    resetPiece: () => {},
  },
  leg: {
    piece: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    invalidPiece: false,
    invalidPieceDyeGroup: false,
    invalidPieceDye: false,
    allDyeGroups: allDyes,
    handlePieceChange: (arg0: string) => {},
    handlePieceDyeGroup: (arg0: string) => {},
    handlePieceDyeColor: (arg0: string) => {},
    randomizePiece: () => {},
    resetPiece: () => {},
  },
  boot: {
    piece: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    invalidPiece: false,
    invalidPieceDyeGroup: false,
    invalidPieceDye: false,
    allDyeGroups: allDyes,
    handlePieceChange: (arg0: string) => {},
    handlePieceDyeGroup: (arg0: string) => {},
    handlePieceDyeColor: (arg0: string) => {},
    randomizePiece: () => {},
    resetPiece: () => {},
  },
};

const AppContext = createContext(AppContextDefaultValues);

export function useAppContext() {
  return useContext(AppContext);
}

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  const helmet = usePieceData(itemsData.helmets, 213);
  const chest = usePieceData(itemsData.chests, 97);
  const glove = usePieceData(itemsData.gloves, 47);
  const leg = usePieceData(itemsData.legs, 75);
  const boot = usePieceData(itemsData.boots, 72);

  const value = {
    helmet,
    chest,
    glove,
    leg,
    boot,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
