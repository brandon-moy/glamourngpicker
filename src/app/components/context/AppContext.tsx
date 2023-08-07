"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import { helmets } from "@/app/lib/helmets";
import { chests } from "@/app/lib/chests";
import { gloves } from "@/app/lib/gloves";
import { legs } from "@/app/lib/legs";
import { boots } from "@/app/lib/boots";
import { allDyes } from "@/app/lib/dyes";

type fullPiece = {
  name: string;
  dyeable: boolean;
  dyeGroup: number;
  dye: string;
};

type FormContextType = {
  helmet: fullPiece;
  chest: fullPiece;
  glove: fullPiece;
  leg: fullPiece;
  boot: fullPiece;
  invalid: string;
  handleHelmetChange: (arg0: string) => void;
  handleHelmetDyeGroup: (arg0: string) => void;
  handleHelmetDyeColor: (arg0: string) => void;
};

const formContextDefaultValues: FormContextType = {
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
  invalid: "",
  handleHelmetChange: () => {},
  handleHelmetDyeGroup: () => {},
  handleHelmetDyeColor: () => {},
};

const FormContext = createContext<FormContextType>(formContextDefaultValues);

export function useFormContext() {
  return useContext(FormContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [helmet, setHelmet] = useState<fullPiece>({
    name: "",
    dyeable: false,
    dyeGroup: 0,
    dye: "",
  });
  const [chest, setChest] = useState<fullPiece>({
    name: "",
    dyeable: false,
    dyeGroup: 0,
    dye: "",
  });
  const [glove, setGloves] = useState<fullPiece>({
    name: "",
    dyeable: false,
    dyeGroup: 0,
    dye: "",
  });
  const [leg, setLegs] = useState<fullPiece>({
    name: "",
    dyeable: false,
    dyeGroup: 0,
    dye: "",
  });
  const [boot, setBoots] = useState<fullPiece>({
    name: "",
    dyeable: false,
    dyeGroup: 0,
    dye: "",
  });
  const [invalid, setInvalid] = useState<string>("");

  const handleHelmetChange = (value: string) => {
    if (value.length && (+value < 1 || +value > helmets.length)) {
      setInvalid("Please enter a valid number for helmet");
      setHelmet({ name: "", dyeable: false, dyeGroup: 0, dye: "" });
      return;
    } else {
      setInvalid("");
      const index = Math.floor(Math.random() * +value);
      const { name, dyeable } = helmets[index];
      setHelmet({
        ...helmet,
        name,
        dyeable,
      });
    }
  };

  const handleHelmetDyeGroup = (value: string) => {
    if (value.length && (+value < 1 || +value > allDyes.length)) {
      setInvalid("Please enter a valid number for dye group");
    } else {
      setInvalid("");
      const dyeGroup = Math.floor(Math.random() * +value);
      console.log(dyeGroup);
      setHelmet({
        ...helmet,
        dyeGroup,
      });
    }
  };

  const handleHelmetDyeColor = (value: string) => {
    if (
      value.length &&
      (+value < 1 || +value > allDyes[helmet.dyeGroup].length)
    ) {
      setInvalid("Please enter a valid number for dye color");
    } else {
      setInvalid("");
      const dye = allDyes[helmet.dyeGroup][Math.floor(Math.random() * +value)];
      setHelmet({
        ...helmet,
        dye,
      });
    }
  };

  const value = {
    helmet,
    chest,
    glove,
    leg,
    boot,
    invalid,
    handleHelmetChange,
    handleHelmetDyeGroup,
    handleHelmetDyeColor,
  };

  return (
    <>
      <FormContext.Provider value={value}>{children}</FormContext.Provider>
    </>
  );
}
