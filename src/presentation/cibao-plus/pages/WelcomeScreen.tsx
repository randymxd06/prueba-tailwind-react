import { Link } from 'react-router';
import { StepperHeader } from '../components/StepperHeader';
import { useState } from 'react';

export const WelcomeScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState<'sms' | 'email' | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header con Stepper */}
      <StepperHeader />

      {/* Contenido Principal */}
      <main className="flex flex-col p-6 gap-8 bg-white relative">

        <section className="flex flex-col gap-2">
          <h1 className="font-aleo text-2xl font-semibold text-gray-800">
            Bienvenido Juan!
          </h1>
          <p className="font-aleo text-[16px] text-gray-600">
            Ahora indica el método de tu preferencia para validar tu identidad.
          </p>
        </section>

        <section className="flex flex-col gap-4">

          {/* Opción SMS */}
          <button
            className={`
              border rounded-lg p-4 cursor-pointer transition-all duration-200 w-full text-left
              ${selectedMethod === 'sms'
                ? 'border-primary bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
              }
            `}
            onClick={() => setSelectedMethod('sms')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">SMS</p>
                  <p className="text-sm text-gray-500">***-***-1234</p>
                </div>
              </div>
              <svg
                className={`h-5 w-5 transition-colors ${selectedMethod === 'sms' ? 'text-primary' : 'text-gray-400'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Opción Correo Electrónico */}
          <button
            className={`
              border rounded-lg p-4 cursor-pointer transition-all duration-200 w-full text-left
              ${selectedMethod === 'email'
                ? 'border-primary bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
              }
            `}
            onClick={() => setSelectedMethod('email')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Correo Electrónico</p>
                  <p className="text-sm text-gray-500">j****@****.com</p>
                </div>
              </div>
              <svg
                className={`h-5 w-5 transition-colors ${selectedMethod === 'email' ? 'text-primary' : 'text-gray-400'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

        </section>

        {/* Botones de navegación */}
        <div className="flex gap-3 mt-8">
          <Link to="/" className="flex-1">
            <button className="w-full border border-primary text-primary hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Regresar</span>
            </button>
          </Link>

          <Link
            to="/validate-otp"
            className={`flex-1 ${selectedMethod ? '' : 'pointer-events-none opacity-50'}`}
          >
            <button
              className={`
                w-full font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2
                ${selectedMethod
                  ? 'bg-primary hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
              disabled={!selectedMethod}
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
