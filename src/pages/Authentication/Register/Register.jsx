import { useForm } from "react-hook-form"
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";


export default function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    //Below is our Custom Hooks
    const { createUser } = useAuth();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />

                                {errors.email?.type === "required" && (
                                    <p className="text-red-500">Email is required</p>
                                )}

                                <label className="label">Password</label>
                                <input type="password" {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />

                                {errors.password?.type === "required" &&
                                    <p className='text-red-500'>Password is required</p>
                                }

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Create an Account</button>
                            </fieldset>
                            <p>Already have an login? <Link className="btn btn-link" to="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
