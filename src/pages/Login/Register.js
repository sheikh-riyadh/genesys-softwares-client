import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
export default function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = (data) => {
        console.log(data)
    }

    return (
        <div className="hero min-h-screen bg-white">
            <div>
                <h2 className="text-[32px]">CREATE ACCOUNT</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="card flex-shrink-0 w-[600px]">
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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
                            <button className="btn bg-[#4E4534] rounded-none text-xl">Create</button>
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