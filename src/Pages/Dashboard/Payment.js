import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const { id } = useParams();

    const { data: booking, isLoading } = useQuery('booking', () =>
        fetch(`http://localhost:5000/booking/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    const { treatmentName, patientName, appointmentDate, appointmentSlot } =
        booking;

    return (
        <div className="hero min-h-[70vh]">
            <div className="hero-content flex-col gap-5 lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <p className="mb-2">
                        <b>Hello, {patientName}</b>
                    </p>
                    <h1 className="text-5xl font-bold">{treatmentName}</h1>
                    <p className="py-6">
                        We will see you on {appointmentDate} at{' '}
                        {appointmentSlot} for {treatmentName}. Please pay to
                        reached the next step.
                    </p>
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
