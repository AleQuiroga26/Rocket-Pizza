import Link from "next/link"; 

export default function Pizzas(){ 
  
  const pizzas = [
    { id: "muzzarella", nombre: "Muzzarella" }, 
    { id: "napolitana", nombre: "Napolitana" }, 
    { id: "fugazzeta", nombre: "Fugazzeta" } 
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">🍕 Pizzas</h1>

      <div className="flex flex-col gap-4">
        {pizzas.map((p) => (
          <Link
            key={p.id}
            href={`/carta/pizzas/${p.id}`}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition border flex justify-between items-center"
          >
            <span className="text-lg font-semibold">{p.nombre}</span>
            <span className="text-red-500">Ver info →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}