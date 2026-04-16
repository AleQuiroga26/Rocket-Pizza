export default async function PizzaDetalle({ params }) {
  const pizzas = {
    muzzarella: {
      nombre: "Muzzarella",
      desc: "Salsa de tomate, abundante queso muzzarella y orégano",
      precio: "$3500"
    },
    napolitana: {
      nombre: "Napolitana",
      desc: "Tomate, ajo y perejil",
      precio: "$4000"
    },
    fugazzeta: {
      nombre: "Fugazzeta",
      desc: "Cebolla y queso",
      precio: "$4200"
    }
  };

  const resolvedParams = await params; // 🔥 CLAVE
  const pizza = pizzas[resolvedParams.id];

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border">
      <h1 className="text-2xl font-bold mb-2">
        🍕 {pizza.nombre}
      </h1>

      <p className="text-gray-600 mb-4">
        {pizza.desc}
      </p>

      <p className="text-xl font-semibold mb-6">
        Precio: {pizza.precio}
      </p>

      <a href="#" className="text-red-600 underline hover:text-red-800">
        Elijo esta 🍕
      </a>
    </div>
  );
}