import React, { useEffect, useState } from 'react'
import UserOrder from '../PropComponent/UserOrder'

const Processing = () => {
  const [orders , setOrders] = useState([])
  useEffect(() => {
    const processingOrders = JSON.parse(localStorage.getItem("confirmed-Orders")) || [];
    setOrders(processingOrders); 
  }, []);
  return (
    <div><UserOrder confirmOrder = {orders} orderStatus="Processing" /></div>
  )
}

export default Processing