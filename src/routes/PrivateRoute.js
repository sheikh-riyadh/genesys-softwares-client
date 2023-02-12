import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Spinner></Spinner>
    }
    else if (!user?.uid) {
        toast.error("Please login to see dashboard")
        return <Navigate to='/login'></Navigate>
    }
    return children
};

export default PrivateRoute;