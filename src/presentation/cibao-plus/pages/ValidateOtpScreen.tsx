import { Link } from 'react-router';
import { StepperHeader } from '../components/StepperHeader';
import { useState, useRef } from 'react';

export const ValidateOtpScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];

  const handleOtpChange = (index: number, value: string) => {
    // Solo permitir números
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Mover al siguiente input si se ingresó un dígito
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Mover al input anterior con backspace si el campo actual está vacío
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replaceAll(/\D/g, '');
    const newOtp = [...otp];

    for (let i = 0; i < Math.min(4, pastedData.length); i++) {
      newOtp[i] = pastedData[i];
    }

    setOtp(newOtp);

    // Enfocar el último input con valor o el siguiente vacío
    const lastFilledIndex = Math.min(3, pastedData.length - 1);
    inputRefs[lastFilledIndex].current?.focus();
  };

  const isComplete = otp.every(digit => digit !== '');

  const handleResend = () => {
    // Lógica para reenviar código
    console.log('Reenviando código...');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header con Stepper */}
      <StepperHeader />

      {/* Contenido Principal */}
      <main className="flex flex-col p-6 gap-8 bg-white relative">

        <section className="flex flex-col gap-2">
          <h1 className="font-aleo text-2xl font-semibold text-gray-800">
            Valida tu Código
          </h1>
          <p className="font-aleo text-[16px] text-gray-600">
            Ingresa el código de 4 dígitos que hemos enviado a tu correo j****@****.com
          </p>
        </section>

        <section className="flex flex-col gap-6">

          {/* Campos OTP */}
          <div className="flex justify-center gap-3">
            <input
              ref={inputRefs[0]}
              type="text"
              maxLength={1}
              value={otp[0]}
              onChange={(e) => handleOtpChange(0, e.target.value)}
              onKeyDown={(e) => handleKeyDown(0, e)}
              onPaste={handlePaste}
              className="w-14 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
              inputMode="numeric"
            />
            <input
              ref={inputRefs[1]}
              type="text"
              maxLength={1}
              value={otp[1]}
              onChange={(e) => handleOtpChange(1, e.target.value)}
              onKeyDown={(e) => handleKeyDown(1, e)}
              onPaste={handlePaste}
              className="w-14 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
              inputMode="numeric"
            />
            <input
              ref={inputRefs[2]}
              type="text"
              maxLength={1}
              value={otp[2]}
              onChange={(e) => handleOtpChange(2, e.target.value)}
              onKeyDown={(e) => handleKeyDown(2, e)}
              onPaste={handlePaste}
              className="w-14 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
              inputMode="numeric"
            />
            <input
              ref={inputRefs[3]}
              type="text"
              maxLength={1}
              value={otp[3]}
              onChange={(e) => handleOtpChange(3, e.target.value)}
              onKeyDown={(e) => handleKeyDown(3, e)}
              onPaste={handlePaste}
              className="w-14 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
              inputMode="numeric"
            />
          </div>

          {/* Enlace para reenviar */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              ¿No te ha llegado el código?{' '}
              <button
                onClick={handleResend}
                className="text-primary hover:text-blue-700 font-medium underline"
              >
                Reenviar
              </button>
            </p>
          </div>

        </section>

        {/* Botones de navegación */}
        <div className="flex gap-3 mt-8">
          <Link to="/welcome" className="flex-1">
            <button className="w-full border border-primary text-primary hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Regresar</span>
            </button>
          </Link>

          <Link
            to="/digital-signature"
            className={`flex-1 ${isComplete ? '' : 'pointer-events-none opacity-50'}`}
          >
            <button
              className={`
                w-full font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2
                ${isComplete
                  ? 'bg-primary hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
              disabled={!isComplete}
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
