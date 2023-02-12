import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
export default function Recover() {

    const [loadin, setLoaing] = useState(false)
    const { recoverPassword } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    /* Handle recover password here */
    const handleRecover = (data) => {
        setLoaing(true)
        const { email } = data
        recoverPassword(email).then(res => {
            toast.success("Password reset email sent please check your email.", {
                duration: 5000,
            })
            setLoaing(false)
            reset()
        }).catch(error => {
            setLoaing(false)
            reset()
            if (error.message === 'Firebase: Error (auth/user-not-found).') {
                setLoaing(false)
                toast.error('User not found please register', {
                    duration: 5000,
                })
            }

            console.log(error)
        })
    }

    return (
        <div className="hero py-24 bg-white">
            <div>
                <h2 className="text-[32px]">RECOVER PASSWORD</h2>
                <p className='px-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="card flex-shrink-0 xl:w-[600px]">
                    <form onSubmit={handleSubmit(handleRecover)} className="card-body">
                        <div className="form-control">
                            <input {...register("email", { required: "Email field is required" })} name="email" type="email" placeholder="Email" className="input input-bordered rounded-none" />
                            {errors.email && <p role="alert" className="text-start mt-3 text-red-700">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control my-3">
                            <input {...register("password", {
                                required: "Password field required",
                            })} name="password" type="password" placeholder="Password" className="input input-bordered rounded-none" />
                            {errors.password && <p role="alert" className="text-start mt-3 text-red-700">{errors.password?.message}</p>}
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn bg-[#4E4534] rounded-none text-xl">{loadin ? "Processing..." : "submit"}</button>
                        </div>
                        <label className="label justify-start gap-3">
                            <span>Remember Password??</span>
                            <Link to='/login' className="link link-hover">Back to Login</Link>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}