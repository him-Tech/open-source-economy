import React, {CSSProperties, useState} from "react";
import {Elements, ExpressCheckoutElement, useElements, useStripe} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import * as stripeJs from "@stripe/stripe-js";
import {LineItem} from "@stripe/stripe-js/dist/stripe-js/elements/express-checkout";

const stripePromise = loadStripe('pk_test_51PyDEVP1HLKJuuAxtULPkFnRdqYrnGrKq50P4XYoMCweq7eMPFbvFTAZTFxbvnESdHO0pI47G49dn3U2cabj4egv00AIe4yt96');

const s = require('stripe')('sk_test_51PyDEVP1HLKJuuAxQHPUd7mHZg7J67zKufLj4jBNyq2YC57XPNzTksCjdTDhwUq8dNGkRwyGPHodEIqFUDLw8pzy002LbE8Lmf');

s.paymentMethodDomains.create({
    domain_name: 'e4de-213-55-186-12.ngrok-free.app',
});

interface ShopProps {

}

export function Shop(props: ShopProps) {


    const options: stripeJs.StripeElementsOptions = {
        mode: 'payment',
        amount: 1099,
        currency: 'usd',
        // Customizable with appearance API.
        appearance: {
            variables: {
                // This controls the border-radius of the rendered Express Checkout Element
                borderRadius: '4px'
            }
        }
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutPage />
        </Elements>
    );
}

const CheckoutPage = () => {
    // Optional: If you're doing custom animations, hide the Element
    const [visibility, setVisibility] = useState<CSSProperties>(
        { visibility: `visible` });

    const onReady = ({availablePaymentMethods} : stripeJs.StripeExpressCheckoutElementReadyEvent) => {
        if (!availablePaymentMethods) {
            // No buttons will show
        } else {
            // Optional: Animate in the Element
            setVisibility({ visibility: `visible` });
        }
    };

    const expressCheckoutOptions: stripeJs.StripeExpressCheckoutElementOptions = {
        // Specify a type per payment method
        // Defaults to 'buy' for Google and 'plain' for Apple
        buttonType: {
            googlePay: 'checkout',
            applePay: 'check-out'
        },
        // Specify a theme per payment method
        // Default theme is based on appearance API settings
        buttonTheme: {
            applePay: 'white-outline'
        },
        // Height in pixels. Defaults to 44. The width is always '100%'.
        buttonHeight: 55
    }

    const onClick = ({resolve}: stripeJs.StripeExpressCheckoutElementClickEvent) => {
        const items: LineItem[] = [
            {
                name: 'Sample item',
                amount: 1099
            },
        ];
        const options = {
            emailRequired: true,
            phoneNumberRequired: true,
            lineItems: items
        };
        resolve(options);
    };

    const onCancel = () => {
        // elements.update({amount: 1099})
    };


    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onConfirm = async (event: stripeJs.StripeExpressCheckoutElementConfirmEvent) => {
        if (!stripe || !elements) {
            // Stripe.js hasn't loaded yet.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const submit = await elements.submit();
        if (submit.error) {
            setErrorMessage(submit.error.message ?? null);
        }

        // Create the PaymentIntent and obtain clientSecret
        const res = await fetch('http://localhost:3001/api/v1/shop/create-payment-intent', {
            method: 'POST',
        });
        const {client_secret: clientSecret} = await res.json();

        // Confirm the PaymentIntent using the details collected by the Express Checkout Element
        const {error} = await stripe.confirmPayment({
            // `elements` instance used to create the Express Checkout Element
            elements,
            // `clientSecret` from the created PaymentIntent
            clientSecret,
            confirmParams: {
                return_url: 'https://example.com/order/123/complete',
            },
        });

        if (error) {
            // This point is only reached if there's an immediate error when
            // confirming the payment. Show the error to your customer (for example, payment details incomplete)
            setErrorMessage(error.message ?? null);
        } else {
            // The payment UI automatically closes with a success animation.
            // Your customer is redirected to your `return_url`.
        }
    };


    return (
        <div id="checkout-page">
            <div id="express-checkout-element" style={visibility}>
                <ExpressCheckoutElement
                    options={expressCheckoutOptions}
                    onConfirm={onConfirm}
                    onReady={onReady}
                    onClick={onClick}
                    // onShippingAddressChange={onShippingAddressChange}
                    // onShippingRateChange={onShippingRateChange}
                    onCancel={onCancel}
                />
                {errorMessage && <div>{errorMessage}</div>}
            </div>
        </div>
    );
};