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

    return (
        <div className="">
            <div className="">

                {/* Contenedor de las líneas de progreso */}
                <div className="flex items-center justify-between gap-2">
                    {steps.map((step) => (
                        <div key={step.id} className="flex-1">
                            {/* Línea individual para cada step */}
                            <div
                                className={`
                                    h-1 rounded-full transition-all duration-500 ease-in-out
                                    ${step.id <= currentStep
                                        ? 'bg-blue-600'
                                        : 'bg-gray-300'
                                    }
                                `}
                            ></div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};