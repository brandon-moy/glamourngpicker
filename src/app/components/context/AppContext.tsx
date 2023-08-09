"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import { helmets } from "@/app/lib/helmets";
import { chests } from "@/app/lib/chests";
import { gloves } from "@/app/lib/gloves";
import { legs } from "@/app/lib/legs";
import { feet } from "@/app/lib/feet";
import { allDyes } from "@/app/lib/dyes";
import { fullGlamSet, AppContextType } from "@/app/lib/types";

const AppContextDefaultValues: AppContextType = {
  invalid: "",
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
  const [invalid, setInvalid] = useState<string>("");
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
      setInvalid(`Please enter a valid number for ${slotName} piece`);
      return;
    } else {
      setInvalid("");
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
      setInvalid("Please enter a valid number for dye group");
    } else {
      setInvalid("");
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
      setInvalid("Please enter a valid number for dye color");
    } else {
      setInvalid("");
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
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
