import React from 'react'
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
};

const ServicesOfOnetimeX = () => {

    let data = [
  {
    "title": "Day Trader",
    "image": "/day.jpg",
    "buttonText": "Start Now"
  },
  {
    "title": "Momentum Trader",
    "image": "/momentum.jpg",
    "buttonText": "Start Now"
  },
  {
    "title": "Option Trader",
    "image": "/option.jpg",
    "buttonText": "Start Now"
  },
  {
    "title": "Swing Trader",
    "image": "/swing.jpg",
    "buttonText": "Start Now"
  },
  {
    "title": "Trend Trader",
    "image": "/trend.jpg",
    "buttonText": "Start Now"
  },
  {
    "title": "Buy and Hold Investor",
    "image": "/invest.jpg",
    "buttonText": "Start Now"
  }
]

  return (
     <div className='px-10 py-3 bg-gradient-to-br from-blue-50 to-green-50 w-full'>
      <h1 className='font-bold text-3xl text-gray-700 text-center mt-3 mb-5'>
        Trader Profiles We Serve
      </h1>
      <motion.div
        className='w-full px-10 grid grid-cols-6 gap-5'
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className='flex flex-col gap-1 justify-between h-38'
            variants={itemVariants}
          >
            <img
              className='w-full h-4/5 object-cover rounded-lg'
              src={item.image}
              alt="logo"
            />
            <p className='font-bold text-gray-700 text-center'>{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ServicesOfOnetimeX