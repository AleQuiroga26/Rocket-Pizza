export default function Contacto() {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{ backgroundImage: "url('/contacto.png')" }}
      ></div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-md w-full bg-white/90 p-6 rounded-xl shadow-md border">
        
        <h1 className="text-2xl font-bold mb-4 text-center">
          📞 Contacto
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Seguinos o escribinos en nuestras redes
        </p>

        <div className="flex flex-col gap-4">

          <a
            href="#"
            className="bg-blue-600 text-white p-3 rounded-lg text-center hover:bg-blue-700 transition"
          >
            Facebook
          </a>

          <a
            href="#"
            className="bg-violet-700 text-white p-3 rounded-lg text-center hover:bg-pink-600 transition"
          >
            Instagram
          </a>

          <a
            href="#"
            className="bg-green-500 text-white p-3 rounded-lg text-center hover:bg-green-600 transition"
          >
            WhatsApp
          </a>

        </div>

      </div>
    </div>
  );
}