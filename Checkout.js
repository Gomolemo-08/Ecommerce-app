import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CheckoutStep1 from './CheckoutStep1';
import CheckoutStep2 from './CheckoutStep2';
import CheckoutStep3 from './CheckoutStep3';
import CheckoutStep4 from './CheckoutStep4';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [checkoutData, setCheckoutData] = useState({
    shipping: {},
    payment: {},
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const updateCheckoutData = (data) => {
    setCheckoutData({ ...checkoutData, ...data });
  };

  const steps = [
    { number: 1, title: 'Shipping' },
    { number: 2, title: 'Payment' },
    { number: 3, title: 'Review' },
    { number: 4, title: 'Confirmation' },
  ];

  return (
    <Container className="py-5">
      <div className="checkout-steps mb-4">
        <div className="d-flex justify-content-between">
          {steps.map(step => (
            <div key={step.number} className={`step ${currentStep >= step.number ? 'active' : ''}`}>
              <div className="step-number">{step.number}</div>
              <div className="step-title">{step.title}</div>
            </div>
          ))}
        </div>
      </div>

      {currentStep === 1 && (
        <CheckoutStep1 
          nextStep={nextStep} 
          updateCheckoutData={updateCheckoutData} 
          data={checkoutData.shipping}
        />
      )}
      {currentStep === 2 && (
        <CheckoutStep2 
          nextStep={nextStep} 
          prevStep={prevStep} 
          updateCheckoutData={updateCheckoutData} 
          data={checkoutData.payment}
        />
      )}
      {currentStep === 3 && (
        <CheckoutStep3 
          nextStep={nextStep} 
          prevStep={prevStep} 
          checkoutData={checkoutData}
        />
      )}
      {currentStep === 4 && (
        <CheckoutStep4 checkoutData={checkoutData} />
      )}
    </Container>
  );
};

export default Checkout;