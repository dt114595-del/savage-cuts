import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* === HERO PRINCIPAL === */}
      <section
        id="inicio"
        className="relative w-full h-[85vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/barber-bg.png')", // tu imagen principal
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide">
            MAESTROS DEL ESTILO
          </h1>
          <p className="text-lg mb-6">
            Innovadores de la barbería moderna — precisión y pasión en cada corte.
          </p>

         
            <Link href="/agendar">
              <button className="bg-transparent border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
                AGENDAR CITA
              </button>
            </Link>
          </div>
        
      </section>

      {/* === INSPIRACIÓN + VALORA TU CORTE === */}
      <section
        id="servicios"
        className="bg-white text-black py-16 px-8 md:px-20 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* ==== Inspiración Savage ==== */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold mb-2 tracking-wide text-center md:text-left">
            INSPIRACIÓN SAVAGE
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center md:text-left">
            Descubre los mejores estilos y tendencias. Tu personalidad comienza aquí.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {["cut1.png", "cut2.png", "cut3.png", "cut4.png"].map(
              (img, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-lg overflow-hidden border-4 border-black shadow-md"
                >
                  <img
                    src={`/${img}`}
                    alt={`Corte ${i + 1}`}
                    className="object-cover w-full h-[300px] md:h-[360px] transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* ==== Valora tu corte ==== */}
        <div className="relative flex justify-center items-center">
          {/* Marco negro externo */}
          <div className="absolute -inset-4 border-8 border-black rounded-xl"></div>

          {/* Contenedor blanco */}
          <div className="relative bg-white text-black p-10 rounded-xl shadow-xl w-full max-w-md">
            <h2 className="text-3xl font-bold mb-3 tracking-wide text-center">
              VALORA TU CORTE
            </h2>
            <p className="text-sm text-gray-700 mb-4 text-center">
              Ayúdanos a mejorar. Tu opinión cuenta.
            </p>

            {/* Estrellas */}
            <div className="flex mb-4 justify-center">
              <span className="text-yellow-500 text-2xl">★★★★★</span>
            </div>

            {/* Formulario */}
            <textarea
              className="w-full h-28 border border-gray-300 p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
              placeholder="Escribe tu comentario..."
            ></textarea>

            <button className="w-full bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition">
              ENVIAR OPINIÓN
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
