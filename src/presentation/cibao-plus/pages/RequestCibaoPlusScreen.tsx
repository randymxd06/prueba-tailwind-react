import { Link } from 'react-router';
import devicesImage from '../assets/Devices.png';
import { useState } from 'react';

export const RequestCibaoPlusScreen = () => {

  const [authorize, setAuthorize] = useState(false);
  const [cedula, setCedula] = useState('');

  const formatCedula = (value: string) => {
    // Remover todos los caracteres no numéricos
    const numbers = value.replace(/\D/g, '');

    // Limitar a 11 dígitos
    const limited = numbers.slice(0, 11);

    // Aplicar formato XXX-XXXXXXX-X
    if (limited.length <= 3) {
      return limited;
    } else if (limited.length <= 10) {
      return `${limited.slice(0, 3)}-${limited.slice(3)}`;
    } else {
      return `${limited.slice(0, 3)}-${limited.slice(3, 10)}-${limited.slice(10)}`;
    }
  };

  const handleCedulaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCedula(e.target.value);
    setCedula(formattedValue);
  };

  // Verificar si la cédula está completa (11 dígitos)
  const isCedulaComplete = cedula.replaceAll(/\D/g, '').length === 11;

  return (

    <div className="min-h-screen bg-white">

      {/*================
        HEADER SECTION
      ===================*/}
      <header className="relative bg-[#004FFF1A] pt-14">

        {/*=================================
          DEVICE AND RED CIRCLE CONTAINER
        ====================================*/}
        <section className="flex justify-center">

          {/*==============
            DEVICE IMAGE
          =================*/}
          <img
            src={devicesImage}
            alt="Dispositivos móviles"
            className="max-w-xs md:max-w-sm object-contain z-11"
          />

          {/*=======================
            RED CIRCLE BACKGROUND
          ==========================*/}
          <div className='-bottom-50 absolute bg-red-600 w-[393px] h-[354px] rounded-full z-10'></div>

        </section>

      </header>

      {/*======================
        MAIN CONTENT SECTION
      =========================*/}
      <main className="flex flex-col p-6 gap-8 bg-white z-11 relative">

        <section className="flex flex-col gap-2">
          <h1 className="font-aleo text-2xl font-semibold text-gray-800">
            Solicita tu <span className="font-aleo text-primary font-semibold">CibaoPlus</span>
          </h1>
          <p className="font-aleo text-[16px] text-gray-600 text-sm">
            Descubre todo lo que Cibao Plus tiene para ti
          </p>
        </section>

        <section className="flex flex-col gap-4">

          <div className="mb-4">
            <label htmlFor="cedula-input" className="block text-gray-700 text-sm mb-2">
              Ingresa tu Cédula asociada a tu cuenta CIBAO
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                id="cedula-input"
                type="text"
                placeholder="402-1234567-8"
                value={cedula}
                onChange={handleCedulaChange}
                maxLength={13}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-start space-x-3">
              <input
                checked={authorize}
                onChange={() => setAuthorize(!authorize)}
                type="checkbox"
                className="mt-1 h-4 w-4 text-primary focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">
                Autorizo el uso de mis datos personales para la evaluación y gestión de mi solicitud.
              </span>
            </label>
          </div>

          <Link
            to={`/welcome`}
            className={(isCedulaComplete && authorize) ? '' : 'pointer-events-none opacity-50'}
          >
            <button
              className={`
                w-full font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2
                ${(isCedulaComplete && authorize)
                  ? 'bg-primary hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
              disabled={!isCedulaComplete}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Validar</span>
            </button>
          </Link>

        </section>

        <footer className="flex flex-col gap-2 mt-12 text-center text-xs text-gray-500">
          <p>Asociación Cibao de Ahorros y Préstamos © 2026</p>
          <p>Políticas de Privacidad | Entidad Autorizada SB</p>
        </footer>

      </main>

    </div>

  )

}
