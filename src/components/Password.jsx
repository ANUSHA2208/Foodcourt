import React from 'react'
import { Link } from 'react-router-dom'
import ig from '../assets/2.jpeg'

export const Password = () => {

  return (
    <div>
     <div class="flex items-center min-h-screen bg-[#fcfcfc]">
    <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div class="flex flex-col md:flex-row">
            <div class="h-32 md:h-auto md:w-1/2">
                <img class="object-cover w-full h-full" src={ig}/>
            </div>
            <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div class="w-full">
                    <h1 class="mb-1 text-2xl font-bold text-center text-gray-700">
                    Forgot Password ?
                    </h1>
                    <h1 class="mb-10 text-center text-gray-700">
                    No worries,we'll send you reset instructions.
                    </h1>
                    <div>
                        <input type="email"
                            class="mb-4 w-full px-4 py-2 text-sm border rounded-md focus:border-[#E1F19B] focus:outline-none focus:ring-1 focus:ring-[#E1F19B]"
                            placeholder="Email" />
                    </div>
                    <Link to="/change-password">
                    <button
                        class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center transition-colors duration-150 bg-[#C4E538] border border-transparent rounded-lg active:bg-[#C4E538]-600 hover:bg-[#E1F19B] focus:outline-none">
                        Reset Password
                    </button>
                    </Link>
                    <p class="mt-4">
                    <Link to='/'>
                        <p class="text-sm hover:underline mb-6">
                        Back to Log in ?
                        </p>
                    </Link>
                    </p>


                   


                    <hr class="my-8" />
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Password;