import React from "react"
import { LoginForm } from "./form"
import { Modal } from "../modals/modal"
import hero_img from "../resources/images/login.jpeg"

export function Login(props) {
    return (
        <div className="min-h-screen bg-white flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <h2 className="mt-1 text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <div className="mt-8">
                        <div className="mt-6">
                            <LoginForm setNotify={props.setNotify} />
                        </div>
                        <div className="mt-6">
                            <Modal buttonText="Or create a free account" page="create"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative w-0 flex-1">
                <img className="absolute inset-0 h-full w-full object-cover" src={hero_img} alt="hero-img"/>
            </div>
        </div>
    )
}
