import { Link } from "react-router";

export const CongratulationsScreen = () => {

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col">

      <main className="flex-1 flex flex-col items-center justify-center p-6">

        <div className="mb-8">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            ¡Felicidades Juan!
          </h1>
          <p className="text-gray-600 text-center max-w-xs leading-relaxed">
            Se te ha creado y añadido tu nueva CibaoPlus.
            Para continuar, activa tu tarjeta por la App
          </p>
        </div>

        <div className="mb-12">
          <div className="relative">
            <div className="w-72 h-44 bg-linear-to-r from-blue-600 to-primary rounded-xl shadow-lg relative overflow-hidden">

              <div className="absolute top-6 left-6">
                <span className="text-white font-bold text-lg">Cibao.</span>
              </div>

              <div className="absolute top-6 right-6">
                <span className="text-white font-bold text-lg tracking-wider">VISA</span>
              </div>

              <div className="absolute top-16 left-6 w-8 h-6 bg-gray-300 rounded-sm"></div>

              <div className="absolute top-16 right-16">
                <div className="w-6 h-6 border-2 border-white rounded-full opacity-70">
                  <div className="w-4 h-4 border border-white rounded-full m-0.5 opacity-70"></div>
                </div>
              </div>

              <div className="absolute bottom-12 left-6">
                <span className="text-white font-mono text-sm tracking-wider">
                  •••• •••• •••• ••••
                </span>
              </div>

              <div className="absolute -bottom-10 -right-10 w-32 h-32 border-4 border-white opacity-20 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 border-2 border-white opacity-30 rounded-full"></div>
            </div>

            <div className="absolute top-2 left-2 w-72 h-44 bg-gray-400 rounded-xl -z-10 opacity-30"></div>
          </div>
        </div>

      </main>

      <div className="p-6">
        <Link to="/contact-employment-details">
          <button className="w-full text-white bg-primary hover:bg-blue-700 font-medium py-4 px-6 rounded-xl transition duration-200 shadow-sm">
            Continuar
          </button>
        </Link>
      </div>

      <footer className="p-4 text-center text-xs text-gray-500">
        <p>Asociación Cibao de Ahorros y Préstamos © 2026</p>
        <p>Políticas de Privacidad | Entidad Autorizada SB</p>
      </footer>

    </div>
  );
};
