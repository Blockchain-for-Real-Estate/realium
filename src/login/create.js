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
                        sessionStorage.setItem('token', response.data.token)
                        if (response.status === 200 || response.status === 201) {
                            history.push(`/dashboard`)
                            window.location.reload()
                        }
                    }
                ).catch(error => {
                    props.setNotify && props.setNotify({ msg: `There was an error creating your account.`,
                                                        color: 'red',
                                                        show: true })
                    console.error(error)
                })
            }}
        >
            <Form>
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <img className="h-12 w-auto sm:h-16" src={logo} alt="Realium"/>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Create an account
                        </h2>
                    </div>

                    <div className="mt-8">

                        <div className="mt-6">
                        <div className="mt-3">
                            <label for="fullName" className="block text-sm font-medium text-gray-700">
                                Full name
                            </label>
                            <div className="mt-2">
                                <Field id="fullName" name="fullName" type="fullName" autocomplete="fullName" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div className="mt-3">
                            <label for="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-2">
                                <Field id="email" name="email" type="email" autocomplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div className="mt-3">
                            <label for="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <Field id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div className="mt-3">
                            <label for="confirmpassword" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <div className="mt-1">
                                <Field id="confirmpassword" name="confirmpassword" type="password" autocomplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>


                        </div>
                        <div className="mt-3">
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Create Account
                            </button>
                        </div>
                    </div>
                    </div>
            </Form>
        </Formik>
    )
}
