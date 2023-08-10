"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import { ModalContextType } from "@/app/lib/types";

const ModalContextInitalValues: ModalContextType = {
  displayWelcome: true,
  displaySuccess: false,
  handleDisplayWelcome: () => {},
  openSuccessWindow: () => {},
  closeSuccessWindow: () => {},
};

const ModalContext = createContext<ModalContextType>(ModalContextInitalValues);

export function useModalContext() {
  return useContext(ModalContext);
}

type Props = {
  children: ReactNode;
};

export function ModalProvider({ children }: Props) {
  const [displayWelcome, setDisplayWelcome] = useState<boolean>(true);
  const [displaySuccess, setDisplaySuccess] = useState<boolean>(false);

  const handleDisplayWelcome = () => {
    setDisplayWelcome(false);
  };

  const openSuccessWindow = () => {
    setDisplaySuccess(true);
  };

  const closeSuccessWindow = () => {
    setDisplaySuccess(false);
  };

  const value = {
    displayWelcome,
    displaySuccess,
    handleDisplayWelcome,
    openSuccessWindow,
    closeSuccessWindow,
  };

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    </>
  );
}
