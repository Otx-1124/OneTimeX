import React from 'react'

const UserBtnControll = () => {
  const name = "Sandeep Pandit"
  return (
    <div className="font-['inter','sans-serif'] p-4 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800">Control Your Account <span className="text-blue-600">{name.toUpperCase()}</span></h1>
        <div className="mt-4 grid grid-cols-3 gap-4">
            <button className="px-4 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-800 transition duration-300">Your Cart Items : 0</button>
            <button className="px-4 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-800 transition duration-300">Your Total Funds: $0.00</button>
            <button className="px-4 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-800 transition duration-300">Total Orders: 0</button>
        </div>
    </div>
  )
}

export default UserBtnControll