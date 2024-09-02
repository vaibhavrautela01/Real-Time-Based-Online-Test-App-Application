import React, { useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './PaymentPage.css'; // Import your custom CSS for styling
import Header from './header_log3';
import Footer from './footer';

const PaymentPage = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [universityData, setUniversityData] = useState([]);
  const [error, setError] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    console.log("Amount changed to:", e.target.value); // Debugging line
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    console.log("Currency changed to:", e.target.value); // Debugging line
  };

  const initialOptions = {
    "client-id": 'AZyoxyrfqASmjMspbP3Cn68gcpww9l7JsBR9oCfBMkmJIUfPYLx8mp59YQ_Pk7kOTXqbMEv_pIZQ5eQ2',
    currency: currency,
  };

  useEffect(() => {
    fetch('/transistion.json')
      .then(response => response.json())
      .then(data => setUniversityData(data))
      .catch(error => {
        console.error('Error fetching the university data:', error);
        setError('Error fetching data.');
      });
  }, []);

  useEffect(() => {
    console.log("Current amount:", amount); // Debugging line
  }, [amount]);

  const createOrder = (data, actions) => {
    if (!amount || isNaN(amount)) {
      alert("Please select a valid amount.");
      return;
    }

    console.log("Creating order with amount:", amount); // Debugging line
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount.toString(), // Convert the amount to a string
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();
      console.log("Transaction completed by:", details.payer.name.given_name); 
      alert(`Transaction completed by ${details.payer.name.given_name}`);
    } catch (err) {
      console.error("PayPal Error during onApprove:", err);
      alert("An error occurred during the payment process. Please try again.");
    }
  };

  const onError = (err) => {
    console.error("PayPal Error:", err); 
    alert("An error occurred during the payment process. Please try again later.");
  };

  return (
    <>
      <Header />
      <center><h1>Payment Page</h1></center>
      <div className="payment-page">
        <div className="payment-form">
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <select
              id="amount"
              value={amount}
              onChange={handleAmountChange}
            >
              <option value="">Select amount</option>
              <option value="499">$499</option>
              <option value="999">$999</option>
              <option value="1999">$1999</option>
            </select>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="currency">Currency:</label>
            <select
              id="currency"
              value={currency}
              onChange={handleCurrencyChange}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>

        <PayPalScriptProvider options={initialOptions}>
          <div className="payment-button">
            <PayPalButtons
              key={amount} // Forces re-render of PayPal buttons when amount changes
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
          </div>
        </PayPalScriptProvider>
      </div>
      <center><h1>History</h1></center>
      <table style={{ border: "2px solid black", width: "100%" }}>
        <thead style={{ border: "2px solid black" }}>
          <tr>
            <th>ORDER ID</th>
            <th>PLAN</th>
            <th>EMAIL</th>
            <th>END PLAN</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {universityData.length > 0 ? (
            universityData.map((student) => (
              <tr key={student.studentID}>
                <td style={{ border: "2px solid black" }}>{student.orderid}</td>
                <td style={{ border: "2px solid black", textAlign: 'center' }}>{student.plan}</td>
                <td style={{ border: "2px solid black" }}>{student.payerEmail}</td>
                <td style={{ border: "2px solid black", textAlign: 'center' }}>{student.endplan}</td>
                <td style={{ border: "2px solid black" }}>
                  <center>
                    <div style={{ color: "green", fontWeight: 'bold', fontSize: '20px' }}>{student.status}</div><br />
                    Paid on {student.plandate}, {student.plantime}
                  </center>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>No Pending Request, Empty student data...</td>
            </tr>
          )}
        </tbody>
      </table>

      <Footer />
    </>
  );
};

export default PaymentPage;
