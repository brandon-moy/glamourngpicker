"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import { helmets } from "@/app/lib/helmets";
import { chests } from "@/app/lib/chests";
import { gloves } from "@/app/lib/gloves";
import { legs } from "@/app/lib/legs";
import { boots } from "@/app/lib/boots";
import { allDyes } from "@/app/lib/dyes";
import { gearPiece } from "@/app/lib/types";

type fullPiece = {
  name: string;
  dyeable: boolean;
  dyeGroup: number;
  dye: string;
};

type completedGlam = {
  helmet: fullPiece;
  chest: fullPiece;
  glove: fullPiece;
  leg: fullPiece;
  boot: fullPiece;
};

type FormContextType = {
  completedGlam: completedGlam;
  invalid: string;
  handleGearChange: (arg0: string, arg1: number, arg2: string) => void;
  handleGearDyeGroup: (arg0: string, arg1: string) => void;
  handleGearDyeColor: (arg0: string, arg1: string) => void;
};

const formContextDefaultValues: FormContextType = {
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
    boot: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
  },
  handleGearChange: () => {},
  handleGearDyeGroup: () => {},
  handleGearDyeColor: () => {},
};

const FormContext = createContext<FormContextType>(formContextDefaultValues);

export function useFormContext() {
  return useContext(FormContext);
}

type Props = {
  children: ReactNode;
};

export function FormProvider({ children }: Props) {
  const [completedGlam, setCompletedGlam] = useState<completedGlam>({
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
    boot: {
      name: "",
      dyeable: false,
      dyeGroup: 0,
      dye: "",
    },
  });
  const [invalid, setInvalid] = useState<string>("");

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
      console.log(index);
      console.log(helmets[index]);
      let name: string = "";
      let dyeable: boolean = false;
      switch (slotName) {
        case "helmet":
          name = helmets[index].name;
          console.log(name, typeof name);
          dyeable = helmets[index].dyeable;
        case "chest":
          name = chests[index].name;
          dyeable = chests[index].dyeable;
        case "glove":
          name = gloves[index].name;
          dyeable = gloves[index].dyeable;
        case "leg":
          name = legs[index].name;
          dyeable = legs[index].dyeable;
        case "boot":
          name = boots[index].name;
          dyeable = boots[index].dyeable;
      }
      const { dyeGroup, dye } = completedGlam[slotName as keyof completedGlam];
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
        completedGlam[slotName as keyof completedGlam];
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
          allDyes[completedGlam[slotName as keyof completedGlam].dyeGroup]
            .length)
    ) {
      setInvalid("Please enter a valid number for dye color");
    } else {
      setInvalid("");
      const dye =
        allDyes[completedGlam[slotName as keyof completedGlam].dyeGroup][
          Math.floor(Math.random() * +value)
        ];
      const { name, dyeable, dyeGroup } =
        completedGlam[slotName as keyof completedGlam];
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
    completedGlam,
    handleGearChange,
    handleGearDyeGroup,
    handleGearDyeColor,
  };

  return (
    <>
      <FormContext.Provider value={value}>{children}</FormContext.Provider>
    </>
  );
}
