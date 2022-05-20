import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { toast } from 'react-toastify';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            toast.error(error.message);
        }
    };

    return (
        <form className="text-right" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className="btn btn-primary btn-sm mt-4"
                type="submit"
                disabled={!stripe}
            >
                Pay Now
            </button>
        </form>
    );
};

export default CheckoutForm;
