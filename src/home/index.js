import React from "react"
import { Residential } from "../marketplace/residential"
import { Hero } from "../utilities/hero"
import hero_img from "../resources/images/green-hero.jpg"

export function Home(props) {
    return (
        <>
            {/* Hero section */}
            <Hero img={hero_img} />
            {/* Stats component */}
            <div className="bg-gray-50 pt-12 sm:pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Trusted by developers from over 80 planets
                        </h2>
                        <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
                        </p>
                    </div>
                </div>
                <div className="mt-10 pb-12 bg-white sm:pb-16">
                    <div className="relative">
                        <div className="absolute inset-0 h-1/2 bg-gray-50"/>
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto">
                                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Pepperoni
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                                            100%
                                        </dd>
                                    </div>
                                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Delivery
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                                            24/7
                                        </dd>
                                    </div>
                                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Calories
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                                            100k
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Residential preview />
            {/* Better way to invest section */}
            <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
                <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                        <defs>
                            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                    </svg>
                    <div className="relative">
                        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A better way to send money
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.
                        </p>
                    </div>
                    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="relative">
                            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                Transfer funds world-wide
                            </h3>
                            <p className="mt-3 text-lg text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.
                            </p>
                            <dl className="mt-10 space-y-10">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Competitive exchange rates
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        </dd>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            No hidden fees
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        </dd>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Transfers are instant
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        </dd>
                                    </div>
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                            <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
                                <defs>
                                    <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                            </svg>
                            <img className="relative mx-auto" width="490" src="https://tailwindui.com/img/features/feature-example-1.png" alt=""/>
                        </div>
                    </div>
                    <svg className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                        <defs>
                            <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                    </svg>
                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                    Always in the loop
                                </h3>
                                <p className="mt-3 text-lg text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
                                </p>
                                <dl className="mt-10 space-y-10">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <dt className="text-lg leading-6 font-medium text-gray-900">
                                                Mobile notifications
                                            </dt>
                                            <dd className="mt-2 text-base text-gray-500">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <dt className="text-lg leading-6 font-medium text-gray-900">
                                                Reminder emails
                                            </dt>
                                            <dd className="mt-2 text-base text-gray-500">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                            </dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>
                            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                                <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
                                    <defs>
                                        <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                                </svg>
                                <img className="relative mx-auto" width="490" src="https://tailwindui.com/img/features/feature-example-2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FAQs */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Frequently asked questions
                        </h2>
                        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                            <div className="pt-6">
                                <dt className="text-lg">
                                    <button className="text-left w-full flex justify-between items-start text-gray-400">
                                        <span className="font-medium text-gray-900">
                                            What&#039;s the best thing about Switzerland?
                                        </span>
                                        <span className="ml-6 h-7 flex items-center">
                                            <svg className="-rotate-180 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd className="mt-2 pr-12">
                                    <p className="text-base text-gray-500">
                                        I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                                    </p>
                                </dd>
                            </div>
                            <div className="pt-6">
                                <dt className="text-lg">
                                    <button className="text-left w-full flex justify-between items-start text-gray-400">
                                        <span className="font-medium text-gray-900">
                                            How do you make holy water?
                                        </span>
                                        <span className="ml-6 h-7 flex items-center">
                                            <svg className="-rotate-180 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd className="mt-2 pr-12">
                                    <p className="text-base text-gray-500">
                                        You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.
                                    </p>
                                </dd>
                            </div>
                            <div className="pt-6">
                                <dt className="text-lg">
                                    <button className="text-left w-full flex justify-between items-start text-gray-400">
                                        <span className="font-medium text-gray-900">
                                            What do you call someone with no body and no nose?
                                        </span>
                                        <span className="ml-6 h-7 flex items-center">
                                            <svg className="-rotate-180 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd className="mt-2 pr-12">
                                    <p className="text-base text-gray-500">
                                        Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.
                                    </p>
                                </dd>
                            </div>
                            <div className="pt-6">
                                <dt className="text-lg">
                                    <button className="text-left w-full flex justify-between items-start text-gray-400">
                                        <span className="font-medium text-gray-900">
                                            Why do you never see elephants hiding in trees?
                                        </span>
                                        <span className="ml-6 h-7 flex items-center">
                                            <svg className="-rotate-180 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd className="mt-2 pr-12">
                                    <p className="text-base text-gray-500">
                                        Because they&#039;re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                                    </p>
                                </dd>
                            </div>
                            <div className="pt-6">
                                <dt className="text-lg">
                                    <button className="text-left w-full flex justify-between items-start text-gray-400">
                                        <span className="font-medium text-gray-900">
                                            Why can&#039;t you hear a pterodactyl go to the bathroom?
                                        </span>
                                        <span className="ml-6 h-7 flex items-center">
                                            <svg className="-rotate-180 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd className="mt-2 pr-12">
                                    <p className="text-base text-gray-500">
                                        Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error.
                                    </p>
                                </dd>
                            </div>
                            <div className="pt-6">
                                <dt className="text-lg">
                                    <button className="text-left w-full flex justify-between items-start text-gray-400">
                                        <span className="font-medium text-gray-900">
                                            Why did the invisible man turn down the job offer?
                                        </span>
                                        <span className="ml-6 h-7 flex items-center">
                                            <svg className="-rotate-180 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd className="mt-2 pr-12">
                                    <p className="text-base text-gray-500">
                                        He couldn&#039;t see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.
                                    </p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

{/* export const page = JSON.stringify(enText); */}
