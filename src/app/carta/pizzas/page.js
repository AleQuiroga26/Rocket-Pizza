import Link from "next/link"; 

export default function Pizzas(){ 
  
  const pizzas = [
    { id: "muzzarella", nombre: "Muzzarella", desc: "Clásica con queso y salsa" }, 
    { id: "napolitana", nombre: "Napolitana", desc: "Tomate, ajo y perejil" }, 
    { id: "fugazzeta", nombre: "Fugazzeta", desc: "Cebolla y mucho queso" } 
  ];

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      

      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-110"
        style={{ backgroundImage: "url('/pizza1.jpg')" }}
      ></div>


      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>


      <div className="relative z-10 w-full max-w-xl px-6">
        
        <h1 className="text-4xl font-extrabold mb-2 text-white text-center">
          🍕 Pizzas
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Elegí tu favorita
        </p>

        <div className="flex flex-col gap-5">
          {pizzas.map((p) => (
            <Link
              key={p.id}
              href={`/carta/pizzas/${p.id}`}
              className="group bg-white/95 p-5 rounded-xl shadow-lg hover:shadow-2xl transition flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {p.nombre}
                </h2>
                <p className="text-sm text-gray-500">
                  {p.desc}
                </p>
              </div>

              <span className="text-red-500 font-semibold group-hover:translate-x-1 transition">
                Ver →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}