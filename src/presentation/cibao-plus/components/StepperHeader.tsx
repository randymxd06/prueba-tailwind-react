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

export const StepperHeader = () => {
    
    const location = useLocation();

    /**================================================
     * Determine the current step based on the route
     * @returns {number}
    ===================================================*/
    const getCurrentStep = (): number => {
        const currentStep = steps.find(step => step.path === location.pathname);
        return currentStep ? currentStep.id : 1;
    };

    const currentStep = getCurrentStep();

    return (
        <section className="flex items-center justify-between gap-[15px]">
            {steps.map((step) => (
                <div key={step.id} className="flex-1">
                    <div
                        className={`
                                    h-1.5 rounded-full transition-all duration-500 ease-in-out
                                    ${step.id <= currentStep
                                ? 'bg-primary'
                                : 'bg-gray-300'
                            }
                                `}
                    ></div>
                </div>
            ))}
        </section>
    );
};