export default function Centro() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/restaurante.jpg')" }}
    >
      <div className="bg-black/50 p-6 rounded text-white">
        <h1 className="text-3xl font-bold mb-4">Sucursal Centro</h1>
        <p>📍 Dirección: San Martin 2000</p>
        <p className="mt-2">🕒 Horario: 18:00 a 00:30</p>
      </div>
    </div>
  );
}