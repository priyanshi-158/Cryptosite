import millify from 'millify'
import React from 'react'

const CryptoCard = ({currency}) => {
  return (
    <div className='w-[100%] m-3 flex flex-col flex-wrap'>
            <div className='flex justify-between p-5 bg-slate-100 w-[100%]'>
                <h4 className='text-xl font-medium'>{currency.rank}.{currency.name}</h4>
                <img src={currency.iconUrl} alt="" className='h-8'/>
            </div>
            <div className='p-5 bg-zinc-50'>
                <p className='mb-1'>Price: {millify(currency.price)}</p>
                <p className='mb-1'>Market Cap: {millify(currency.marketCap)}</p>
                <p className='mb-10'>Daily Change: {millify(currency.change)}</p>
            </div>
    </div>
  )
}

export default CryptoCard