import Link from "next/link";

export default function Sucursales() {
  return (
    <div
  className="min-h-screen bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('/restaurante.jpg')" }}
>
  <div className="bg-black/50 p-6 rounded">
    <h1 className="text-2xl font-bold text-white">
      Nuestras Sucursales
    </h1>

    <div className="mt-4">
      <Link href="/sucursales/centro" className="text-blue-300 underline">
        📍 Sucursal Centro
      </Link>
    </div>
  </div>
</div>
  );
}