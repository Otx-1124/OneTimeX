import React, { useState } from 'react'

const Test = () => {
    let data = 
    [
  {
    "name": "Unlisted Co. A",
    "logo": "https://cdn.freelogovectors.net/wp-content/uploads/2023/11/boat-logo-freelogovectors.net_.png",
    "alt": "boat-logo",
    "price": "₹1,733.00/-"
  },
  {
    "name": "Unlisted Co. B",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/2560px-Zepto_Logo.svg.png",
    "alt": "Zepto_Logo",
    "price": "₹2,750.00/-"
  },
  {
    "name": "Unlisted Co. B",
    "logo": "https://brandlogos.net/wp-content/uploads/2023/09/swiggy-logo_brandlogos.net_fplmb-512x150.png",
    "alt": "swiggy-logo",
    "price": "₹361.00/-"
  },
  {
    "name": "Unlisted Co. B",
    "logo": "https://upload.wikimedia.org/wikipedia/en/8/87/FirstCry_logo.png",
    "alt": "FirstCry_logo",
    "price": "₹410.00/-"
  },
  {
    "name": "Unlisted Co. B",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/PharmEasy_logo.png/800px-PharmEasy_logo.png",
    "alt": "PharmEasy_logo",
    "price": "₹9.00/-"
  },
  {
    "name": "Unlisted Co. B",
    "logo": "https://cdn.worldvectorlogo.com/logos/digit-insurance.svg",
    "alt": "digit-insurance-logo",
    "price": "₹298.60/-"
  },
  {
    "name": "Unlisted Co. B",
    "logo": "https://financesaathi.com/adm/uploads/ipo/_1223_63dbfb73b7ed4f3efdf76a7d_yq4PqPLfwDuMjZJ4fP8AAM3CiffSttXiHlBftRekJiE.png",
    "alt": "ola-electric-logo",
    "price": "₹64.62/-"
  },
  {
    "name": "Unlisted Co. B",
    "logo": "https://cdn.worldvectorlogo.com/logos/mobikwik-logo.svg",
    "alt": "mobikwik-logo",
    "price": "₹350.10/-"
  },
  {
    "name": "Unlisted Co. B",
    "logo": "listed img//Paperboat+Packaging_Packaging_Elephant+Design+13-removebg-preview.png",
    "alt": "Paperboat-logo",
    "price": "₹1,675.00/-"
  },
  {
    "name": "Unlisted Co. B",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/33/Meesho_logo.png",
    "alt": "Meesho_logo",
    "price": "₹2,408.00/-"
  }
]

    let data2 = [
  {
    "name": "Listed Co. A",
    "logo": "https://1000logos.net/wp-content/uploads/2021/09/Reliance-Industries-Limited-Logo.png",
    "alt": "Reliance-Industries-Limited-Logo",
    "price": "₹1,229.30/-"
  },
  {
    "name": "Listed Co. B",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png",
    "alt": "Tata_Consultancy_Services_Logo",
    "price": "₹4,066.20/-"
  },
  {
    "name": "Listed Co. B",
    "logo": "https://seeklogo.com/images/H/hdfc-bank-logo-A0A2CDE793-seeklogo.com.png",
    "alt": "hdfc-bank-logo",
    "price": "₹1,629.70/-"
  },
  {
    "name": "Listed Co. B",
    "logo": "https://logolook.net/wp-content/uploads/2024/01/Infosys-Logo.png",
    "alt": "Infosys-Logo",
    "price": "₹1,822.00/-"
  },
  {
    "name": "Listed Co. B",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png",
    "alt": "ICICI_Bank_Logo",
    "price": "₹1,228.00/-"
  },
  {
    "name": "Listed Co. B",
    "logo": "https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo.png",
    "alt": "Zomato-Logo",
    "price": "₹206.15/-"
  },
  {
    "name": "Listed Co. B",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Persistent_Systems_Logo.svg/2560px-Persistent_Systems_Logo.svg.png",
    "alt": "Persistent_Systems_Logo",
    "price": "₹6,255.00/-"
  },
  {
    "name": "Listed Co. B",
    "logo": "Unlisted img//file-removebg-preview.png",
    "alt": "polycab-logo",
    "price": "₹4,500.00/-"
  },
  {
    "name": "Listed Co. B",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Coforge-Logo.png",
    "alt": "Coforge-Logo",
    "price": "₹5,000.00/-"
  },
  {
    "name": "Listed Co. B",
    "logo": "https://www.mepmiddleeast.com/cloud/2021/07/07/brand-logo.png",
    "alt": "voltas-logo",
    "price": "₹1,000.00/-"
  }
]


    const [currData , setCurrData] = useState([])
    
    let changeData = ()=>{
        setCurrData(data)
    }

    let overData = ()=>{
        setCurrData(data2)
    }



  return (
    <>
    <div className='flex gap-5 '>
        <button onClick={changeData} className='border border-red-400 ml-5 font-bold px-3 py-2 rounded-md'>Unlisted</button>
        <button onClick={overData} className='border border-red-400 ml-5 font-bold px-3 py-2 rounded-md'>Listed</button>
    </div>
    <div>
        {currData.map((item)=>{
            return(
                <h1>{item.name}</h1>
            )
        })}
    </div>
    </>
  )
}

export default Test