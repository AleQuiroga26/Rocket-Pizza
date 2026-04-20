export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-900 via-red-800 to-orange-700 text-white mt-16 border-t border-orange-500/40">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h2 className="text-2xl font-bold text-orange-300 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(255,140,0,0.9)]">
              Rocket Pizza
            </h2> 
            <p className="text-sm text-gray-200 mt-3">
              Mas que una Pizzería. 
            </p>
            <p className="text-sm text-gray-200 mt-3">
              Sabores clásicos como la pizza de mama
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-orange-300 mb-3">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="cursor-pointer transition-all duration-300 hover:text-orange-400 hover:scale-110 hover:-translate-y-1 hover:tracking-wide hover:drop-shadow-[0_0_6px_rgba(255,140,0,0.8)]">
                Inicio
              </li>
              <li className="cursor-pointer transition-all duration-300 hover:text-orange-400 hover:scale-110 hover:-translate-y-1 hover:tracking-wide hover:drop-shadow-[0_0_6px_rgba(255,140,0,0.8)]">
                Carta
              </li>
              <li className="cursor-pointer transition-all duration-300 hover:text-orange-400 hover:scale-110 hover:-translate-y-1 hover:tracking-wide hover:drop-shadow-[0_0_6px_rgba(255,140,0,0.8)]">
                Contacto
              </li> 
            </ul>
          </div> 

          <div>
            <h3 className="text-lg font-semibold text-orange-300 mb-3">
              Información
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="cursor-pointer transition-all duration-300 hover:text-orange-400 hover:scale-105 hover:-translate-y-1 hover:tracking-wide hover:drop-shadow-[0_0_6px_rgba(255,140,0,0.8)]">
                Aviso legal
              </li>
              <li className="cursor-pointer transition-all duration-300 hover:text-orange-400 hover:scale-105 hover:-translate-y-1 hover:tracking-wide hover:drop-shadow-[0_0_6px_rgba(255,140,0,0.8)]">
                Política de cookies
              </li>
              <li className="cursor-pointer transition-all duration-300 hover:text-orange-400 hover:scale-105 hover:-translate-y-1 hover:tracking-wide hover:drop-shadow-[0_0_6px_rgba(255,140,0,0.8)]">
                Política de privacidad
              </li> 
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start border-t border-orange-500/30 pt-8">
          <div>
            <h3 className="text-lg font-semibold text-orange-300 mb-3">
              Nuestra base espacial
            </h3>
            <p className="text-sm text-gray-200">
              San Martín 2000, X5808 Río Cuarto, Córdoba, Argentina
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Abierto 24/7 </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-orange-500/30 shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Rio%20Cuarto%20Cordoba&output=embed"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación"
            ></iframe>
          </div>
        </div>

        <div className="text-center text-xs text-gray-300 border-t border-orange-500/30 mt-8 pt-4">
          © 2026 Rocket Pizza | Proyecto realizado por LikeRiRi´s | Tecnologías Next.js y Tailwind
        </div>  
      </div>
    </footer>
  );
}