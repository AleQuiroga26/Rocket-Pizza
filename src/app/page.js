export default function Home() {
  return (
    <main className="min-h-screen w-full">
      
      <div className="relative w-full h-screen">
        
        <img
          src="/rocketpizza.png"
          alt="Pizza"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20"></div>


        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-5xl font-bold mb-4">
            Rocket Pizza 
          </h1>
          <p className="text-white text-lg">
            Sabores clásicos como la pizza de mamá
          </p>
        </div>

      </div>
    </main>
  );
}