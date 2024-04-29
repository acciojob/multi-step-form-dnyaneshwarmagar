// // App.js
// import React, { useState } from 'react';
// import Step from './Step';

// const App = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     model: '',
//     car_price: '',
//     card_info: '',
//     expiry_date: '',
//   });

//   const nextStep = () => {
//     return new Promise((resolve) => {
//       setStep((prevStep) => {
//         const newStep = prevStep + 1;
//         resolve(newStep);
//         return newStep;
//       });
//     });
//   };

//   const prevStep = () => {
//     return new Promise((resolve) => {
//       setStep((prevStep) => {
//         const newStep = prevStep - 1;
//         resolve(newStep);
//         return newStep;
//       });
//     });
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = () => {
//     // Here you can handle form submission, 
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div>
//       <Step
//         step={step}
//         formData={formData}
//         handleChange={handleChange}
//         nextStep={nextStep}
//         prevStep={prevStep}
//         handleSubmit={handleSubmit}
//       />
//       <div id='step2'></div>
//     <div id='step3'></div>
//     <button type="button"></button>
//     </div>
    

//   );
// };

// export default App;

import React, { useState } from 'react';
import Step from './Step'; // Make sure to adjust the import path
import "./../styles/App.css";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    // rftgb35htg34
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
    // You can add AJAX or other logic for form submission here
  };

  return (
    // fvt4gt4wg4dedcdcw
    <form id="multiStepForm" onSubmit={handleSubmit}>
      <Step stepNumber={1} currentStep={currentStep} onNext={nextStep} onPrev={prevStep} />
      <Step stepNumber={2} currentStep={currentStep} onNext={nextStep} onPrev={prevStep} />
      <Step stepNumber={3} currentStep={currentStep} onNext={nextStep} onPrev={prevStep} />
    </form>
  );
};

export default MultiStepForm;
