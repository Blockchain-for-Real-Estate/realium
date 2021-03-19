import React from "react"
import { LoginForm } from "./form"
import logo from "../resources/images/logo.svg"
import hero_img from "../resources/images/blue-hero.jpg"

export function Login(props) {
    return (
        <div className="min-h-screen bg-white flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <img className="h-12 w-auto" src={logo} alt="realium-logo"/>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <div className="mt-8">
                        <div className="mt-6">
                            {/* <form action="#" method="POST" className="space-y-6"> */}
                                <LoginForm />
                            {/* </form> */}
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
