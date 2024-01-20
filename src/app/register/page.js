"use client";
import Image from "next/image";
import { useState } from "react";

function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/register', {
            method : 'POST',
            body : JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json',
            }, 
        })
    }

    return (  
        <section className="mt-8">
            <h1 className="text-primary text-center text-4xl">Register</h1>
            <form className="block max-w-sm mx-auto" onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-input outline-none" type="email" placeholder="Email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-input outline-none" type="password" placeholder="Password" />
                <button className="btn-primary w-full" type="submit">Register</button>
                <p className="text-center text-gray-600 my-3">or login with</p>
                <button className="flex gap-4 items-center justify-center border border-gray-400 btn bg-white w-full text-gray-700 ">
                    Login with Google
                    <Image src="/google.png" width={24} height={24} alt="google"/>
                </button>
            </form>
        </section>
    );
}

export default RegisterPage;