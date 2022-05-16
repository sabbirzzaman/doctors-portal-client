import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
    const [
        signInWithGoogle, 
        gUser, 
        gLoading, 
        gError
    ] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [token] = useToken(gUser);

    useEffect(() => {
        if(token) {
            navigate(from, { replace: true });;
        }
    }, [token, from, navigate])

    return (
        <button
            className="btn btn-outline w-full"
            onClick={() => signInWithGoogle()}
        >
            Continue With Google
        </button>
    );
};

export default SocialLogin;
