import GlamourForm from "./components/glamourform";

export default function Home() {
  return (
    <main className="">
      <div
        className="fixed top-0 z-[-100] w-screen h-full lg:h-screen bg-center bg-cover brightness-50 sepia-[25%]"
        style={{ backgroundImage: "url(/bg.png)" }}
      ></div>
      <div className="w-5/6 p-4 mx-auto mt-8 bg-gray-100 bg-opacity-75 rounded lg:w-3/5">
        <p className="p-4 text-4xl text-center">
          Welcome to Beemoy&apos;s GlamouRNG Picker
        </p>
        <p className="py-2 font-bold">How this works:</p>
        <p className="pb-4">
          If you would like to pick a a random glamour for me, please fill in
          the form below! It will take the numbers you input to choose pieces
          that are available on the marketboard for level 1 jobs. Once you
          submit the form it will message me via Discord what you have selected
          and I will make the Glamour Plate! Items that are dyeable will allow
          you to have the option to submit another number for the dye.
        </p>
        <GlamourForm />
      </div>
    </main>
  );
}
