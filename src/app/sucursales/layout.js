export default function SucursalesLayout({ children }) {
  return (
    <div className="bg-orange-100 p-4">
      <h2 className="text-xl font-bold"> Nuestras Sucursales </h2>
      <p>Elegí la más cercana:</p>

      {children}
    </div>
  );
}