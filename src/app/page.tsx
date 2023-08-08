import WelcomeModal from "./components/modals/WelcomeModal";
import GlamourForm from "./components/glamourform";
import SuccessModal from "./components/modals/SuccessModal";

export default function Home() {
  return (
    <main className="">
      <div
        className="fixed top-0 z-[-100] w-screen h-full lg:h-screen bg-center bg-cover brightness-50 sepia-[25%]"
        style={{ backgroundImage: "url(/background.webp)" }}
      ></div>
      <div className="w-5/6 p-4 mx-auto mt-8 bg-gray-100 bg-opacity-75 rounded lg:w-1/5">
        <WelcomeModal />
        <SuccessModal />
        <GlamourForm />
      </div>
    </main>
  );
}
