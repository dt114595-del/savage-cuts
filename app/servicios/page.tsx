export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-8 md:px-20">
      <h1 className="text-4xl font-bold mb-4 text-center uppercase tracking-widest">
        Nuestros Servicios
      </h1>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        En <span className="text-[#c59d5f] font-semibold">Savage Cuts</span> combinamos precisión,
        estilo y actitud. Cada servicio está diseñado para resaltar tu mejor versión.
      </p>

      {/* Contenedor de tarjetas */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Servicio 1 */}
        <div className="bg-white text-black rounded-xl shadow-lg border-4 border-black p-6 hover:scale-105 transition transform">
          <img
            src="/servicio1.png"
            alt="Corte Clásico"
            className="w-full h-52 object-cover rounded-md border border-black mb-4"
          />
          <h2 className="text-xl font-bold mb-2 uppercase">Corte Clásico</h2>
          <p className="text-sm text-gray-700 mb-4">
            Corte limpio y preciso. Ideal para quienes buscan elegancia y definición diaria.
          </p>
          <p className="font-bold text-[#c59d5f] text-lg">$25.000</p>
        </div>

        {/* Servicio 2 */}
        <div className="bg-white text-black rounded-xl shadow-lg border-4 border-black p-6 hover:scale-105 transition transform">
          <img
            src="/servicio2.png"
            alt="Barba y Alineado"
            className="w-full h-52 object-cover rounded-md border border-black mb-4"
          />
          <h2 className="text-xl font-bold mb-2 uppercase">Barba y Alineado</h2>
          <p className="text-sm text-gray-700 mb-4">
            Alineación y definición perfecta para resaltar tu rostro con estilo y precisión.
          </p>
          <p className="font-bold text-[#c59d5f] text-lg">$20.000</p>
        </div>

        {/* Servicio 3 */}
        <div className="bg-white text-black rounded-xl shadow-lg border-4 border-black p-6 hover:scale-105 transition transform">
          <img
            src="/servicio3.png"
            alt="Corte + Barba"
            className="w-full h-52 object-cover rounded-md border border-black mb-4"
          />
          <h2 className="text-xl font-bold mb-2 uppercase">Corte + Barba</h2>
          <p className="text-sm text-gray-700 mb-4">
            El combo completo. Un servicio integral para una transformación total.
          </p>
          <p className="font-bold text-[#c59d5f] text-lg">$40.000</p>
        </div>

        {/* Servicio 4 */}
        <div className="bg-white text-black rounded-xl shadow-lg border-4 border-black p-6 hover:scale-105 transition transform">
          <img
            src="/servicio4.png"
            alt="Color o Diseño"
            className="w-full h-52 object-cover rounded-md border border-black mb-4"
          />
          <h2 className="text-xl font-bold mb-2 uppercase">Color o Diseño</h2>
          <p className="text-sm text-gray-700 mb-4">
            Dale un toque único con diseños o coloración profesional. ¡Destaca donde vayas!
          </p>
          <p className="font-bold text-[#c59d5f] text-lg">$60.000</p>
        </div>

        {/* Servicio 5 */}
        <div className="bg-white text-black rounded-xl shadow-lg border-4 border-black p-6 hover:scale-105 transition transform">
          <img
            src="/servicio5.png"
            alt="Terapia Capilar"
            className="w-full h-52 object-cover rounded-md border border-black mb-4"
          />
          <h2 className="text-xl font-bold mb-2 uppercase">Terapia Capilar</h2>
          <p className="text-sm text-gray-700 mb-4">
            Revitaliza tu cuero cabelludo y fortalece el cabello con productos premium.
          </p>
          <p className="font-bold text-[#c59d5f] text-lg">$50.000</p>
        </div>

        {/* Servicio 6 */}
        <div className="bg-white text-black rounded-xl shadow-lg border-4 border-black p-6 hover:scale-105 transition transform">
          <img
            src="/servicio6.png"
            alt="Cejas y Detalles"
            className="w-full h-52 object-cover rounded-md border border-black mb-4"
          />
          <h2 className="text-xl font-bold mb-2 uppercase">Cejas y Detalles</h2>
          <p className="text-sm text-gray-700 mb-4">
            Acabado final para un look perfectamente cuidado en cada detalle.
          </p>
          <p className="font-bold text-[#c59d5f] text-lg">$15.000</p>
        </div>
      </div>
    </main>
  );
}
