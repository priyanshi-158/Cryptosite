import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../images/icon2.png'
import home from '../images/home.svg'
import currency from '../images/currency.svg'
import news from '../images/news.svg'


const Navbar = () => {
  return (
    <div className='hidden fixed left-0 m-2 h-[100vh] bg-[#bbd7f1] ml-0 z-50 lg:block'>
    <div className=' flex bg-[#bbd7f1] p-7 items-center w-[100%] '>
        <img src={icon} alt="" width='50 px' className='mr-2'/>
        <h2 className='text-xl font-bold'><Link to='/'>Cryptosite</Link></h2>
    </div>
    <ul>
        <li>
        <Link to='/'>
            <div className='flex bg-[#bbd7f1] p-7 items-center w-[100%] hover:bg-slate-400'>
                <img src={home} alt="" width='30px' className='mr-2'/>
                <h4 className=' text-lg'>Home</h4>
            </div>
            </Link>
        </li>
        <li>
        <Link to='/cryptocurrencies'>
            <div className='flex bg-[#bbd7f1] p-7 items-center w-[100%] hover:bg-slate-400'>
                <img src={currency} alt="" width='30px' className='mr-2'/>
                <h4 className='text-lg'>Cryptocurrencies</h4>
            </div>
            </Link>
        </li>
        <li>
        <Link to='/news'>
            <div className='flex bg-[#bbd7f1] p-7 items-center w-[100%] hover:bg-slate-400'>
                <img src={news} alt="" width='30px' className='mr-2' />
                <h4 className='text-lg'>News</h4>
            </div>
            </Link>
        </li>
    </ul>
    </div>
  )
}

export default Navbar