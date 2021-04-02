import React from 'react'
import NumberFormat from "react-number-format"

export function DetailsTable(props) {
    return (
        <div className="bg-white">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-center">Property Statistics</h1>
            <p className="mt-3 text-xl text-gray-500 sm:text-center">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>

            </div>
            <div className="mt-4 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
            <div>
                <div className="pt-4 pl-4 pr-4 pb-4">
                <h2 className="text-lg leading-6 font-medium text-gray-900">Property Details</h2>
                <div className="mt-2 border-t-4 border-indigo-600 pt-4">
                <p className="text-sm text-gray-600">
                    Property details displays the common factors of a home that can be compared across all homes.
                </p>
                </div>
                </div>
                <div className="px-3">
                    <ul className="mt-2 mb-10 divide-y">
                        <li className="flex space-x-3 pb-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.817 2.11282C17.8743 2.15976 17.9204 2.21882 17.952 2.28575C17.9837 2.35267 18 2.42579 18 2.49982V16.4998C17.9999 16.6154 17.9598 16.7273 17.8866 16.8167C17.8133 16.906 17.7113 16.9672 17.598 16.9898L12.598 17.9898C12.5333 18.0027 12.4667 18.0027 12.402 17.9898L7.5 17.0098L2.598 17.9898C2.52549 18.0043 2.45067 18.0025 2.37892 17.9846C2.30718 17.9667 2.2403 17.9331 2.1831 17.8863C2.1259 17.8394 2.07981 17.7804 2.04815 17.7136C2.01649 17.6468 2.00004 17.5738 2 17.4998V3.49982C2.00007 3.38428 2.04016 3.27232 2.11344 3.18299C2.18673 3.09366 2.28869 3.03247 2.402 3.00982L7.402 2.00982C7.46669 1.99689 7.53331 1.99689 7.598 2.00982L12.5 2.98982L17.402 2.00982C17.4745 1.99524 17.5493 1.99691 17.6211 2.01472C17.6928 2.03253 17.7597 2.06604 17.817 2.11282ZM12 3.90982L8 3.10982V16.0898L12 16.8898V3.90982ZM13 16.8898L17 16.0898V3.10982L13 3.90982V16.8898ZM7 16.0898V3.10982L3 3.90982V16.8898L7 16.0898Z" fill="#4F46E5"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Location</span>
                        <span className="flex-1 text-sm text-gray-500">{props.listing.city || "Provo"}, {props.listing.state || "UT"}</span>
                        </li>
                        <li className="flex space-x-3 py-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 17.5H8V14.5H6.5V17.5H4V2L10.5 6V8.5M10.5 17.5V8.5M10.5 17.5H16.5V8.5H10.5M12.5 10.5V13.5H14.5V10.5H12.5Z" stroke="#4F46E5"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Type</span>
                        <span className="flex-1 text-sm text-gray-500">{props.listing.listingType || "Residential"}</span>
                        </li>
                        <li className="flex space-x-3 py-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 13.25V9.125H6M4 13.25V16M4 13.25H16M16 16V13.25M16 13.25V9.125H14M6 9.125V5H14V9.125M6 9.125H14" stroke="#4F46E5"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Bedrooms</span>
                        <span className="flex-1 text-sm text-gray-500">{props.listing.details.bedrooms || 3}</span>
                        </li>
                        <li className="flex space-x-3 py-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.48197 10.7778V12.2593L6.50228 14.8519H7.5226M5.48197 10.7778H4M5.48197 10.7778V4.48148L6.84239 3L7.8627 3.37037M5.48197 10.7778H15.6851M15.6851 10.7778V12.2593L14.6648 14.8519H13.6445M15.6851 10.7778H17M7.8627 3.37037V4.85185L8.54291 5.96296L8.20281 6.7037L8.88302 7.44444L11.6039 4.48148L10.9236 3.74074L10.2434 4.11111L9.22312 3.37037H7.8627ZM7.5226 14.8519L6.91041 17M7.5226 14.8519H13.6445M13.6445 14.8519L14.2567 17" stroke="#4F46E5"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Bathrooms</span>
                        <span className="flex-1 text-sm text-gray-500">{props.listing.details.bathrooms || 3}</span>
                        </li>
                        <li className="flex space-x-3 py-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 7V14H12.5V13.5M5.5 7H6L5.5 6.5L5 7H5.5ZM12.5 13.5V14.5L13 14L12.5 13.5ZM2 2V17.5H17.5V2H2Z" stroke="#4F46E5"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Area</span>
                        <span className="flex-1 text-sm text-gray-500">
                        <NumberFormat
                            value={props.listing.details.area || 3295}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={' sqft'}
                        /></span>
                        </li>
                        <li className="flex space-x-3 py-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6.5V18H7M4 6.5V2H12M4 6.5L7.65625 8.75M17 14.5V2H12M17 14.5V18H7M17 14.5L11.3125 11M11.3125 11L7 18M11.3125 11L7.65625 8.75M7.65625 8.75L12 2" stroke="#4F46E5"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Lot</span>
                        <span className="flex-1 text-sm text-gray-500">
                        <NumberFormat
                            value={props.listing.details.lot || 9800}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={' sqft'}
                        /></span>
                        </li>
                        <li className="flex space-x-3 pt-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.9524 11.0953C6.32121 11.0953 5.80954 11.6069 5.80954 12.2381C5.80954 12.8693 6.32121 13.381 6.9524 13.381C7.58358 13.381 8.09526 12.8693 8.09526 12.2381C8.09526 11.6069 7.58358 11.0953 6.9524 11.0953ZM5.04763 12.2381C5.04763 11.1861 5.90042 10.3334 6.9524 10.3334C8.00437 10.3334 8.85717 11.1861 8.85717 12.2381C8.85717 13.2901 8.00437 14.1429 6.9524 14.1429C5.90042 14.1429 5.04763 13.2901 5.04763 12.2381Z" fill="#4F46E5"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.79727 5H11.649L14.3778 7.93489L18 9.07114V12.6191H15.6762C15.7076 12.4973 15.7143 12.3697 15.7143 12.2381C15.7143 12.1066 15.7076 11.9789 15.6762 11.8572H17.2381V9.63065L14.106 8.64814L8.22007 8.54797H2.76191V11.2404L4.64101 11.8572H5.08573C5.05439 11.9789 5.04763 12.1066 5.04763 12.2381C5.04763 12.3697 5.05439 12.4973 5.08573 12.6191L4.51917 12.6191L2 11.7922V8.01761L4.79727 5ZM13.2791 7.87205L11.3171 5.76191H8.60428V7.79249L13.2791 7.87205ZM7.84237 7.78607V5.76191H5.1299L3.25354 7.78607H7.84237Z" fill="#4F46E5"/>
                            <path d="M11.9429 11.8572H8.81906C8.8504 11.9789 8.85717 12.1066 8.85717 12.2381C8.85717 12.3697 8.8504 12.4973 8.81906 12.6191H11.9429C11.9116 12.4973 11.9048 12.3697 11.9048 12.2381C11.9048 12.1066 11.9116 11.9789 11.9429 11.8572Z" fill="#4F46E5"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.8096 11.0953C13.1784 11.0953 12.6667 11.6069 12.6667 12.2381C12.6667 12.8693 13.1784 13.381 13.8096 13.381C14.4407 13.381 14.9524 12.8693 14.9524 12.2381C14.9524 11.6069 14.4407 11.0953 13.8096 11.0953ZM11.9048 12.2381C11.9048 11.1861 12.7576 10.3334 13.8096 10.3334C14.8615 10.3334 15.7143 11.1861 15.7143 12.2381C15.7143 13.2901 14.8615 14.1429 13.8096 14.1429C12.7576 14.1429 11.9048 13.2901 11.9048 12.2381Z" fill="#4F46E5"/>
                            <path d="M5.04763 12.2381C5.04763 11.1861 5.90042 10.3334 6.9524 10.3334C8.00437 10.3334 8.85717 11.1861 8.85717 12.2381M5.04763 12.2381C5.04763 13.2901 5.90042 14.1429 6.9524 14.1429C8.00437 14.1429 8.85717 13.2901 8.85717 12.2381M5.04763 12.2381C5.04763 12.1066 5.05439 11.9789 5.08573 11.8572H4.64101L2.76191 11.2404V8.54797H8.22007L14.106 8.64814L17.2381 9.63065V11.8572H15.6762C15.7076 11.9789 15.7143 12.1066 15.7143 12.2381M5.04763 12.2381C5.04763 12.3697 5.05439 12.4973 5.08573 12.6191L4.51917 12.6191L2 11.7922V8.01761L4.79727 5H11.649L14.3778 7.93489L18 9.07114V12.6191H15.6762C15.7076 12.4973 15.7143 12.3697 15.7143 12.2381M8.85717 12.2381C8.85717 12.1066 8.8504 11.9789 8.81906 11.8572H11.9429C11.9116 11.9789 11.9048 12.1066 11.9048 12.2381M8.85717 12.2381C8.85717 12.3697 8.8504 12.4973 8.81906 12.6191H11.9429C11.9116 12.4973 11.9048 12.3697 11.9048 12.2381M15.7143 12.2381C15.7143 11.1861 14.8615 10.3334 13.8096 10.3334C12.7576 10.3334 11.9048 11.1861 11.9048 12.2381M15.7143 12.2381C15.7143 13.2901 14.8615 14.1429 13.8096 14.1429C12.7576 14.1429 11.9048 13.2901 11.9048 12.2381M5.80954 12.2381C5.80954 11.6069 6.32121 11.0953 6.9524 11.0953C7.58358 11.0953 8.09526 11.6069 8.09526 12.2381C8.09526 12.8693 7.58358 13.381 6.9524 13.381C6.32121 13.381 5.80954 12.8693 5.80954 12.2381ZM11.3171 5.76191L13.2791 7.87205L8.60428 7.79249V5.76191H11.3171ZM7.84237 5.76191V7.78607H3.25354L5.1299 5.76191H7.84237ZM12.6667 12.2381C12.6667 11.6069 13.1784 11.0953 13.8096 11.0953C14.4407 11.0953 14.9524 11.6069 14.9524 12.2381C14.9524 12.8693 14.4407 13.381 13.8096 13.381C13.1784 13.381 12.6667 12.8693 12.6667 12.2381Z" stroke="#4F46E5" strokeWidth="0.2"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Parking</span>
                        <span className="flex-1 text-sm text-gray-500">{props.listing.details.parking || 2} spaces</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="pt-4 pl-4 pr-4 pb-4">
                <h2 className="text-lg leading-6 font-medium text-gray-900">Investment Details</h2>
                <div className="mt-2 border-t-4 border-indigo-600 pt-4">
                <p className="text-sm text-gray-600">
                    Investment details outline how the deal is structured and what returns should be expected from participation
                </p>
                </div>
                </div>
                <div className="px-6">
                    <ul className="mt-2 mb-10 divide-y">
                        <li className="flex space-x-3 pb-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 4H3.5C3.22344 4 3 4.22344 3 4.5V14.5C3 14.7766 3.22344 15 3.5 15H16.5C16.7766 15 17 14.7766 17 14.5V4.5C17 4.22344 16.7766 4 16.5 4ZM4 5H16V7H4V5ZM16 14H4V8.375H16V14ZM12.1719 12.875H14.75C14.8188 12.875 14.875 12.8188 14.875 12.75V12C14.875 11.9313 14.8188 11.875 14.75 11.875H12.1719C12.1031 11.875 12.0469 11.9313 12.0469 12V12.75C12.0469 12.8188 12.1031 12.875 12.1719 12.875Z" fill="#4F46E5"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Investment</span>
                        <span className="flex-1 text-sm text-gray-500">{props.listing.details.investment || "Equity"}</span>
                        </li>
                        <li className="flex space-x-3 py-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4V15.5714H19V4H1ZM2 5H18V14.5H2V5ZM3.57143 6.57143V7.5H10V6.57143H3.57143ZM13.8571 6.57143V7.25479C13.1339 7.375 12.5714 7.98764 12.5714 8.74107C12.5714 9.22579 12.8401 9.67 13.2747 9.886L15.1429 10.8304C15.1445 10.8625 15.1394 10.8945 15.1279 10.9245C15.1164 10.9545 15.0987 10.9818 15.0759 11.0045C15.0532 11.0272 15.026 11.0449 14.996 11.0565C14.966 11.068 14.9339 11.0731 14.9018 11.0714H14.0982C14.0661 11.0731 14.034 11.068 14.004 11.0565C13.974 11.0449 13.9468 11.0272 13.9241 11.0045C13.9013 10.9818 13.8836 10.9545 13.8721 10.9245C13.8606 10.8945 13.8555 10.8625 13.8571 10.8304V10.4286H12.5714V10.8304C12.5714 11.5838 13.1339 12.1964 13.8571 12.3173V13H15.1429V12.3166C15.8661 12.1964 16.4286 11.5838 16.4286 10.8304C16.4286 10.3456 16.1599 9.904 15.7253 9.68543L13.8571 8.74107C13.8571 8.59771 13.9549 8.5 14.0982 8.5H14.9018C15.0451 8.5 15.1429 8.59771 15.1429 8.74107V9.14286H16.4286V8.74107C16.4286 7.98764 15.8661 7.375 15.1429 7.25414V6.57143H13.8571ZM3.57143 8.5V9.5H8.07143V8.5H3.57143ZM5.17857 10.7143C4.78964 10.7143 4.51579 10.9354 4.3345 11.136C4.1545 11.3372 4.02079 11.5603 3.91279 11.7994C3.69679 12.2784 3.57143 12.5101 3.57143 13H4.85714C4.85714 12.7943 4.95743 12.3469 5.09821 12.0357C5.13871 11.9457 5.17857 11.9149 5.21907 11.8551C5.26664 11.92 5.30136 11.9631 5.35921 12.0556C5.45243 12.2067 5.55529 12.3874 5.68064 12.5584C5.80664 12.7287 5.95964 13.0103 6.44436 13.0199C6.82621 13.0276 6.94386 12.8894 7.06729 12.7994C7.18943 12.7088 7.27557 12.6233 7.36814 12.5378C7.43114 12.4799 7.48129 12.4375 7.52886 12.3976C7.54686 12.4227 7.61693 12.4651 7.97114 12.6181C8.40057 12.8065 9.05114 13 10 13V12C9.20929 12 8.79721 11.8714 8.49314 11.739C8.18971 11.6059 7.95829 11.3571 7.42857 11.3571C7.04157 11.3571 6.94386 11.5076 6.82557 11.5982C6.72014 11.6786 6.6475 11.7641 6.56457 11.8393C6.52729 11.7789 6.50929 11.7493 6.46429 11.6786C6.34617 11.4752 6.20463 11.2865 6.04257 11.1161C5.85614 10.9277 5.563 10.7143 5.17857 10.7143Z" fill="#4F46E5"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Total Capitalization</span>
                        <span className="flex-1 text-sm text-gray-500">

                        <NumberFormat
                            value={props.listing.details.totalCapitalization || 75500}
                            displayType={'text'}
                            thousandSeparator={true}
                        />
                        <div className="h-4 inline-flex px-1">
                            <svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#D1D5DB"/>
                            </svg>

                        </div></span>
                        </li>
                        <li className="flex space-x-3 py-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.31251 9.02389H10.0833C10.2712 9.02389 10.4514 8.94926 10.5842 8.81642C10.717 8.68358 10.7917 8.50342 10.7917 8.31555C10.7917 8.12769 10.717 7.94753 10.5842 7.81469C10.4514 7.68185 10.2712 7.60722 10.0833 7.60722H9.37501V7.25305C9.37501 7.06519 9.30038 6.88503 9.16754 6.75219C9.0347 6.61935 8.85453 6.54472 8.66667 6.54472C8.47881 6.54472 8.29864 6.61935 8.1658 6.75219C8.03297 6.88503 7.95834 7.06519 7.95834 7.25305V7.64264C7.52797 7.73003 7.14543 7.97421 6.88497 8.32778C6.62451 8.68136 6.50472 9.1191 6.54886 9.55602C6.59299 9.99295 6.7979 10.3979 7.1238 10.6922C7.44971 10.9866 7.87336 11.1493 8.31251 11.1489H9.02084C9.11477 11.1489 9.20485 11.1862 9.27127 11.2526C9.33769 11.319 9.37501 11.4091 9.37501 11.503C9.37501 11.597 9.33769 11.6871 9.27127 11.7535C9.20485 11.8199 9.11477 11.8572 9.02084 11.8572H7.25001C7.06214 11.8572 6.88198 11.9318 6.74914 12.0647C6.6163 12.1975 6.54167 12.3777 6.54167 12.5655C6.54167 12.7534 6.6163 12.9336 6.74914 13.0664C6.88198 13.1993 7.06214 13.2739 7.25001 13.2739H7.95834V13.628C7.95834 13.8159 8.03297 13.9961 8.1658 14.1289C8.29864 14.2618 8.47881 14.3364 8.66667 14.3364C8.85453 14.3364 9.0347 14.2618 9.16754 14.1289C9.30038 13.9961 9.37501 13.8159 9.37501 13.628V13.2385C9.80537 13.1511 10.1879 12.9069 10.4484 12.5533C10.7088 12.1997 10.8286 11.762 10.7845 11.3251C10.7404 10.8882 10.5354 10.4832 10.2095 10.1889C9.88364 9.89453 9.45999 9.73178 9.02084 9.73222H8.31251C8.21858 9.73222 8.12849 9.69491 8.06207 9.62849C7.99565 9.56207 7.95834 9.47198 7.95834 9.37805C7.95834 9.28412 7.99565 9.19404 8.06207 9.12762C8.12849 9.0612 8.21858 9.02389 8.31251 9.02389ZM16.4583 10.0864H14.3333V3.89816C14.3338 3.77334 14.3013 3.65061 14.2391 3.5424C14.177 3.43418 14.0873 3.34432 13.9792 3.28191C13.8715 3.21974 13.7493 3.18701 13.625 3.18701C13.5007 3.18701 13.3785 3.21974 13.2708 3.28191L11.1458 4.50024L9.02084 3.28191C8.91316 3.21974 8.79101 3.18701 8.66667 3.18701C8.54233 3.18701 8.42019 3.21974 8.31251 3.28191L6.18751 4.50024L4.06251 3.28191C3.95483 3.21974 3.83268 3.18701 3.70834 3.18701C3.584 3.18701 3.46185 3.21974 3.35417 3.28191C3.24608 3.34432 3.15639 3.43418 3.0942 3.5424C3.032 3.65061 2.99951 3.77334 3.00001 3.89816L3.00001 15.0447C3.00001 15.6083 3.22389 16.1488 3.6224 16.5473C4.02092 16.9458 4.43641 17 5 17L15.1453 16.8963C15.7089 16.8963 16.1458 16.9458 16.5443 16.5473C16.9428 16.1488 17.1667 15.6083 17.1667 15.0447V10.7947C17.1667 10.6069 17.092 10.4267 16.9592 10.2939C16.8264 10.161 16.6462 10.0864 16.4583 10.0864ZM4.89721 15.8187C4.70934 15.8187 4.5 15.5075 4.5 15.5075C4.5 15.5075 4.18887 15.2982 4.18887 15.1103V4.57222L5.83334 5.50024C5.94266 5.55734 6.06417 5.58716 6.18751 5.58716C6.31084 5.58716 6.43235 5.55734 6.54167 5.50024L8.66667 4.2848L10.7917 5.50024C10.901 5.55734 11.0225 5.58716 11.1458 5.58716C11.2692 5.58716 11.3907 5.55734 11.5 5.50024L13.0667 4.57222L13 15.0447C13.0019 15.2864 13.0814 15.5915 13.1639 15.8187H4.89721ZM16 15.0447C16 15.2326 15.9254 15.4127 15.7925 15.5456C15.4023 15.753 15.2295 15.753 15.0417 15.753C14.8538 15.753 14.6736 15.6784 14.5408 15.5456C14.408 15.4127 14.3333 15.2326 14.3333 15.0447V11.2584L16 11.2526V15.0447Z" fill="#4F46E5"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Net Operating Income</span>
                        <span className="flex-1 text-sm text-gray-500">
                        <NumberFormat
                            value={props.listing.details.netOperatingIncome || 14500}
                            displayType={'text'}
                            thousandSeparator={true}
                        />
                        <div className="h-4 inline-flex px-1"><svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#D1D5DB"/>
                        </svg>
                        </div>/yr</span>
                        </li>
                        <li className="flex space-x-3 py-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.66667 4.6665V4.1665H4.16667V4.6665H4.66667ZM15.3333 4.6665H15.8333V4.1665H15.3333V4.6665ZM6.31311 9.64628C6.11785 9.84155 6.11785 10.1581 6.31311 10.3534C6.50838 10.5487 6.82496 10.5487 7.02022 10.3534L6.31311 9.64628ZM8.66667 7.99984L9.02022 7.64628C8.82496 7.45102 8.50838 7.45102 8.31311 7.64628L8.66667 7.99984ZM10.6667 9.99984L10.3131 10.3534C10.5084 10.5487 10.825 10.5487 11.0202 10.3534L10.6667 9.99984ZM13.6869 7.68672C13.8821 7.49146 13.8821 7.17488 13.6869 6.97962C13.4916 6.78435 13.175 6.78435 12.9798 6.97962L13.6869 7.68672ZM6.97978 15.6463C6.78452 15.8415 6.78452 16.1581 6.97978 16.3534C7.17504 16.5487 7.49162 16.5487 7.68689 16.3534L6.97978 15.6463ZM10 13.3332L10.3536 12.9796C10.1583 12.7844 9.84171 12.7844 9.64645 12.9796L10 13.3332ZM12.3131 16.3534C12.5084 16.5487 12.825 16.5487 13.0202 16.3534C13.2155 16.1581 13.2155 15.8415 13.0202 15.6463L12.3131 16.3534ZM4 4.1665C3.72386 4.1665 3.5 4.39036 3.5 4.6665C3.5 4.94265 3.72386 5.1665 4 5.1665V4.1665ZM16 5.1665C16.2761 5.1665 16.5 4.94265 16.5 4.6665C16.5 4.39036 16.2761 4.1665 16 4.1665V5.1665ZM4.66667 5.1665H15.3333V4.1665H4.66667V5.1665ZM14.8333 4.6665V12.6665H15.8333V4.6665H14.8333ZM14.6667 12.8332H5.33333V13.8332H14.6667V12.8332ZM5.16667 12.6665V4.6665H4.16667V12.6665H5.16667ZM5.33333 12.8332C5.24129 12.8332 5.16667 12.7586 5.16667 12.6665H4.16667C4.16667 13.3108 4.689 13.8332 5.33333 13.8332V12.8332ZM14.8333 12.6665C14.8333 12.7586 14.7587 12.8332 14.6667 12.8332V13.8332C15.311 13.8332 15.8333 13.3108 15.8333 12.6665H14.8333ZM7.02022 10.3534L9.02022 8.35339L8.31311 7.64628L6.31311 9.64628L7.02022 10.3534ZM8.31311 8.35339L10.3131 10.3534L11.0202 9.64628L9.02022 7.64628L8.31311 8.35339ZM11.0202 10.3534L13.6869 7.68672L12.9798 6.97962L10.3131 9.64628L11.0202 10.3534ZM7.68689 16.3534L10.3536 13.6867L9.64645 12.9796L6.97978 15.6463L7.68689 16.3534ZM9.64645 13.6867L12.3131 16.3534L13.0202 15.6463L10.3536 12.9796L9.64645 13.6867ZM4 5.1665H16V4.1665H4V5.1665Z" fill="#4F46E5"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Estimated Appreciation</span>
                        <span className="flex-1 text-sm text-gray-500">{props.listing.details.estimatedAppreciation*100 || 6}%</span>
                        </li>
                        <li className="flex space-x-3 pt-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 15.3332H16.6666V13.9998C16.6666 12.8953 15.7712 11.9998 14.6666 11.9998C14.0295 11.9998 13.462 12.2977 13.0958 12.7618M13.3333 15.3332H6.66659M13.3333 15.3332V13.9998C13.3333 13.5623 13.249 13.1445 13.0958 12.7618M6.66659 15.3332H3.33325V13.9998C3.33325 12.8953 4.22868 11.9998 5.33325 11.9998C5.97032 11.9998 6.53782 12.2977 6.90408 12.7618M6.66659 15.3332V13.9998C6.66659 13.5623 6.75087 13.1445 6.90408 12.7618M6.90408 12.7618C7.39559 11.5339 8.59646 10.6665 9.99992 10.6665C11.4034 10.6665 12.6043 11.5339 13.0958 12.7618M11.9999 6.6665C11.9999 7.77107 11.1045 8.6665 9.99992 8.6665C8.89535 8.6665 7.99992 7.77107 7.99992 6.6665C7.99992 5.56193 8.89535 4.6665 9.99992 4.6665C11.1045 4.6665 11.9999 5.56193 11.9999 6.6665ZM15.9999 8.6665C15.9999 9.40288 15.403 9.99984 14.6666 9.99984C13.9302 9.99984 13.3333 9.40288 13.3333 8.6665C13.3333 7.93012 13.9302 7.33317 14.6666 7.33317C15.403 7.33317 15.9999 7.93012 15.9999 8.6665ZM6.66659 8.6665C6.66659 9.40288 6.06963 9.99984 5.33325 9.99984C4.59687 9.99984 3.99992 9.40288 3.99992 8.6665C3.99992 7.93012 4.59687 7.33317 5.33325 7.33317C6.06963 7.33317 6.66659 7.93012 6.66659 8.6665Z" stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Management Team</span>
                        <span className="flex-1 text-sm text-gray-500">{props.listing.details.managementTeam || "Ricky Brothers"}</span>
                        </li>

                    </ul>
                </div>
            </div>
            <div>
                <div className="pt-4 pl-4 pr-4 pb-4">
                <h2 className="text-lg leading-6 font-medium text-gray-900">Activity Details</h2>
                <div className="mt-2 border-t-4 border-indigo-600 pt-4">
                <p className="text-sm text-gray-600">
                    A high level overview of the trade activity of a specific asset. These details are updated in real time.
                </p>
                </div>
                </div>
                <div className="px-6">
                    <ul className="mt-2 mb-10 divide-y">
                        <li className="flex space-x-3 pb-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 14.6667V10.6667C8 9.93029 7.40305 9.33333 6.66667 9.33333H5.33333C4.59695 9.33333 4 9.93029 4 10.6667V14.6667C4 15.403 4.59695 16 5.33333 16H6.66667C7.40305 16 8 15.403 8 14.6667ZM8 14.6667V8C8 7.26362 8.59695 6.66667 9.33333 6.66667H10.6667C11.403 6.66667 12 7.26362 12 8V14.6667M8 14.6667C8 15.403 8.59695 16 9.33333 16H10.6667C11.403 16 12 15.403 12 14.6667M12 14.6667V5.33333C12 4.59695 12.597 4 13.3333 4H14.6667C15.403 4 16 4.59695 16 5.33333V14.6667C16 15.403 15.403 16 14.6667 16H13.3333C12.597 16 12 15.403 12 14.6667Z" stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Total Shares</span>
                        <span className="flex-1 text-sm text-gray-500">
                        <NumberFormat
                            value={props.listing.seriesCount || 980}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={' shares'}
                        /></span>
                        </li>
                        <li className="flex space-x-3 py-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33333 4.03662C6.33337 4.36825 4 6.91163 4 10C4 13.3137 6.68629 16 10 16C13.0884 16 15.6318 13.6666 15.9634 10.6667H9.33333V4.03662Z" stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.6585 8H12V4.34153C13.7048 4.94409 15.056 6.29523 15.6585 8Z" stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Demand</span>
                        <span className="flex-1 text-sm text-gray-500">60% Buy, 40% Sell</span>
                        </li>
                        <li className="flex space-x-3 py-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13.3333H15.3333L14.3967 12.3967C14.1427 12.1427 14 11.7982 14 11.439V9.33334C14 7.59171 12.8869 6.11006 11.3333 5.56094V5.33333C11.3333 4.59695 10.7363 4 9.99996 4C9.26358 4 8.66663 4.59695 8.66663 5.33333V5.56094C7.11304 6.11006 5.99996 7.59171 5.99996 9.33334V11.439C5.99996 11.7982 5.85726 12.1427 5.60325 12.3967L4.66663 13.3333H7.99996M12 13.3333V14C12 15.1046 11.1045 16 9.99996 16C8.89539 16 7.99996 15.1046 7.99996 14V13.3333M12 13.3333H7.99996" stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Lowest Ask</span>
                        <span className="flex-1 text-sm text-gray-500">200 @ 
                        5<div className="h-4 inline-flex px-1"><svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#D1D5DB"/>
                        </svg>

                        </div>/share</span>
                        </li>
                        <li className="flex space-x-3 py-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66667 6.66667H6.67333M6.66667 4H10C10.3412 3.99999 10.6824 4.13016 10.9428 4.39052L15.6095 9.05719C16.1302 9.57789 16.1302 10.4221 15.6095 10.9428L10.9428 15.6095C10.4221 16.1302 9.57789 16.1302 9.05719 15.6095L4.39052 10.9428C4.13018 10.6825 4 10.3412 4 10V6.66667C4 5.19391 5.19391 4 6.66667 4Z" stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Last Sale</span>
                        <span className="flex-1 text-sm text-gray-500">10,000 @ 
                        5<div className="h-4 inline-flex px-1"><svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#D1D5DB"/>
                        </svg>

                        </div>/share</span>
                        </li>
                        <li className="flex space-x-3 py-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.33333 4V6.66667M4 5.33333H6.66667M6 13.3333V16M4.66667 14.6667H7.33333M10.6667 4L12.1905 8.57143L16 10L12.1905 11.4286L10.6667 16L9.14286 11.4286L5.33333 10L9.14286 8.57143L10.6667 4Z" stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Week High</span>
                        <span className="flex-1 text-sm text-gray-500">
                        7.30<div className="h-4 inline-flex px-1"><svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#D1D5DB"/>
                        </svg>

                        </div>/share</span>
                        </li>
                        <li className="flex space-x-3 py-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.69512 4.88902C5.81801 4.64173 5.71717 4.34164 5.46988 4.21875C5.22259 4.09585 4.92249 4.1967 4.7996 4.44399L5.69512 4.88902ZM4.7996 15.5557C4.92249 15.803 5.22259 15.9038 5.46988 15.7809C5.71717 15.658 5.81801 15.3579 5.69512 15.1107L4.7996 15.5557ZM14.2189 15.1107C14.0961 15.3579 14.1969 15.658 14.4442 15.7809C14.6915 15.9038 14.9916 15.803 15.1145 15.5557L14.2189 15.1107ZM15.1145 4.44399C14.9916 4.1967 14.6915 4.09585 14.4442 4.21875C14.1969 4.34164 14.0961 4.64173 14.2189 4.88902L15.1145 4.44399ZM8 7.49984C7.72386 7.49984 7.5 7.72369 7.5 7.99984C7.5 8.27598 7.72386 8.49984 8 8.49984V7.49984ZM9.47148 8.48336L8.99072 8.62072L9.47148 8.48336ZM10.5285 12.183L10.0478 12.3203L10.5285 12.183ZM12 13.1665C12.2761 13.1665 12.5 12.9426 12.5 12.6665C12.5 12.3904 12.2761 12.1665 12 12.1665V13.1665ZM12.6667 8.49984C12.9428 8.49984 13.1667 8.27598 13.1667 7.99984C13.1667 7.72369 12.9428 7.49984 12.6667 7.49984V8.49984ZM11.6009 8.46545L11.9805 8.79084L11.6009 8.46545ZM8.3991 12.2009L8.77872 12.5263H8.77872L8.3991 12.2009ZM7.33333 12.1665C7.05719 12.1665 6.83333 12.3904 6.83333 12.6665C6.83333 12.9426 7.05719 13.1665 7.33333 13.1665V12.1665ZM4.5 9.99984C4.5 8.16297 4.93029 6.42804 5.69512 4.88902L4.7996 4.44399C3.96759 6.11819 3.5 8.00513 3.5 9.99984H4.5ZM5.69512 15.1107C4.93029 13.5716 4.5 11.8367 4.5 9.99984H3.5C3.5 11.9945 3.96759 13.8815 4.7996 15.5557L5.69512 15.1107ZM15.4141 9.99984C15.4141 11.8367 14.9838 13.5716 14.2189 15.1107L15.1145 15.5557C15.9465 13.8815 16.4141 11.9945 16.4141 9.99984H15.4141ZM14.2189 4.88902C14.9838 6.42804 15.4141 8.16297 15.4141 9.99984H16.4141C16.4141 8.00513 15.9465 6.11819 15.1145 4.44399L14.2189 4.88902ZM8 8.49984H8.83047V7.49984H8V8.49984ZM8.99072 8.62072L10.0478 12.3203L11.0093 12.0456L9.95224 8.346L8.99072 8.62072ZM11.1695 13.1665H12V12.1665H11.1695V13.1665ZM10.0478 12.3203C10.1909 12.8212 10.6486 13.1665 11.1695 13.1665V12.1665C11.0951 12.1665 11.0297 12.1172 11.0093 12.0456L10.0478 12.3203ZM8.83047 8.49984C8.90488 8.49984 8.97028 8.54917 8.99072 8.62072L9.95224 8.346C9.80914 7.84514 9.35136 7.49984 8.83047 7.49984V8.49984ZM12.6667 7.49984H12.6132V8.49984H12.6667V7.49984ZM11.2213 8.14005L8.01947 11.8755L8.77872 12.5263L11.9805 8.79084L11.2213 8.14005ZM7.38675 12.1665H7.33333V13.1665H7.38675V12.1665ZM8.01947 11.8755C7.86115 12.0602 7.63002 12.1665 7.38675 12.1665V13.1665C7.92195 13.1665 8.43042 12.9326 8.77872 12.5263L8.01947 11.8755ZM12.6132 7.49984C12.0781 7.49984 11.5696 7.7337 11.2213 8.14005L11.9805 8.79084C12.1389 8.60614 12.37 8.49984 12.6132 8.49984V7.49984Z" fill="#4F46E5"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Trading Range</span>
                        <span className="flex-1 text-sm text-gray-500">
                            4.23<div className="h-4 inline-flex px-1"><svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#D1D5DB"/>
                        </svg>

                        </div> - 7.98<div className="h-4 inline-flex px-1"><svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#D1D5DB"/>
                        </svg>

                        </div></span>
                        </li>
                        <li className="flex space-x-3 pt-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6667 6.6665H16M16 6.6665V11.9998M16 6.6665L10.6667 11.9998L8 9.33317L4 13.3332" stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="flex-1 text-sm text-gray-500">Volatility</span>
                        <span className="flex-1 text-sm text-gray-500">3%</span>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
)}
