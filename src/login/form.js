import React from "react"
import { useHistory } from "react-router-dom"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { ApiUserService } from "../api/services/user.service"

export function LoginForm(props) {
    let history = useHistory();
    const userService = new ApiUserService();
    return (
        <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{  username: '', password: '' }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .required('Please enter your email.'),
                password: Yup.string()
                    .required('Please enter a password.')
            })}
            onSubmit={(values, { setSubmitting }) => {
                userService.login(values).then(
                    (response) => {
                        localStorage.setItem('token', response.data.token)
                        try { 
                            userService.getUser(values.username, response.data.token).then(
                                (res) => {
                                    res.data[0].avaxpassword = "*********"
                                    localStorage.setItem('user', JSON.stringify(res.data[0]));
                                }
                            ).then(
                                history.push(`/dashboard`)
                            ).finally(
                                window.location.reload()
                            )
                        } catch {
                            alert("Could not retrieve user")
                        }
                    }
                ).catch(error => {
                    console.error(error);
                    alert("Login failed - recheck your username and password");
                })
            }}
        >
            <Form>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <Field name="username" type="email" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        <ErrorMessage name="username" />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <Field name="password" type="password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        <ErrorMessage name="password" />
                    </div>

                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign In
                        </button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}
