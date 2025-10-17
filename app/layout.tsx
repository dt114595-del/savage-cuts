import "./ui/global.css";
import { Poppins, Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "Savage Cuts",
  description: "Maestros del estilo — Barbería moderna y elegante",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-black text-white`}>
        {/* === NAVBAR === */}
        <header className="fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white shadow-md z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* ==== IZQUIERDA: LOGO + NOMBRE ==== */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo-savage.png"
                alt="Logo Savage Cuts"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h1
                className={`${oswald.className} text-xl md:text-2xl font-bold tracking-widest`}
              >
                SAVAGE CUTS
              </h1>
            </div>

            {/* ==== CENTRO: MENÚ ==== */}
            <ul className="flex-1 flex justify-center gap-10 text-sm md:text-base font-medium uppercase">
              <li>
                <Link href="/" className="hover:text-[#c59d5f] transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-[#c59d5f] transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/agendar" className="hover:text-[#c59d5f] transition">
                  Agendar
                </Link>
              </li>
            </ul>

            {/* ==== DERECHA: BOTÓN ==== */}
            <div className="hidden md:block">
              <Link href="/agendar">
                <button className="bg-[#c59d5f] text-black px-5 py-2 rounded-md font-semibold hover:bg-[#e6e2db] transition">
                  Reserva
                </button>
              </Link>
            </div>
          </nav>
        </header>

        {/* === CONTENIDO PRINCIPAL === */}
        <main className="pt-28">{children}</main>

        {/* === FOOTER === */}
        <footer className="bg-black text-gray-400 text-center py-6 border-t border-gray-800 mt-16">
          <p className="text-sm">
            © {new Date().getFullYear()} Savage Cuts — Todos los derechos
            reservados.
          </p>
        </footer>
      </body>
    </html>
  );
}
