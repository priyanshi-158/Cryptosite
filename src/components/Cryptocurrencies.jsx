import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from './useFetch'
import CryptoCard from './CryptoCard'
const Cryptocurrencies = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3d2b753eccmsh04bf0b831f8b334p103038jsn609652e2e852',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  const { data, loading, error } =
    useFetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)

  
    
  
  const [searchTerm, setSearchTerm] = useState('')
  if(loading) return ('Loading...')
  else{
  return (
    !loading && <>
      <div className='flex justify-center items-center p-10'>
        <input type="text" placeholder='Search Cryptocurrency' className='md:w-[40%] w-56 p-2 border border-black rounded-md' onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className='flex flex-wrap'>
      
         {data?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase())).map((currency) => (
          <Link to={`/crypto/${currency.uuid}`} className='m-3 lg:w-[30%] hover:shadow-md md:w-[45%]'>
            <CryptoCard currency={currency} key={currency.uuid} />
          </Link>
        ))}
      </div>
    </>
  )}
}

export default Cryptocurrencies