import React from 'react';
import { useLocation } from 'react-router';

interface Step {
    id: number;
    name: string;
    path: string;
}

const steps: Step[] = [
    { id: 1, name: 'Bienvenida', path: '/welcome' },
    { id: 2, name: 'Validación', path: '/validate-otp' },
    { id: 3, name: 'Firma', path: '/digital-signature' },
    { id: 4, name: 'Información', path: '/contact-employment-details' },
];

export const StepperHeader: React.FC = () => {
    const location = useLocation();

    // Determinar el paso actual basado en la ruta
    const getCurrentStep = () => {
        const currentStep = steps.find(step => step.path === location.pathname);
        return currentStep ? currentStep.id : 1;
    };

    const currentStep = getCurrentStep();

    const getStepContent = (step: Step) => {
        if (step.id < currentStep) {
            // Checkmark para pasos completados
            return (
                <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            );
        }
        return step.id;
    };

    return (
        <header className="relative bg-linear-to-r from-[#3B4FE0] to-[#6366F1] pt-8 pb-16">
            {/* Logo de Cibao */}
            <div className="flex justify-start px-6 mb-8">
                <div className="flex items-center">
                    <div className="bg-white rounded-lg px-4 py-2">
                        <span className="text-[#3B4FE0] font-bold text-lg">Cibao.</span>
                    </div>
                </div>
            </div>

            {/* Stepper */}
            <div className="px-6">
                <div className="flex items-center justify-between relative">
                    {/* Línea de conexión entre pasos */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/30 transform -translate-y-1/2 z-0"></div>

                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center relative z-10">
                            {/* Círculo del paso */}
                            <div
                                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-2
                  ${step.id <= currentStep
                                        ? 'bg-white text-[#3B4FE0]'
                                        : 'bg-white/30 text-white'
                                    }
                `}
                            >
                                {step.id <= currentStep ? getStepContent(step) : step.id}
                            </div>

                            {/* Etiqueta del paso */}
                            <span
                                className={`
                  text-xs text-center max-w-[60px]
                  ${step.id <= currentStep ? 'text-white font-medium' : 'text-white/70'}
                `}
                            >
                                {step.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Círculo decorativo rojo en la esquina inferior derecha */}
            <div className="absolute -bottom-32 -right-16 bg-red-600 w-[200px] h-[200px] rounded-full opacity-80"></div>
        </header>
    );
};