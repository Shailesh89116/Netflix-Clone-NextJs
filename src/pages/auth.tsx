import Input from '@/components/auth/Input';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import logo from "../../public/images/logo.png";
import axios from "axios";

const Auth = () => {

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");

    const [variant, setVariant] = useState("login");

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant)=> currentVariant === "login" ? "register" : "login");
    },[])
    const register = useCallback(async()=>{
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
              });
        } catch (error) {
            console.log(error);   
        }
    },[email, name, password]);

    

  return (
    <div className={`relative w-full h-full bg-[url(../../public/images/hero.jpg)] bg-no-repeat bg-center bg-fixed bg-cover`}>
        <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className="px-12 py-5">
                <Image src={logo} alt="logo" className="h-12 w-24" />
            </nav>
            <div className='flex justify-center'>
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 className='text-white text-4xl mb-8 font-semibold'>
                        {variant === "login" ? "Sign in" : "Create an account"}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {variant === "register" && (
                            <Input
                            label="Username"
                            onChange={(e:any)=>{setName(e.target.value)}}
                            id="username"
                            value={name}/>
                        )}

<Input
                        label="Email"
                        onChange={(e:any)=>{setEmail(e.target.value)}}
                        id="email"
                        type="email"
                        value={email}/>

<Input
                        label="Password"
                        onChange={(e:any)=>{setPassword(e.target.value)}}
                        id="password"
                        type="password"
                        value={password}/>
                    </div>
                    <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'
                    onClick={register}>
                        {variant === "login" ? "Login" : "Sign up"}
                    </button>
                    <p className="text-neutral-500 mt-12">
                        {variant === "login" ? "First time using Netflix?" : "Already have an account"} 
                        <span className="text-white ml-1 hover:underline cursor-pointer" onClick={toggleVariant}>
                            {variant === "login" ? "Create an account" : "Login"}
                        </span>
                        </p>
                </div>
            </div>
        </div>
    </div>
  )}

export default Auth
