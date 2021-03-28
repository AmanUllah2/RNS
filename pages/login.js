import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { useRouter } from 'next/router'
import UserContext from '../pages/Store/context'

const Index = () => {
    const user = useContext(UserContext)
    const router = useRouter()
    const handleSubmit = (event) => {
        if (email === "" || password === "" || device === "") {
            alert("Please fill all values")
        } else {
            const user = {
                "Email": email,
                "Password": password,
                "IP": IP,
                "Device": device,
                "Location": location
            }
            axios.post('https://spot.stable.trade/api/users/accessToken ', user, { headers: { "Content-Type": "text/plain" } })
                .then((response) => {                    
                    localStorage.setItem("token", response.data.Token);
                    router.push('/')
                })
                .catch((error,res) => {
                    console.log(res)
                    alert("Invalid Email or Password")
                    console.error('There was an error!', error);
                });
        }

    };

    // Setting states for getting form values
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [IP, setIP] = useState("");
    const [device, setDevice] = useState("");
    const [location, setLocation] = useState("");

    console.log("From Store", user)

    useEffect(() => {
        fetch('https://extreme-ip-lookup.com/json/')
            .then(res => res.json())
            .then(response => {
                setLocation(response.city);
                setIP(response.query);
            })
            .catch((data, status) => {
                console.log('Request failed:', data);
            });
    }, [])

    useEffect(() => {
        let tok = localStorage.getItem("token")
        if (tok) {
            router.push('/')
        }
    }, [])

    return (
        <section className="bg-indigo-600 min-h-screen">
            <div className="mx-auto flex justify-center lg:items-center h-full">
                <div className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-white py-12 px-2 sm:px-0">
                    <div className="pt-16 px-2 flex flex-col items-center justify-center">
                        <h3 className="text-2xl sm:text-3xl xl:text-2xl font-bold leading-tight">Login To Your Account</h3>
                    </div>
                    <div className="mt-12 w-full px-2 sm:px-6">
                        <div className="flex flex-col mt-5">
                            <label htmlFor="email" className="text-lg font-semibold leading-tight">
                                Email
                            </label>
                            <input required id="email" value={email} onChange={(event) => setEmail(event.target.value)} name="email" className="h-10 px-2 w-full text-white bg-indigo-700 rounded mt-2 focus:outline-none shadow" type="email" />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="password" className="text-lg font-semibold fleading-tight">
                                Password
                            </label>
                            <input value={password} onChange={(event) => setPassword(event.target.value)} required id="password" name="password" className="h-10 px-2 w-full text-white bg-indigo-700 rounded mt-2 focus:outline-none shadow" type="password" />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="email" className="text-lg font-semibold leading-tight">
                                IP
                            </label>
                            <input value={IP} disabled required id="email" name="email" className="h-10 px-2 w-full text-white bg-indigo-700 rounded mt-2 focus:outline-none shadow" type="text" />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="email" className="text-lg font-semibold leading-tight">
                                Device
                            </label>
                            <input value={device} onChange={(event) => setDevice(event.target.value)} required id="email" name="email" className="h-10 px-2 w-full text-white bg-indigo-700 rounded mt-2 focus:outline-none shadow" type="location" />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="email" className="text-lg font-semibold leading-tight">
                                Location
                        </label>
                            <input value={location} disabled required id="email" name="email" className="h-10 px-2 w-full text-white bg-indigo-700 rounded mt-2 focus:outline-none shadow" type="location" />
                        </div>
                    </div>
                    <div className="pt-6 w-full flex justify-between px-2 sm:px-6">
                        <div className="flex items-center">
                            <input id="rememberme" className="w-3 h-3 mr-2" type="checkbox" />
                            <label htmlFor="rememberme" className="text-xs">
                                Remember Me
                            </label>
                        </div>
                        <a className="text-xs" href="javascript: void(0)">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="px-2 sm:px-6">
                        <button onClick={handleSubmit} className="focus:outline-none w-full bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded text-indigo-600 px-8 py-3 text-sm mt-6">Login</button>
                        <p className="mt-16 text-xs text-center">
                            Don’t Have An Account?{" "}
                            <a className="underline" href="/signup">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Index;
