import Link from "next/link";

export default function Sucursales() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Nuestras Sucursales</h1>

      <div className="mt-4">
        <Link href="/sucursales/centro" className="text-blue-600 underline">
          📍 Sucursal Centro
        </Link>
      </div>
    </div>
  );
}