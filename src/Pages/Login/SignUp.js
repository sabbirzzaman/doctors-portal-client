import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const [
        signInWithGoogle, 
        gUser,
        gLoading,
        gError
    ] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating] = useUpdateProfile(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async ({name, email, password}) => {
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName: name})
    };

    if(user || gUser) {
        console.log(user || gUser);
    }

    if( gLoading || loading || updating) {
        return <Loading></Loading>
    }

    return (
        <section>
            <div className="mx-auto max-w-[325px] sm:max-w-[568px] md:max-w-[768px] lg:max-w-[1240px] flex justify-center items-center h-screen">
                <div className="card w-96 bg-base-100 p-8 shadow-xl">
                    <div className="=items-center text-center mb-5">
                        <h2 className="text-center text-2xl font-bold">
                            Sign Up
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="input input-bordered w-full"
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name is required',
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>
                        </div>

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

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password is required',
                                    },
                                    minLength: {
                                        value: 6,
                                        message:
                                            'Must be 6 character or longer',
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                                {errors.password?.type === 'minLength' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        <input
                            className="btn btn-primary w-full"
                            type="submit"
                            value="Sign Up"
                        />

                        <div className="divider">OR</div>

                        <p className='mb-5 text-center'>
                            Already have an account? <Link className='text-secondary' to='/login'>Login</Link>
                        </p>

                        <button className="btn btn-outline w-full" onClick={() => signInWithGoogle()}>
                            Continue With Google
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;