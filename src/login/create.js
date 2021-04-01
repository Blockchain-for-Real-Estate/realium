import React from "react"
import { useHistory } from "react-router-dom"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { ApiUserService } from "../api/services/user.service"
import logo from "../resources/images/logo.svg"

export function CreateAccountForm(props) {
    let history = useHistory();
    const userService = new ApiUserService();
    return (
        <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{  email: '', password: '', confirmpassword: '', fullName: '' }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address')
                    .required('Please enter your email.'),
                    password: Yup.string()
                    .required('Please enter a password.'),
                confirmpassword: Yup.string()
                    .required('Please enter a password.'),
                fullName: Yup.string()
                    .required('Please enter your full name.')
            })}
            onSubmit={(values, { setSubmitting }) => {
                var data = {
                    'investorTypeId':1,
                    'kycVerified':true,
                    'email':values.email,
                    'avaxpassword': values.password,
                    'avaxusername': values.email,
                    'fullName': values.fullName
                }
                userService.postUser(data).then(
                    (response) => {
                        localStorage.setItem('token', response.data.token)
                        if (response.status === 200 || response.status === 201) {
                            history.push(`/dashboard`)
                            window.location.reload()
                        }
                    }
                ).catch(error => {
                    console.error(error);
                    alert("User account not created. Please try again.");
                })
            }}
        >
            <Form>
                    <div class="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <img className="h-12 w-auto sm:h-16" src={logo} alt="Realium"/>
                        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                        Create an account
                        </h2>
                    </div>

                    <div class="mt-8">

                        <div class="mt-6">
                        <div class="mt-3">
                            <label for="fullName" class="block text-sm font-medium text-gray-700">
                                Full name
                            </label>
                            <div class="mt-2">
                                <Field id="fullName" name="fullName" type="fullName" autocomplete="fullName" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div class="mt-3">
                            <label for="email" class="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div class="mt-2">
                                <Field id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div class="mt-3">
                            <label for="password" class="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div class="mt-1">
                                <Field id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div class="mt-3">
                            <label for="confirmpassword" class="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <div class="mt-1">
                                <Field id="confirmpassword" name="confirmpassword" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

    
                        </div>
                        <div class="mt-3">
                            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Create Account
                            </button>
                        </div>
                    </div>
                    </div>
            </Form>
        </Formik>
    )
}
