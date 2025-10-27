import { createBrowserRouter } from "react-router";
import App from '../../App'
import { RequestCibaoPlusScreen } from '../cibao-plus/pages/RequestCibaoPlusScreen';
import { WelcomeScreen } from "../cibao-plus/pages/WelcomeScreen";
import { ValidateOtpScreen } from "../cibao-plus/pages/ValidateOtpScreen";
import { DigitalSignatureScreen } from "../cibao-plus/pages/DigitalSignatureScreen";
import { CongratulationsScreen } from "../cibao-plus/pages/CongratulationsScreen";
import { ContactEmploymentDetailsScreen } from "../cibao-plus/pages/ContactEmploymentDetailsScreen";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <RequestCibaoPlusScreen /> },
            { path: "welcome", element: <WelcomeScreen /> },
            { path: "validate-otp", element: <ValidateOtpScreen /> },
            { path: "digital-signature", element: <DigitalSignatureScreen /> },
            { path: "congratulations", element: <CongratulationsScreen /> },
            { path: "contact-employment-details", element: <ContactEmploymentDetailsScreen /> },
        ],
    },
]);