import React, { use, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  

  return (
    <div>
        <section className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-10 w-full mt-10 fixed">
        <div className="bg-white p-6 md:p-8 rounded-2xl relative shadow-lg w-full max-w-sm text-center">

            <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Verify Your Email   
            </h2>   
            <p className="text-gray-600">A verification link has been sent to your email address. Please check your inbox and click on the link to verify your account.</p>
        </div>  
        </section>
    </div>
  )
}

export default VerifyEmail