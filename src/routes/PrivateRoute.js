import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const { data: users } = useQuery({
        queryKey: ["users", user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}/user-role?email=${user?.email}`);
            const data = await res.json()
            return data
        }
    })
    if (loading) {
        return <Spinner></Spinner>
    }
    else if (!user?.uid) {
        toast.error("Please login to see dashboard")
        return <Navigate to='/login'></Navigate>
    }
    else if (users?.role !== "admin") {
        return <div className='flex gap-10 flex-col justify-center items-center px-3 md:px-5 lg:px-[40px] xl:px-[91px] py-7 lg:py-[50px] xl:py-[100px]'>
            <h2 className='uppercase font-bold text-4xl text-red-600'>Unauthorized Access 401</h2>
            <img className='w-4/12' src="/assets/access_denied.svg" alt="acces_d" />
        </div>
    }
    return children
};

export default PrivateRoute;