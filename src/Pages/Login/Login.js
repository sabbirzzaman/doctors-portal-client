import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = ({ email, password}) => {
        signInWithEmailAndPassword(email, password)
    };

    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";
    
    const [token] = useToken(user);

    useEffect(() => {
        if(token) {
            navigate(from, { replace: true });;
        }
    }, [token, from, navigate])

    if(error) {
        if(error.code === 'auth/user-not-found') {
            toast.error('Wrong email or password!');
        }
        if(error.code === 'auth/invalid-password') {
            toast.error('Wrong password!');
        }
    }

    if(loading) {
        return <Loading height="100vh"></Loading>
    }

    return (
        <section>
            <div className="mx-auto max-w-[325px] sm:max-w-[568px] md:max-w-[768px] lg:max-w-[1240px] flex justify-center items-center h-screen">
                <div className="card w-96 bg-base-100 p-8 shadow-xl">
                    <div className="=items-center text-center mb-5">
                        <h2 className="text-center text-2xl font-bold">
                            Login
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

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                                <span className="label-text-alt"><Link className='text-secondary' to='/forget-password'>Forget Password?</Link></span>
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
                            value="Login"
                        />

                        <div className="divider">OR</div>

                        <p className="mb-5 text-center">
                            New to Doctors Portal?{' '}
                            <Link className="text-secondary" to="/signup">
                                Create new account
                            </Link>
                        </p>

                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
