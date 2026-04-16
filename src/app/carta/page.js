import Link from "next/link";

export default function Carta() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">🍕 Nuestra Carta</h1>

      <div className="flex flex-col gap-4">

        <Link
          href="/carta/pizzas"
          className="bg-white p-4 rounded-lg shadow hover:shadow-md transition border flex justify-between"
        >
          🍕 Pizzas
          <span className="text-red-500">Ver →</span>
        </Link>

        <Link
          href="#"
          className="bg-white p-4 rounded-lg shadow border flex justify-between opacity-50 cursor-not-allowed"
        >
          🍔 Hamburguesas (en brevedades)
        </Link>

      </div>
    </div>
  );
}