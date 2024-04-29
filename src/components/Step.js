// Step.js
import React from 'react';

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div id="step1">
            <input type="text" id="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" />
            <br />
            <input type="text" id="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" />
          </div>
        );
      case 2:
        return (
          <div id="step2">
            <input type="text" id="model" value={formData.model} onChange={handleChange} placeholder="Car Model" />
            <br />
            <input type="number" id="car_price" value={formData.car_price} onChange={handleChange} placeholder="Car Price" />
          </div>
        );
      case 3:
        return (
          <div id="step3">
            <input type="text" id="card_info" value={formData.card_info} onChange={handleChange} placeholder="Card Information" />
            <br />
            <input type="text" id="expiry_date" value={formData.expiry_date} onChange={handleChange} placeholder="Expiry Date" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
      {step !== 1 && <button type="button" id="prevBtn" onClick={() => prevStep().then()}>Previous</button>}
      {step !== 3 ? <button type="button" id="nextBtn" onClick={() => nextStep().then()}>Next</button> : <button type="button" id="submitBtn" onClick={handleSubmit}>Submit</button>}
    </div>
  );
};

export default Step;
