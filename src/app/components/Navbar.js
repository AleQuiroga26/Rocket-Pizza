import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white p-4 flex gap-4">
      <Link href="/">Inicio</Link>
      <Link href="/carta">Carta</Link>
      <Link href="/contacto">Contacto</Link>
    </nav>
  );
}