import React from 'react'
import { Link } from 'react-router-dom'
import ig from '../assets/2.jpeg'

export const Login = () => {
  return (
    <div class="flex items-center min-h-screen bg-[#fcfcfc]">
    <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div class="flex flex-col md:flex-row">
            <div class="h-32 md:h-auto md:w-1/2">
                <img class="object-cover w-full h-full" src={ig}/>
            </div>
            <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div class="w-full">
                    <div class="flex justify-center">
                      <div class="mb-2 w-20 h-20 bg-red-200">
    
                      </div>
                    </div>
                    <h1 class="mb-10 text-2xl font-bold text-center text-gray-700">
                      Xrispy
                    </h1>
                    <div>
                        <input type="email"
                            class="mb-4 w-full px-4 py-2 text-sm border rounded-md focus:border-[#E1F19B] focus:outline-none focus:ring-1 focus:ring-[#E1F19B]"
                            placeholder="Email" />
                    </div>
                    <div>
                        <input
                            class="w-full px-4 py-2 text-sm border rounded-md focus:border-[#E1F19B] focus:outline-none focus:ring-1 focus:ring-[#E1F19B]"
                            placeholder="password" type="password" />
                    </div>
                    <p class="mt-4">
                    <Link to="/reset">
                        <a class="float-right text-sm hover:underline mb-6" href="#">
                            Forgot your password?
                        </a>
                        </Link>
                    </p>

              <Link to="/Vendor">
                    <button
                        class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center transition-colors duration-150 bg-[#C4E538] border border-transparent rounded-lg active:bg-[#C4E538]-600 hover:bg-[#E1F19B] focus:outline-none focus:shadow-outline-blue"
                        href="#">
                        Log in
                    </button>
                    </Link>


                    <hr class="my-8" />
                </div>
            </div>
        </div>
    </div>
</div>
  
  )
}

export default Login;