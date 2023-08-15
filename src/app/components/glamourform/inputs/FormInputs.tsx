import { useAppContext } from "../../context/AppContext";
import GearInputs from "./GearInput";

export default function FormInputs() {
  const { helmet, chest, glove, leg, boot } = useAppContext();

  return (
    <>
      <GearInputs itemName="helmet" maxOptions={213} gearPiece={helmet} />
      <GearInputs itemName="chest" maxOptions={97} gearPiece={chest} />
      <GearInputs itemName="glove" maxOptions={47} gearPiece={glove} />
      <GearInputs itemName="leg" maxOptions={75} gearPiece={leg} />
      <GearInputs itemName="boot" maxOptions={72} gearPiece={boot} />
    </>
  );
}
