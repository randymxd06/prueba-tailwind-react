import { Link } from 'react-router';
import { StepperHeader } from '../components/StepperHeader';
import { useState } from 'react';

export const ContactEmploymentDetailsScreen = () => {
  const [formData, setFormData] = useState({
    country: '',
    province: '',
    municipality: '',
    address: '',
    houseType: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormComplete = Object.values(formData).every(value => value.trim() !== '');

  return (
    <div className="min-h-screen bg-white">
      {/* Header con Stepper */}
      <StepperHeader />

      {/* Contenido Principal */}
      <main className="flex flex-col p-6 gap-8 bg-white relative">

        <section className="flex flex-col gap-2">
          <h1 className="font-aleo text-2xl font-semibold text-gray-800">
            Actualiza tu Información de Contacto y Laboral
          </h1>
          <p className="font-aleo text-[16px] text-gray-600">
            Verifica que tu información de contacto esté actualizada y corrige cualquier dato si es necesario.
          </p>
        </section>

        <section className="flex flex-col gap-6">

          {/* Título de sección */}
          <h2 className="text-lg font-medium text-gray-800">
            Información de Contacto
          </h2>

          {/* País de Residencia */}
          <div className="flex flex-col gap-2">
            <label htmlFor="country-select" className="text-sm font-medium text-gray-700">
              País de Residencia
            </label>
            <select
              id="country-select"
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
            >
              <option value="">República Dominicana</option>
              <option value="do">República Dominicana</option>
              <option value="us">Estados Unidos</option>
              <option value="es">España</option>
            </select>
          </div>

          {/* Provincia */}
          <div className="flex flex-col gap-2">
            <label htmlFor="province-select" className="text-sm font-medium text-gray-700">
              Provincia
            </label>
            <select
              id="province-select"
              value={formData.province}
              onChange={(e) => handleInputChange('province', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
            >
              <option value="">Seleccione</option>
              <option value="santo-domingo">Santo Domingo</option>
              <option value="santiago">Santiago</option>
              <option value="la-vega">La Vega</option>
              <option value="puerto-plata">Puerto Plata</option>
            </select>
          </div>

          {/* Municipio */}
          <div className="flex flex-col gap-2">
            <label htmlFor="municipality-select" className="text-sm font-medium text-gray-700">
              Municipio
            </label>
            <select
              id="municipality-select"
              value={formData.municipality}
              onChange={(e) => handleInputChange('municipality', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
            >
              <option value="">Seleccione</option>
              <option value="distrito-nacional">Distrito Nacional</option>
              <option value="santo-domingo-este">Santo Domingo Este</option>
              <option value="santo-domingo-norte">Santo Domingo Norte</option>
              <option value="santo-domingo-oeste">Santo Domingo Oeste</option>
            </select>
          </div>

          {/* Dirección */}
          <div className="flex flex-col gap-2">
            <label htmlFor="address-input" className="text-sm font-medium text-gray-700">
              Dirección
            </label>
            <textarea
              id="address-input"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="Escriba su dirección"
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            />
          </div>

          {/* Casa o Apartamento */}
          <div className="flex flex-col gap-2">
            <label htmlFor="house-type-select" className="text-sm font-medium text-gray-700">
              Casa o Apartamento
            </label>
            <select
              id="house-type-select"
              value={formData.houseType}
              onChange={(e) => handleInputChange('houseType', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
            >
              <option value="">Seleccione</option>
              <option value="casa">Casa</option>
              <option value="apartamento">Apartamento</option>
              <option value="villa">Villa</option>
              <option value="duplex">Dúplex</option>
            </select>
          </div>

        </section>

        {/* Botones de navegación */}
        <div className="flex gap-3 mt-8">
          <Link to="/digital-signature" className="flex-1">
            <button className="w-full border border-primary text-primary hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Regresar</span>
            </button>
          </Link>

          <Link
            to="/congratulations"
            className={`flex-1 ${isFormComplete ? '' : 'pointer-events-none opacity-50'}`}
          >
            <button
              className={`
                w-full font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2
                ${isFormComplete
                  ? 'bg-primary hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
              disabled={!isFormComplete}
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
