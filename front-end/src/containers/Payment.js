import { useEffect, useState } from "react";
import {Card} from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/Checkout";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);
console.log('paymment-client',clientSecret);
console.log('paymment-stripw',stripePromise);
  return (
    <Card style={{padding:'6em'}} className="shadow-lg p-3 m-5 bg-white rounded">
      <h1>Payment Gateway</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </Card>
  );
}

export default Payment;
