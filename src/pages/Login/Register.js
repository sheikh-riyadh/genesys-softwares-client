import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
export default function Register() {

    const [loadin, setLoaing] = useState(false)
    const navigate = useNavigate()
    const { registerUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    /* Handle register here */
    const handleRegister = (data) => {
        setLoaing(true)
        const { email, password } = data
        registerUser(email, password).then(res => {

            fetch(`${process.env.REACT_APP_api_url}/users`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(data => {
                if (data?.acknowledged) {
                    toast.success("Registration successfull.")
                    setLoaing(false)
                    reset()
                    navigate('/')
                }
            }).catch(error => {
                setLoaing(false)
                reset()
            })

        }).catch(error => {
            setLoaing(false)
            reset()
            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                toast.error('User already registered')
            }
        })
    }

    return (
        <div className="hero py-24 bg-white">
            <div>
                <h2 className="text-[32px]">CREATE ACCOUNT</h2>
                <p className='px-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="card flex-shrink-0 xl:w-[600px]">
                    <form onSubmit={handleSubmit(handleRegister)} className="card-body">
                        <div className="form-control">
                            <input {...register("fName", { required: "First name field is required" })} name="fName" type="text" placeholder="First name" className="input input-bordered rounded-none" />
                            {errors.fName && <p role="alert" className="text-start mt-3 text-red-700">{errors.fName?.message}</p>}
                        </div>
                        <div className="form-control my-3">
                            <input {...register("lName", { required: "Last name field is required" })} name="lName" type="text" placeholder="Last name" className="input input-bordered rounded-none" />
                            {errors.lName && <p role="alert" className="text-start mt-3 text-red-700">{errors.lName?.message}</p>}
                        </div>
                        <div className="form-control">
                            <input {...register("email", { required: "Email field is required" })} name="email" type="email" placeholder="Email" className="input input-bordered rounded-none" />
                            {errors.email && <p role="alert" className="text-start mt-3 text-red-700">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control my-3">
                            <input {...register("password", {
                                required: "Password field required",
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                    message: "Minimum eight characters, at least one letter and one number"
                                }
                            })} name="password" type="password" placeholder="Password" className="input input-bordered rounded-none" />
                            {errors.password && <p role="alert" className="text-start mt-3 text-red-700">{errors.password?.message}</p>}
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn bg-[#4E4534] rounded-none text-xl">{loadin ? "Processing..." : "Create"}</button>
                        </div>
                        <label className="label justify-start gap-3">
                            <span>Already have an account?</span>
                            <Link to='/login' className="link link-hover">Back to Login</Link>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}