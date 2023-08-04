export default function Home() {
  return (
    <main className="">
      <header className="w-screen py-16 text-center">
        <p className="text-4xl text-white">GlamouRNG Picker</p>
      </header>
      <div
        className="fixed top-0 z-[-100] w-screen h-full lg:h-screen bg-center bg-cover brightness-50 sepia-[25%]"
        style={{ backgroundImage: "url(/bg.png)" }}
      ></div>
      <div className="w-3/5 mx-auto bg-gray-100 bg-opacity-75 rounded"></div>
    </main>
  );
}
