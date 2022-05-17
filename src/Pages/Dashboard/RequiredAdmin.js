import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init'
import useAdmin from '../../hooks/UseAdmin';
import Loading from '../Shared/Loading';

const RequiredAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth) 
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation();

    if(loading || adminLoading) {
        return <Loading height="100vh"></Loading>
    }

    if(!user || !admin) {
        toast.error('Only admins can access user page!')
        return <Navigate to="/" state={{ from: location }} replace />
    }

    return children;
};

export default RequiredAdmin;