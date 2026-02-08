import { Lock, Mail } from "lucide-react";
import Button from "../components/Button";
import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { type LoginInterface } from "../types";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const { user, login, errors } = useAuthContext();

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState<LoginInterface>({
        email: "",
        password: ""
    });

    // Navigate to home when user successfully logs in
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const { email, password } = loginData;

        login(email, password);
    }

    return <>
        <div className=" flex flex-col justify-center items-center h-screen gap-7  bg-slate-900 ">
            <div className="flex flex-row gap-3">
                {/**Logo et nomApp */}
                <div>

                </div>
                <h1 className="font-bold text-3xl text-white flex items-center "> ContactManagment </h1>
            </div>

            {errors && <span className="text-red-500"> {errors} </span>}


            <div className="flex flex-col gap-13 bg-slate-700 px-7 py-10 border border-slate-700 rounded-xl ">
                <div className="flex flex-col text-center gap-2 ">
                    <h1 className="font-bold text-2xl text-white"> Welcome back </h1>
                    <p className="text-lg text-gray-300 "> Please enter your details sign in. </p>
                </div>

                <form className="flex flex-col gap-5  " onSubmit={handleSubmit} >
                    <div className=" flex flex-col gap-2 ">
                        <label htmlFor="email" className="text-white">Email Address</label>
                        <div className="flex flex-row border border-slate-900 bg-slate-900 p-2 rounded-xl">
                            <Mail size={25} className="text-gray-400 flex items-center mt-2" />
                            <input type="email" className="p-2 border-0 focus:outline-0 focus:bg-slate-900 focus:text-white focus:border-gray-600 " name="email" onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="text-white" >Password</label>
                        <div className="flex flex-row border border-slate-900 bg-slate-900 p-2 rounded-xl">
                            <Lock size={25} className="text-gray-400 flex items-center mt-2" />
                            <input type="password" className="p-2 border-0 focus:outline-0 focus:bg-slate-900 focus:text-white focus:border-gray-600 " name="password" onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <Button className="text-center border w-full p-2 rounded-xl bg-blue-500 border-blue-500 text-white" > Sign In </Button>
                    </div>
                </form>

                <div className="">
                    <p> Don't have an account? <span className="text-blue-500"> Sign up for free </span> </p>
                </div>
            </div>
        </div>
    </>
}

export default Login