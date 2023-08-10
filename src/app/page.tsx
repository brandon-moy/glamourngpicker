import WelcomeModal from "./components/modals/WelcomeModal";
import GlamourForm from "./components/glamourform";
import SuccessModal from "./components/modals/SuccessModal";

export default function Home() {
  return (
    <main className="">
      <div className="w-5/6 p-4 mx-auto mt-8 bg-opacity-75 rounded bg-background lg:w-1/5">
        <WelcomeModal />
        <SuccessModal />
        <GlamourForm />
      </div>
    </main>
  );
}
