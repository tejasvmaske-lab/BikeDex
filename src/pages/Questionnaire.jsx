import "./Questionnaire.css";
import Stepper, { Step } from "../components/Stepper/Stepper";

import Step1AboutYou from "../form_pages/Step1AboutYou";
import Step2Budget from "../form_pages/Step2Budget";
import Step3Usage from "../form_pages/Step3Usage";
import Step4RidingStyle from "../form_pages/Step4RidingStyle";
import Step5Priorities from "../form_pages/Step5Priorities";
import Step6Ownership from "../form_pages/Step6Ownership";
import Step7Brands from "../form_pages/Step7Brands";

import { useState } from "react";

function Questionnaire() {

    const [formData, setFormData] = useState({
        height: 170,
        weight: 70,
        experience: "beginner",

        budget: 300000,

        usage: [],

        riding_style: "balanced",

        priorities: {
            mileage: 3,
            comfort: 3,
            power: 3,
            maintenance: 3,
            pillion: 3
        },

        ownership: "balanced",

        brands: []
    });

    return (
        <section className="questionnaire">

<Stepper
    initialStep={1}
    onStepChange={(step) => console.log(step)}
    onFinalStepCompleted={() => console.log("Completed")}
    backButtonText="Previous"
    nextButtonText="Next"
>

    <Step>
        <Step1AboutYou
            formData={formData}
            setFormData={setFormData}
        />
    </Step>

    <Step>
        <Step2Budget
            formData={formData}
            setFormData={setFormData}
        />
    </Step>

    <Step>
        <Step3Usage
            formData={formData}
            setFormData={setFormData}
        />
    </Step>

    <Step>
        <Step4RidingStyle
            formData={formData}
            setFormData={setFormData}
        />
    </Step>

    <Step>
        <Step5Priorities
            formData={formData}
            setFormData={setFormData}
        />
    </Step>

    <Step>
        <Step6Ownership
            formData={formData}
            setFormData={setFormData}
        />
    </Step>

    <Step>
        <Step7Brands
            formData={formData}
            setFormData={setFormData}
        />
    </Step>

</Stepper>

        </section>
    );
}

export default Questionnaire;