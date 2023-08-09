import WelcomeModal from "./components/modals/WelcomeModal";
import GlamourForm from "./components/glamourform";
import SuccessModal from "./components/modals/SuccessModal";
import { helmets } from "./lib/helmets";
import { gearPiece } from "./lib/types";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div
        className="fixed top-0 z-[-100] w-screen h-full lg:h-screen bg-center bg-cover brightness-50 sepia-[25%]"
        style={{ backgroundImage: "url(/background.webp)" }}
      ></div>
      <div className="w-5/6 p-4 mx-auto mt-8 bg-opacity-75 rounded bg-background lg:w-1/5">
        <WelcomeModal />
        <SuccessModal />
        <GlamourForm />
      </div>
      <div className="flex flex-wrap">
        {helmets.map((helmet: gearPiece) => {
          const formattedName = helmet.name.replace(/\s+/g, "_");
          return (
            <div key={helmet.name}>
              <Image
                width="60"
                height="60"
                alt={helmet.name}
                src={`/helmets/60px-${formattedName}_Icon.png`}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
