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
  handleChestChange: (arg0: string) => void;
  handleChestDyeGroup: (arg0: string) => void;
  handleChestDyeColor: (arg0: string) => void;
  handleGloveChange: (arg0: string) => void;
  handleGloveDyeGroup: (arg0: string) => void;
  handleGloveDyeColor: (arg0: string) => void;
  handleLegChange: (arg0: string) => void;
  handleLegDyeGroup: (arg0: string) => void;
  handleLegDyeColor: (arg0: string) => void;
  handleBootChange: (arg0: string) => void;
  handleBootDyeGroup: (arg0: string) => void;
  handleBootDyeColor: (arg0: string) => void;
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
  handleChestChange: () => {},
  handleChestDyeGroup: () => {},
  handleChestDyeColor: () => {},
  handleGloveChange: () => {},
  handleGloveDyeGroup: () => {},
  handleGloveDyeColor: () => {},
  handleLegChange: () => {},
  handleLegDyeGroup: () => {},
  handleLegDyeColor: () => {},
  handleBootChange: () => {},
  handleBootDyeGroup: () => {},
  handleBootDyeColor: () => {},
};

const FormContext = createContext<FormContextType>(formContextDefaultValues);

export function useFormContext() {
  return useContext(FormContext);
}

type Props = {
  children: ReactNode;
};

export function FormProvider({ children }: Props) {
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
  const [glove, setGlove] = useState<fullPiece>({
    name: "",
    dyeable: false,
    dyeGroup: 0,
    dye: "",
  });
  const [leg, setLeg] = useState<fullPiece>({
    name: "",
    dyeable: false,
    dyeGroup: 0,
    dye: "",
  });
  const [boot, setBoot] = useState<fullPiece>({
    name: "",
    dyeable: false,
    dyeGroup: 0,
    dye: "",
  });
  const [invalid, setInvalid] = useState<string>("");

  const handleHelmetChange = (value: string) => {
    if (value.length && (+value < 1 || +value > helmets.length)) {
      setInvalid(`Please enter a valid number for helmet piece`);
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

  const handleChestChange = (value: string) => {
    if (value.length && (+value < 1 || +value > chests.length)) {
      setInvalid("Please enter a valid number for chest piece");
      return;
    } else {
      setInvalid("");
      const index = Math.floor(Math.random() * +value);
      const { name, dyeable } = chests[index];
      setChest({
        ...chest,
        name,
        dyeable,
      });
    }
  };

  const handleChestDyeGroup = (value: string) => {
    if (value.length && (+value < 1 || +value > allDyes.length)) {
      setInvalid("Please enter a valid number for dye group");
    } else {
      setInvalid("");
      const dyeGroup = Math.floor(Math.random() * +value);
      setChest({
        ...chest,
        dyeGroup,
      });
    }
  };

  const handleChestDyeColor = (value: string) => {
    if (
      value.length &&
      (+value < 1 || +value > allDyes[chest.dyeGroup].length)
    ) {
      setInvalid("Please enter a valid number for dye color");
    } else {
      setInvalid("");
      const dye = allDyes[chest.dyeGroup][Math.floor(Math.random() * +value)];
      setChest({
        ...chest,
        dye,
      });
    }
  };

  const handleGloveChange = (value: string) => {
    if (value.length && (+value < 1 || +value > gloves.length)) {
      setInvalid(`Please enter a valid number for glove piece`);
      return;
    } else {
      setInvalid("");
      const index = Math.floor(Math.random() * +value);
      const { name, dyeable } = gloves[index];
      setGlove({
        ...glove,
        name,
        dyeable,
      });
    }
  };

  const handleGloveDyeGroup = (value: string) => {
    if (value.length && (+value < 1 || +value > allDyes.length)) {
      setInvalid("Please enter a valid number for dye group");
    } else {
      setInvalid("");
      const dyeGroup = Math.floor(Math.random() * +value);
      setGlove({
        ...glove,
        dyeGroup,
      });
    }
  };

  const handleGloveDyeColor = (value: string) => {
    if (
      value.length &&
      (+value < 1 || +value > allDyes[glove.dyeGroup].length)
    ) {
      setInvalid("Please enter a valid number for dye color");
    } else {
      setInvalid("");
      const dye = allDyes[glove.dyeGroup][Math.floor(Math.random() * +value)];
      setGlove({
        ...glove,
        dye,
      });
    }
  };

  const handleLegChange = (value: string) => {
    if (value.length && (+value < 1 || +value > legs.length)) {
      setInvalid(`Please enter a valid number for leg piece`);
      return;
    } else {
      setInvalid("");
      const index = Math.floor(Math.random() * +value);
      const { name, dyeable } = legs[index];
      setLeg({
        ...leg,
        name,
        dyeable,
      });
    }
  };

  const handleLegDyeGroup = (value: string) => {
    if (value.length && (+value < 1 || +value > allDyes.length)) {
      setInvalid("Please enter a valid number for dye group");
    } else {
      setInvalid("");
      const dyeGroup = Math.floor(Math.random() * +value);
      setLeg({
        ...leg,
        dyeGroup,
      });
    }
  };

  const handleLegDyeColor = (value: string) => {
    if (value.length && (+value < 1 || +value > allDyes[leg.dyeGroup].length)) {
      setInvalid("Please enter a valid number for dye color");
    } else {
      setInvalid("");
      const dye = allDyes[leg.dyeGroup][Math.floor(Math.random() * +value)];
      setLeg({
        ...leg,
        dye,
      });
    }
  };

  const handleBootChange = (value: string) => {
    if (value.length && (+value < 1 || +value > boots.length)) {
      setInvalid(`Please enter a valid number for boot piece`);
      return;
    } else {
      setInvalid("");
      const index = Math.floor(Math.random() * +value);
      const { name, dyeable } = boots[index];
      setBoot({
        ...boot,
        name,
        dyeable,
      });
    }
  };

  const handleBootDyeGroup = (value: string) => {
    if (value.length && (+value < 1 || +value > allDyes.length)) {
      setInvalid("Please enter a valid number for dye group");
    } else {
      setInvalid("");
      const dyeGroup = Math.floor(Math.random() * +value);
      setBoot({
        ...boot,
        dyeGroup,
      });
    }
  };

  const handleBootDyeColor = (value: string) => {
    if (
      value.length &&
      (+value < 1 || +value > allDyes[boot.dyeGroup].length)
    ) {
      setInvalid("Please enter a valid number for dye color");
    } else {
      setInvalid("");
      const dye = allDyes[boot.dyeGroup][Math.floor(Math.random() * +value)];
      setBoot({
        ...boot,
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
    handleChestChange,
    handleChestDyeGroup,
    handleChestDyeColor,
    handleGloveChange,
    handleGloveDyeGroup,
    handleGloveDyeColor,
    handleLegChange,
    handleLegDyeGroup,
    handleLegDyeColor,
    handleBootChange,
    handleBootDyeGroup,
    handleBootDyeColor,
  };

  return (
    <>
      <FormContext.Provider value={value}>{children}</FormContext.Provider>
    </>
  );
}
