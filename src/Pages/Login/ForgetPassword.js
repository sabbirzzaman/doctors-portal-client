import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const ForgetPassword = () => {
    const [
        sendPasswordResetEmail, 
        sending,
    ] = useSendPasswordResetEmail(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async ({ email }) => {
        await sendPasswordResetEmail(email)
        toast.success('Reset URL send on your Email')
    };

    if(sending) {
        return <Loading></Loading>
    }

    return (
        <section>
            <div className="mx-auto max-w-[325px] sm:max-w-[568px] md:max-w-[768px] lg:max-w-[1240px] flex justify-center items-center h-screen">
                <div className="card w-96 bg-base-100 p-8 shadow-xl">
                    <div className="=items-center text-center mb-5">
                        <h2 className="text-center text-2xl font-bold">
                            Reset Password
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your email"
                                className="input input-bordered w-full"
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is required',
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/,
                                        message: 'Invalid email address',
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'pattern' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === 'required' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        <input
                            className="btn btn-primary w-full"
                            type="submit"
                            value="Send Reset Email"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgetPassword;