import { useDispatch } from 'react-redux';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import FormInputs from '../Component/FormInputs.jsx';
import { loginUser } from '../Features/User/UserSlice';
import { customFetch } from '../Utils/Index.jsx';
import React, { useState } from 'react';
import { SubmitButton } from '../Component/SubmitButton';
import { FormInputs } from '../Component/FormInputs';
export const action =
    (store) =>
        async ({ request }) => {
            const formData = await request.formData();
            const data = Object.fromEntries(formData);
            console.log("data ", data);
            console.log("formdata ", formData);
            console.log("store ", store);
            try {
                const response = await customFetch.post("/auth/local", data);
                store.dispatch(loginUser(response.data));
                console.log("resp ", response.data)
                toast.success("Login successful");
                return redirect("/");
            }
            catch (error) {
                const errorMessage =
                    error?.response?.data?.error?.message ||
                    "Please check Your credentials";
                toast.error(errorMessage);
                return null;
            }
        }

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("test@example.com");
    const [password, setPassword] = useState("secret");
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const loginAsGuestUser = async () => {
        try {
            const response = await customFetch.post("/auth/local", {
                identifier: "test@test.com",
                password: "secret",
            });
            dispatch(loginUser(response.data))
            toast.success("Welcome Guest");
            navigate("/");
        } catch (error) {
            console.log("Login Error");
            toast.error("Guest Login Error")
        }
    }
    return (
        <>
            <section className='h-screen grid place-items-center'>
                <Form
                    method='POST'
                    className='card w-96 p-10 bg-base-100 shadow-lg flex flex-col gap-y-4'>
                    <h4 className='text-center text-3xl font-bold'>Login</h4>
                    <FormInputs
                        type="email"
                        label="Email"
                        name="identifier"
                        value={username}
                        onChange={handleUsernameChange}
                        size={2}
                    />
                    <FormInputs
                        type="password"
                        label="Password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        size={2}
                    />
                    <div className='mt-4'>
                        <SubmitButton text="login" />
                    </div>
                    <button type='button' className='btn btn-secondary btn-block' onClick={loginAsGuestUser}>Guest User</button>
                    <p className='text-center'>Not a member yet?
                        <Link to="/register" className='ml-2 link link-hover link-primary capitalize'>
                            Register
                        </Link>
                    </p>
                </Form>
            </section>
        </>
    )
}