export default function SucursalesLayout({ children }) {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center text-white">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/restaurante.jpg')" }}
      ></div>


      <div className="absolute inset-0 bg-black/60"></div>


      <div className="relative z-10 w-full max-w-2xl p-6">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Nuestras Sucursales
        </h2>
        <p className="text-center mb-6">
          Elegí la más cercana:
        </p>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
}