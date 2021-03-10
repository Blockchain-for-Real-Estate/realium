import React from 'react'
import { Link } from "react-router-dom"

export function StaticNavBar(props) {
    return (
        /*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
        <>
            <div>
                <div class="sm:hidden">
                    <label for="tabs" class="sr-only">Select a tab</label>
                    <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                    <option selected>Marketplace</option>
                    <option>Tokenization</option>
                    <option>Invest</option>
                    <option>Log In</option>
                    </select>
                </div>
                <div class="hidden sm:block">
                    <nav class="flex space-x-4" aria-label="Tabs">
                    {/* Current: "bg-gray-200 text-gray-800", Default: "text-gray-600 hover:text-gray-800" */}
                    <Link to="/marketplace" className="bg-gray-200 text-gray-800 px-3 py-2 font-medium text-sm rounded-md" aria-current="page">
                        Marketplace
                    </Link>
                    <Link to="/tokenization" className="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md">
                        Tokenization
                    </Link>
                    <Link to="/invest" className="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md">
                        Invest
                    </Link>
                    <Link to="/#" className="bg-purple-400 text-white font-bold hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md">
                        Log In
                    </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}