import Container from "./components/container";

export default function Home() {
  return (
    <main className="">
      <div
        className="fixed top-0 z-[-100] w-screen h-full lg:h-screen bg-center bg-cover brightness-50 sepia-[25%]"
        style={{ backgroundImage: "url(/bg.png)" }}
      ></div>
      <Container />
    </main>
  );
}
