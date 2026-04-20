export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-black">
      <div className="relative w-full h-full">
        <img
          src="/rocketpizza.png"
          alt="Pizza"
          className="w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-5xl font-bold mb-4">
            Rocket Pizza 🚀
          </h1>
          <p className="text-white text-lg">
            Sabores clásicos como la pizza de mamá
          </p>
        </div>
      </div>
    </main>
  );
}