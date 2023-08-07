import Modal from "./components/modal";
import GlamourForm from "./components/glamourform";

export default function Home() {
  return (
    <main className="">
      <div
        className="fixed top-0 z-[-100] w-screen h-full lg:h-screen bg-center bg-cover brightness-50 sepia-[25%]"
        style={{ backgroundImage: "url(/bg.png)" }}
      ></div>
      <div className="w-5/6 p-4 mx-auto mt-8 bg-gray-100 bg-opacity-75 rounded lg:w-1/5">
        <Modal />
        <GlamourForm />
      </div>
    </main>
  );
}
