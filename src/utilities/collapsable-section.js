import React from "react"
import { Transition } from "@headlessui/react"

export function CollapsableSection(props) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="pt-6">
            <dt className="text-lg">
                <button className="text-left w-full flex justify-between items-start text-gray-400" onClick={() => setIsOpen(!isOpen)}>
                    <span className="font-medium text-gray-900">
                        {props.title}
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                        <svg className={`${isOpen ? '-rotate-180': '-rotate-0'} h-6 w-6 transform`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>
            </dt>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <dd className="mt-2 pr-12">
                    <p className="text-base text-gray-500">
                        {props.text}
                    </p>
                </dd>
            </Transition>
        </div>
    )
}

export const FAQS= [
    {
        title: "What's the best thing about Switzerland?",
        text: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
        title: "How do you make holy water?",
        text: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus."
    },
    {
        title: "What do you call someone with no body and no nose?",
        text: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem."
    },
    {
        title: "Why do you never see elephants hiding in trees?",
        text: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
        title: "Why can't you hear a pterodactyl go to the bathroom?",
        text: "Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error."
    },
    {
        title: "Why did the invisible man turn down the job offer?",
        text: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius."
    }
]
