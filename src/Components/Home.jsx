import React from 'react'
import Banner from '../HomePages/Banner'
import Procedure from '../HomePages/Procedure'
import UnlistedListed from '../HomePages/UnlistedListed'
import Test from '../Tests/Test'
import DematPopup from '../Tests/PopupTest'
import WhyChooseOnetimex from '../HomePages/WhyChooseOnetimeX'
import ServicesOfOnetimeX from '../HomePages/ServicesOfOnetimeX'
import InvestmentSection from '../HomePages/InvestmentCollection'
import NiftyLive from '../Tests/Nifty50'
import StockLive from '../Tests/Nifty50'
import FinancialServices from '../HomePages/FinancialServices'
import Videos from '../HomePages/Videos'
import InsightsVideo from '../HomePages/Videos'

const Home = () => {
  return (
    <div className='mt-10'>
    
      <Banner/>
      <Procedure/>
      <UnlistedListed/>
      <WhyChooseOnetimex/>
      <ServicesOfOnetimeX/>
      <InvestmentSection/>
      <FinancialServices/>
      <InsightsVideo/>
    </div>
    
  )
}

export default Home