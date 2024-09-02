import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';

const PayPalButton = ({ amount }) => {
  const clientId = 'AZyoxyrfqASmjMspbP3Cn68gcpww9l7JsBR9oCfBMkmJIUfPYLx8mp59YQ_Pk7kOTXqbMEv_pIZQ5eQ2'; // Directly included client ID
  const navigate = useNavigate();
  const [transactionState, setTransactionState] = useState({ success: false, error: false, message: '' });

  // Ensure amount is a number and format it to 2 decimal places
  const formattedAmount = parseFloat(amount).toFixed(2);

  const handleTransaction = async (orderId, amount, payerEmail, status) => {
    try {
      const response = await fetch('http://localhost:3001/api/transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId, amount, payerEmail, status }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setTransactionState({ success: false, error: true, message: `Failed to save transaction data: ${errorText}` });
        console.error('Error response from backend:', errorText);
        throw new Error('Failed to save transaction data');
      }

      setTransactionState({ success: true, error: false, message: 'Transaction data saved successfully' });
    } catch (err) {
      setTransactionState({ success: false, error: true, message: `Error saving transaction data: ${err.message}` });
      console.error('Error saving transaction data:', err);
      navigate('/Failed', { state: { error: err.message } });
    }
  };

  return (
    <PayPalScriptProvider options={{ "client-id": clientId }}>
      <PayPalButtons
        createOrder={async (data, actions) => {
          try {
            const orderId = await actions.order.create({
              purchase_units: [{ amount: { value: formattedAmount } }],
            });
            return orderId;
          } catch (err) {
            setTransactionState({ success: false, error: true, message: 'Failed to create PayPal order' });
            console.error('Error creating PayPal order:', err);
            navigate('/Failed', { state: { error: 'Failed to create PayPal order' } });
          }
        }}
        onApprove={async (data, actions) => {
          try {
            const details = await actions.order.capture();
            const { id: orderId } = details;
            const payerEmail = details.payer.email_address;
            await handleTransaction(orderId, formattedAmount, payerEmail, 'success');
            if (!transactionState.error) {
              navigate('/Univeristy', { state: { details } });
            }
          } catch (err) {
            setTransactionState({ success: false, error: true, message: err.message });
            console.error('Error capturing PayPal order:', err);
            await handleTransaction(data.orderID, formattedAmount, data.payer.email_address, 'failure');
            navigate('/Failed', { state: { error: err.message } });
          }
        }}
        onError={(err) => {
          setTransactionState({ success: false, error: true, message: err.message || 'An error occurred with the PayPal transaction.' });
          console.error('PayPal transaction error:', err);
          navigate('/Failed', { state: { error: err.message || 'An error occurred with the PayPal transaction.' } });
        }}
      />
      {transactionState.success && <p style={{ color: 'green' }}>{transactionState.message}</p>}
      {transactionState.error && <p style={{ color: 'red' }}>{transactionState.message}</p>}
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
