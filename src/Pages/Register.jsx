import { Form, Link, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormInputs } from '../Component/FormInputs';
import { SubmitButton } from '../Component/SubmitButton';
import { customFetch } from '../Utils/Index.jsx';
import React from 'react';
import { registerUser } from '../Features/User/UserSlice';
export const action = 
(store) =>
async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        const response = await customFetch.post("/auth/local/register", data);
        store.dispatch(registerUser(response.data))
        toast.success("account created successfully");
        return redirect("/");
    }
    catch (error) {
        const errorMessage =
            error?.response?.data?.error?.message || "please check your credentials";
        toast.error(errorMessage);
        return null;
    }
}
export const Register = () => {
    return (
        <section className='h-screen grid place-items-center'>
            <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
                <h4 className='text-center text-3xl font-bold'>Register</h4>
                <FormInputs type="text" label="Username" name="username" />
                <FormInputs type="email" label="Email" name="email" />
                <FormInputs type="password" label="Password" name="password" />
                <div className='mt-4'>
                    <SubmitButton text="register"/>
                </div>
                <p className='text-center'>
                    Already a member?
                    <Link to="/login" className='ml-2 link-hover link-primary capitalize'>
                     Login
                    </Link>
                </p>
            </Form>
        </section>
    )
}