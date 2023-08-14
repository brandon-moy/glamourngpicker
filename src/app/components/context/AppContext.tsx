"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import { allDyes } from "@/app/lib/dyes";
import { itemsData } from "@/app/lib/items";
import {
  fullGlamSet,
  AppContextType,
  invalid,
  fullPiece,
  allItems,
} from "@/app/lib/types";
import { inputData } from "@/app/lib/formInputs";
import { usePieceData } from "@/app/lib/usePieceData";

// const AppContextDefaultValues: AppContextType = {
//   invalid: {
//     helmet: { piece: false, dye: false },
//     chest: { piece: false, dye: false },
//     glove: { piece: false, dye: false },
//     leg: { piece: false, dye: false },
//     boot: { piece: false, dye: false },
//   },
//   completedGlam: {
//     helmet: {
//       name: "",
//       dyeable: false,
//       dyeGroup: 0,
//       dye: "",
//     },
//     chest: {
//       name: "",
//       dyeable: false,
//       dyeGroup: 0,
//       dye: "",
//     },
//     glove: {
//       name: "",
//       dyeable: false,
//       dyeGroup: 0,
//       dye: "",
//     },
//     leg: {
//       name: "",
//       dyeable: false,
//       dyeGroup: 0,
//       dye: "",
//     },
//     boot: {
//       name: "",
//       dyeable: false,
//       dyeGroup: 0,
//       dye: "",
//     },
//   },
//   resetGlam: () => {},
//   handleGearChange: () => {},
//   handleGearDyeGroup: () => {},
//   handleGearDyeColor: () => {},
//   randomizeGlamour: () => {},
// };
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
  const helmet = usePieceData();
  const chest = usePieceData();
  const leg = usePieceData();
  const glove = usePieceData();
  const boot = usePieceData();
  // const [completedGlam, setCompletedGlam] = useState<fullGlamSet>({
  //   helmet: {
  //     name: "",
  //     dyeable: false,
  //     dyeGroup: 0,
  //     dye: "",
  //   },
  //   chest: {
  //     name: "",
  //     dyeable: false,
  //     dyeGroup: 0,
  //     dye: "",
  //   },
  //   glove: {
  //     name: "",
  //     dyeable: false,
  //     dyeGroup: 0,
  //     dye: "",
  //   },
  //   leg: {
  //     name: "",
  //     dyeable: false,
  //     dyeGroup: 0,
  //     dye: "",
  //   },
  //   boot: {
  //     name: "",
  //     dyeable: false,
  //     dyeGroup: 0,
  //     dye: "",
  //   },
  // });
  // const [invalid, setInvalid] = useState<invalid>({
  //   helmet: {
  //     piece: false,
  //     dye: false,
  //   },
  //   chest: {
  //     piece: false,
  //     dye: false,
  //   },
  //   glove: {
  //     piece: false,
  //     dye: false,
  //   },
  //   leg: {
  //     piece: false,
  //     dye: false,
  //   },
  //   boot: {
  //     piece: false,
  //     dye: false,
  //   },
  // });

  // const resetGlam = () => {
  //   setCompletedGlam(AppContextDefaultValues.completedGlam);
  // };

  // const handleGearChange = (
  //   slotName: string,
  //   maxPieces: number,
  //   value: string
  // ) => {
  //   if (value.length && (+value < 1 || +value > maxPieces)) {
  //     const piece = invalid[slotName as keyof invalid];
  //     piece.piece = true;
  //     setInvalid({ ...invalid, [slotName]: piece });
  //     return;
  //   }
  //   const piece = invalid[slotName as keyof invalid];
  //   piece.piece = false;
  //   setInvalid({ ...invalid, [slotName]: piece });
  //   const formattedName = slotName + "s";
  //   const index = Math.floor(Math.random() * +value);
  //   const name: string = itemsData[formattedName as keyof allItems][index].name;
  //   const dyeable: boolean =
  //     itemsData[formattedName as keyof allItems][index].dyeable;
  //   const { dyeGroup, dye } = completedGlam[slotName as keyof fullGlamSet];
  //   const pieceObj = {
  //     name,
  //     dyeable,
  //     dyeGroup,
  //     dye,
  //   };
  //   if (!dyeable) {
  //     pieceObj.dyeGroup = 0;
  //     pieceObj.dye = "";
  //   }
  //   setCompletedGlam({
  //     ...completedGlam,
  //     [slotName]: pieceObj,
  //   });
  // };

  // const handleGearDyeGroup = (slotName: string, value: string) => {
  //   if (value.length && (+value < 1 || +value > allDyes.length)) {
  //     const piece = invalid[slotName as keyof invalid];
  //     piece.dye = true;
  //     setInvalid({ ...invalid, [slotName]: piece });
  //     return;
  //   }
  //   const piece = invalid[slotName as keyof invalid];
  //   piece.dye = false;
  //   const dyeGroup = Math.floor(Math.random() * +value);
  //   const { name, dyeable, dye } = completedGlam[slotName as keyof fullGlamSet];
  //   const pieceObj = {
  //     name,
  //     dyeable,
  //     dyeGroup,
  //     dye,
  //   };
  //   setCompletedGlam({
  //     ...completedGlam,
  //     [slotName]: pieceObj,
  //   });
  // };

  // const handleGearDyeColor = (slotName: string, value: string) => {
  //   if (
  //     value.length &&
  //     (+value < 1 ||
  //       +value >
  //         allDyes[completedGlam[slotName as keyof fullGlamSet].dyeGroup].length)
  //   ) {
  //     const piece = invalid[slotName as keyof invalid];
  //     piece.dye = true;
  //     setInvalid({ ...invalid, [slotName]: piece });
  //     return;
  //   }
  //   const piece = invalid[slotName as keyof invalid];
  //   piece.dye = false;
  //   const dye =
  //     allDyes[completedGlam[slotName as keyof fullGlamSet].dyeGroup][
  //       Math.floor(Math.random() * +value)
  //     ];
  //   const { name, dyeable, dyeGroup } =
  //     completedGlam[slotName as keyof fullGlamSet];
  //   const pieceObj = {
  //     name,
  //     dyeable,
  //     dyeGroup,
  //     dye,
  //   };
  //   setCompletedGlam({
  //     ...completedGlam,
  //     [slotName]: pieceObj,
  //   });
  // };

  // const randomizePiece = (
  //   piece: string,
  //   maxOptions: number,
  //   randomNumber: number
  // ): fullPiece => {
  //   const randomizedPiece: fullPiece = {
  //     name: "",
  //     dyeable: false,
  //     dyeGroup: 0,
  //     dye: "",
  //   };
  //   const itemIndex = Math.floor(randomNumber * maxOptions);
  //   const formattedName = piece + "s";
  //   randomizedPiece.name =
  //     itemsData[formattedName as keyof allItems][itemIndex].name;
  //   randomizedPiece.dyeable =
  //     itemsData[formattedName as keyof allItems][itemIndex].dyeable;
  //   if (randomizedPiece.dyeable) {
  //     const dyeGroup = Math.floor(randomNumber * allDyes.length);
  //     const dye =
  //       allDyes[dyeGroup][Math.floor(randomNumber * allDyes[dyeGroup].length)];
  //     randomizedPiece.dyeGroup = dyeGroup;
  //     randomizedPiece.dye = dye;
  //   }
  //   return randomizedPiece;
  // };

  // const randomizeGlamour = () => {
  //   const randomGlamSet: fullGlamSet = {
  //     helmet: {
  //       name: "",
  //       dyeable: false,
  //       dyeGroup: 0,
  //       dye: "",
  //     },
  //     chest: {
  //       name: "",
  //       dyeable: false,
  //       dyeGroup: 0,
  //       dye: "",
  //     },
  //     glove: {
  //       name: "",
  //       dyeable: false,
  //       dyeGroup: 0,
  //       dye: "",
  //     },
  //     leg: {
  //       name: "",
  //       dyeable: false,
  //       dyeGroup: 0,
  //       dye: "",
  //     },
  //     boot: {
  //       name: "",
  //       dyeable: false,
  //       dyeGroup: 0,
  //       dye: "",
  //     },
  //   };
  //   inputData.map((piece) => {
  //     const randomNumber = Math.random();
  //     const randomPiece = randomizePiece(
  //       piece.pieceName,
  //       piece.maxOptions,
  //       randomNumber
  //     );
  //     randomGlamSet[piece.pieceName as keyof fullGlamSet] = randomPiece;
  //   });
  //   setCompletedGlam(randomGlamSet);
  // };

  // const value = {
  //   invalid,
  //   resetGlam,
  //   completedGlam,
  //   handleGearChange,
  //   handleGearDyeGroup,
  //   handleGearDyeColor,
  //   randomizeGlamour,
  // };

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
