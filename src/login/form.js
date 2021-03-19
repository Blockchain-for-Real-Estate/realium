import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"


export function LoginForm(props) {
    return (
        <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{  email: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string().email()
                    .required('Please enter your email.'),
                password: Yup.string()
                    .required('Please enter a password.')
            })}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
            }}
        >
            <Form>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <Field name="email" type="email" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        <ErrorMessage name="email" />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <Field name="password" type="password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        <ErrorMessage name="password" />
                    </div>

                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign In
                        </button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}
