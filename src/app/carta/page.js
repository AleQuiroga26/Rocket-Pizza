import Link from "next/link";

export default function Carta() {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      

      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-110"
        style={{ backgroundImage: "url('/pizza1.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>


      <div className="relative z-10 w-full max-w-xl px-6">
        
        <h1 className="text-4xl font-extrabold mb-2 text-white text-center">
          🍕 Nuestra Carta
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Elegí lo que más te guste
        </p>

        <div className="flex flex-col gap-5">

          <Link
            href="/carta/pizzas"
            className="group bg-white/95 p-5 rounded-xl shadow-lg hover:shadow-2xl transition flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                🍕 Pizzas
              </h2>
              <p className="text-sm text-gray-500">
                Clásicas, especiales y más
              </p>
            </div>

            <span className="text-red-500 font-semibold group-hover:translate-x-1 transition">
              Ver →
            </span>
          </Link>


          <div
            className="bg-white/70 p-5 rounded-xl shadow border flex justify-between items-center opacity-60"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                🍔 Hamburguesas
              </h2>
              <p className="text-sm text-gray-500">
                Próximamente disponibles
              </p>
            </div>

            <span className="text-gray-400">
              —
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}