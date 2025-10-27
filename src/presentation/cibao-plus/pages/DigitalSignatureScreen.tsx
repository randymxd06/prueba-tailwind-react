import { Link } from 'react-router';
import { StepperHeader } from '../components/StepperHeader';
import { useState } from 'react';

export const DigitalSignatureScreen = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const documents = [
    { title: 'Tarifario de Productos' },
    { title: 'Contrato de Emisión y Uso de Tarjeta de Débito Remunerada' },
    { title: 'Manual Operativo' },
    { title: 'Declaración de la actividad a que se dedica' },
    { title: 'Términos y Condiciones de la ABA' },
    { title: 'Consultas en Sociedades de Información Crediticia' }
  ];

  const canContinue = acceptedTerms;

  return (
    <div className="min-h-screen bg-white">
      <StepperHeader />

      <main className="flex flex-col p-6 gap-8 bg-white relative">

        <section className="flex flex-col gap-2">
          <h1 className="font-aleo text-2xl font-semibold text-gray-800">
            Firma Digital
          </h1>
          <p className="font-aleo text-[16px] text-gray-600">
            Revisa los enlaces y confirma tu acuerdo firmando digitalmente.
          </p>
        </section>

        <section className="flex flex-col gap-4">

          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.title} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-5 h-5">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0 0l4-4a4 4 0 105.656-5.656l-4 4m-1.102 1.102L8.5 16" />
                  </svg>
                </div>
                <button
                  className="flex-1 text-left text-blue-600 hover:underline text-sm"
                  onClick={() => console.log(`Abriendo documento: ${doc.title}`)}
                >
                  {doc.title}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
              />
              <span className="text-sm text-gray-700 leading-relaxed">
                He leído y acepto los Términos y Condiciones
              </span>
            </label>
          </div>

        </section>

        <div className="flex gap-3 mt-8">
          <Link to="/validate-otp" className="flex-1">
            <button className="w-full border border-primary text-primary hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Regresar</span>
            </button>
          </Link>

          <Link
            to="/congratulations"
            className={`flex-1 ${canContinue ? '' : 'pointer-events-none opacity-50'}`}
          >
            <button
              className={`
                w-full font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2
                ${canContinue
                  ? 'bg-primary hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
              disabled={!canContinue}
            >
              <span>Continuar</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>

        <footer className="flex flex-col gap-2 mt-12 text-center text-xs text-gray-500">
          <p>Asociación Cibao de Ahorros y Préstamos © 2026</p>
          <p>Políticas de Privacidad | Entidad Autorizada SB</p>
        </footer>

      </main>

    </div>
  );
};
