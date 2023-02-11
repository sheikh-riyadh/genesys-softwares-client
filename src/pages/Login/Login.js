import { useForm } from "react-hook-form";
export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = (data) => {
        console.log(data)
    }





    return (
        <div className="hero min-h-screen">
            <div>
                <h2 className="text-[32px]">Login</h2>
                <div className="card flex-shrink-0 w-[600px]">
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <div className="form-control">
                            <input {...register("email", { required: "Email field is required" })} name="email" type="email" placeholder="email" className="input input-bordered rounded-none" />
                            {errors.email && <p role="alert" className="text-start mt-3 text-red-700">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control my-3">
                            <input {...register("password", {
                                required: "Password field required"
                            })} name="password" type="password" placeholder="password" className="input input-bordered rounded-none" />
                            {errors.password && <p role="alert" className="text-start mt-3 text-red-700">{errors.password?.message}</p>}
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn bg-[#4E4534] rounded-none text-xl">Login</button>
                        </div>
                        <label className="label justify-center gap-3">
                            <a href="/">Create account</a>
                            /
                            <a href="/">Forgot password?</a>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
};