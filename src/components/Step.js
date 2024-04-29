// // Step.js
// import React from 'react';

// const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <div id="step1">
//             <input type="text" id="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" />
//             <br />
//             <input type="text" id="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" />
//           </div>
//         );
//       case 2:
//         return (
//           <div id="step2">
//             <input type="text" id="model" value={formData.model} onChange={handleChange} placeholder="Car Model" />
//             <br />
//             <input type="number" id="car_price" value={formData.car_price} onChange={handleChange} placeholder="Car Price" />
//           </div>
//         );
//       case 3:
//         return (
//           <div id="step3">
//             <input type="text" id="card_info" value={formData.card_info} onChange={handleChange} placeholder="Card Information" />
//             <br />
//             <input type="text" id="expiry_date" value={formData.expiry_date} onChange={handleChange} placeholder="Expiry Date" />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       {renderStep()}
//       {step !== 1 && <button type="button" id="prevBtn" onClick={() => prevStep().then()}>Previous</button>}
//       {step !== 3 ? <button type="button" id="nextBtn" onClick={() => nextStep().then()}>Next</button> : <button type="button" id="submitBtn" onClick={handleSubmit}>Submit</button>}
//     </div>
//   );
// };

// export default Step;

import React from 'react';

const Step = ({ stepNumber, currentStep, onNext, onPrev, onSubmit }) => {
  const isActive = currentStep === stepNumber;

  return (
    <div className={`step ${isActive ? 'active' : ''}`} id={`step${stepNumber}`}>
      {stepNumber === 1 && (
        <>
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" required />

          <label htmlFor="last_name">Last Name:</label>
          <input type="text" id="last_name" name="last_name" required />
        </>
      )}

{/* 
efji3hrifhr3i

frv34v2*/}
      {stepNumber === 2 && (
        <>
          <label htmlFor="model">Car Model:</label>
          <input type="text" id="model" name="model" required />

          <label htmlFor="car_price">Car Price:</label>
          <input type="number" id="car_price" name="car_price" required />
        </>
        // dvfrevfcefvrwb
      )}

      {stepNumber === 3 && (
        <>
          <label htmlFor="card_info">Card Number:</label>
          <input type="text" id="card_info" name="card_info" required />

          <label htmlFor="expiry_date">Expiry Date (MM/YY):</label>
          <input
            type="text"
            id="expiry_date"
            name="expiry_date"
            pattern="\d{2}/\d{2}"
            placeholder="MM/YY"
            required
          />
        </>
      )}

      <div>
        {stepNumber !== 1 && (
          <button type="button" onClick={onPrev}>
            Previous
          </button>
        )}
        {stepNumber !== 3 ? (
          <button type="button" onClick={onNext}>
            Next
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </div>
    </div>
  );
};

export default Step;