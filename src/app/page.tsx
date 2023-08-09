import WelcomeModal from "./components/modals/WelcomeModal";
import GlamourForm from "./components/glamourform";
import SuccessModal from "./components/modals/SuccessModal";
import { chests } from "./lib/chests";
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
        {chests.map((item: gearPiece) => {
          const formattedName = item.name.replace(/\s+/g, "_");
          if (formattedName.includes("/")) {
            const items = formattedName.split("/");
            return (
              <div key={item.name}>
                <Image
                  width="60"
                  height="60"
                  alt={items[0]}
                  src={`/chests/60px-${items[0]}_Icon.png`}
                />
                <Image
                  width="60"
                  height="60"
                  alt={items[1]}
                  src={`/chests/60px-${items[1]}_Icon.png`}
                />
              </div>
            );
          } else {
            return (
              <div key={item.name}>
                <Image
                  width="60"
                  height="60"
                  alt={item.name}
                  src={`/chests/60px-${formattedName}_Icon.png`}
                />
              </div>
            );
          }
        })}
      </div>
    </main>
  );
}
