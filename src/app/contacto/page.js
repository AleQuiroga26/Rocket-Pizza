export default function Contacto() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border">
      
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
  );
}