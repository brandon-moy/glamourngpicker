"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import { helmets } from "@/app/lib/helmets";
import { chests } from "@/app/lib/chests";
import { gloves } from "@/app/lib/gloves";
import { legs } from "@/app/lib/legs";
import { feet } from "@/app/lib/feet";
import { allDyes } from "@/app/lib/dyes";
import {
  fullGlamSet,
  AppContextType,
  invalid,
  fullPiece,
} from "@/app/lib/types";
import { inputData } from "@/app/lib/formInputs";

const AppContextDefaultValues: AppContextType = {
  invalid: {
    helmet: { piece: false, dye: false },
    chest: { piece: false, dye: false },
    glove: { piece: false, dye: false },
    leg: { piece: false, dye: false },
    foot: { piece: false, dye: false },
  },
  completedGlam: {
    helmet: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    chest: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    glove: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    leg: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    foot: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
  },
  displayWelcome: true,
  displaySuccess: false,
  resetGlam: () => {},
  openSuccessWindow: () => {},
  closeSuccessWindow: () => {},
  handleDisplayWelcome: () => {},
  handleGearChange: () => {},
  handleGearDyeGroup: () => {},
  handleGearDyeColor: () => {},
  randomizeGlamour: () => {},
};

const AppContext = createContext<AppContextType>(AppContextDefaultValues);

export function useAppContext() {
  return useContext(AppContext);
}

type Props = {
  children: ReactNode;
};

export function FormProvider({ children }: Props) {
  const [completedGlam, setCompletedGlam] = useState<fullGlamSet>({
    helmet: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    chest: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    glove: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    leg: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
    foot: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
  });
  const [invalid, setInvalid] = useState<invalid>({
    helmet: {
      piece: false,
      dye: false,
    },
    chest: {
      piece: false,
      dye: false,
    },
    glove: {
      piece: false,
      dye: false,
    },
    leg: {
      piece: false,
      dye: false,
    },
    foot: {
      piece: false,
      dye: false,
    },
  });
  const [displayWelcome, setDisplayWelcome] = useState<boolean>(true);
  const [displaySuccess, setDisplaySuccess] = useState<boolean>(false);

  const resetGlam = () => {
    setCompletedGlam(AppContextDefaultValues.completedGlam);
  };

  const handleDisplayWelcome = () => {
    setDisplayWelcome(false);
  };

  const openSuccessWindow = () => {
    setDisplaySuccess(true);
  };

  const closeSuccessWindow = () => {
    setDisplaySuccess(false);
  };

  const handleGearChange = (
    slotName: string,
    maxPieces: number,
    value: string
  ) => {
    if (value.length && (+value < 1 || +value > maxPieces)) {
      const piece = invalid[slotName as keyof invalid];
      piece.piece = true;
      setInvalid({ ...invalid, [slotName]: piece });
      return;
    } else {
      const piece = invalid[slotName as keyof invalid];
      piece.piece = false;
      setInvalid({ ...invalid, [slotName]: piece });
      const index = Math.floor(Math.random() * +value);
      let name: string = "";
      let dyeable: boolean = false;
      switch (slotName) {
        case "helmet":
          name = helmets[index].name;
          dyeable = helmets[index].dyeable;
          break;
        case "chest":
          name = chests[index].name;
          dyeable = chests[index].dyeable;
          break;
        case "glove":
          name = gloves[index].name;
          dyeable = gloves[index].dyeable;
          break;
        case "leg":
          name = legs[index].name;
          dyeable = legs[index].dyeable;
          break;
        case "foot":
          name = feet[index].name;
          dyeable = feet[index].dyeable;
          break;
      }
      const { dyeGroup, dye } = completedGlam[slotName as keyof fullGlamSet];
      const pieceObj = {
        name,
        dyeable,
        dyeGroup,
        dye,
      };
      if (!dyeable) {
        pieceObj.dyeGroup = 0;
        pieceObj.dye = "";
      }
      setCompletedGlam({
        ...completedGlam,
        [slotName]: pieceObj,
      });
    }
  };

  const handleGearDyeGroup = (slotName: string, value: string) => {
    if (value.length && (+value < 1 || +value > allDyes.length)) {
      const piece = invalid[slotName as keyof invalid];
      piece.dye = true;
      setInvalid({ ...invalid, [slotName]: piece });
      return;
    } else {
      const piece = invalid[slotName as keyof invalid];
      piece.dye = false;
      const dyeGroup = Math.floor(Math.random() * +value);
      const { name, dyeable, dye } =
        completedGlam[slotName as keyof fullGlamSet];
      const pieceObj = {
        name,
        dyeable,
        dyeGroup,
        dye,
      };
      setCompletedGlam({
        ...completedGlam,
        [slotName]: pieceObj,
      });
    }
  };

  const handleGearDyeColor = (slotName: string, value: string) => {
    if (
      value.length &&
      (+value < 1 ||
        +value >
          allDyes[completedGlam[slotName as keyof fullGlamSet].dyeGroup].length)
    ) {
      const piece = invalid[slotName as keyof invalid];
      piece.dye = true;
      setInvalid({ ...invalid, [slotName]: piece });
      return;
    } else {
      const piece = invalid[slotName as keyof invalid];
      piece.dye = false;
      const dye =
        allDyes[completedGlam[slotName as keyof fullGlamSet].dyeGroup][
          Math.floor(Math.random() * +value)
        ];
      const { name, dyeable, dyeGroup } =
        completedGlam[slotName as keyof fullGlamSet];
      const pieceObj = {
        name,
        dyeable,
        dyeGroup,
        dye,
      };
      setCompletedGlam({
        ...completedGlam,
        [slotName]: pieceObj,
      });
    }
  };

  const randomizePiece = (
    piece: string,
    maxOptions: number,
    randomNumber: number
  ): fullPiece => {
    const randomizedPiece: fullPiece = {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    };
    switch (piece) {
      case "helmet":
        const helmetIndex = Math.floor(randomNumber * maxOptions);
        randomizedPiece.name = helmets[helmetIndex].name;
        randomizedPiece.dyeable = helmets[helmetIndex].dyeable;
        if (randomizedPiece.dyeable) {
          const dyeGroup = Math.floor(randomNumber * allDyes.length);
          const dye =
            allDyes[dyeGroup][
              Math.floor(randomNumber * allDyes[dyeGroup].length)
            ];
          randomizedPiece.dyeGroup = dyeGroup;
          randomizedPiece.dye = dye;
        }
        break;
      case "chest":
        const chestIndex = Math.floor(randomNumber * maxOptions);
        randomizedPiece.name = chests[chestIndex].name;
        randomizedPiece.dyeable = chests[chestIndex].dyeable;
        if (randomizedPiece.dyeable) {
          const dyeGroup = Math.floor(randomNumber * allDyes.length);
          const dye =
            allDyes[dyeGroup][
              Math.floor(randomNumber * allDyes[dyeGroup].length)
            ];
          randomizedPiece.dyeGroup = dyeGroup;
          randomizedPiece.dye = dye;
        }
        break;
      case "glove":
        const gloveIndex = Math.floor(randomNumber * maxOptions);
        randomizedPiece.name = gloves[gloveIndex].name;
        randomizedPiece.dyeable = gloves[gloveIndex].dyeable;
        if (randomizedPiece.dyeable) {
          const dyeGroup = Math.floor(randomNumber * allDyes.length);
          const dye =
            allDyes[dyeGroup][
              Math.floor(randomNumber * allDyes[dyeGroup].length)
            ];
          randomizedPiece.dyeGroup = dyeGroup;
          randomizedPiece.dye = dye;
        }
        break;
      case "leg":
        const legIndex = Math.floor(randomNumber * maxOptions);
        randomizedPiece.name = legs[legIndex].name;
        randomizedPiece.dyeable = legs[legIndex].dyeable;
        if (randomizedPiece.dyeable) {
          const dyeGroup = Math.floor(randomNumber * allDyes.length);
          const dye =
            allDyes[dyeGroup][
              Math.floor(randomNumber * allDyes[dyeGroup].length)
            ];
          randomizedPiece.dyeGroup = dyeGroup;
          randomizedPiece.dye = dye;
        }
        break;
      case "foot":
        const footIndex = Math.floor(randomNumber * maxOptions);
        randomizedPiece.name = feet[footIndex].name;
        randomizedPiece.dyeable = feet[footIndex].dyeable;
        if (randomizedPiece.dyeable) {
          const dyeGroup = Math.floor(randomNumber * allDyes.length);
          const dye =
            allDyes[dyeGroup][
              Math.floor(randomNumber * allDyes[dyeGroup].length)
            ];
          randomizedPiece.dyeGroup = dyeGroup;
          randomizedPiece.dye = dye;
        }
        break;
    }
    return randomizedPiece;
  };

  const randomizeGlamour = () => {
    const randomGlamSet: fullGlamSet = {
      helmet: {
        name: "",
        dyeable: false,
        dyeGroup: 0,
        dye: "",
      },
      chest: {
        name: "",
        dyeable: false,
        dyeGroup: 0,
        dye: "",
      },
      glove: {
        name: "",
        dyeable: false,
        dyeGroup: 0,
        dye: "",
      },
      leg: {
        name: "",
        dyeable: false,
        dyeGroup: 0,
        dye: "",
      },
      foot: {
        name: "",
        dyeable: false,
        dyeGroup: 0,
        dye: "",
      },
    };
    inputData.map((piece) => {
      const randomNumber = Math.random();
      const randoPiece = randomizePiece(
        piece.pieceName,
        piece.maxOptions,
        randomNumber
      );
      randomGlamSet[piece.pieceName as keyof fullGlamSet] = randoPiece;
    });
    setCompletedGlam(randomGlamSet);
    openSuccessWindow();
  };

  const value = {
    invalid,
    displayWelcome,
    displaySuccess,
    resetGlam,
    openSuccessWindow,
    closeSuccessWindow,
    handleDisplayWelcome,
    completedGlam,
    handleGearChange,
    handleGearDyeGroup,
    handleGearDyeColor,
    randomizeGlamour,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
