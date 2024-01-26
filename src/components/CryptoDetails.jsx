import React from 'react'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import useFetch from './useFetch'
import dollar from '../images/dollar.svg'
import rank from '../images/rank.svg'
import trophy from '../images/trophy.svg'
import check from '../images/check.svg'
import currency from '../images/currency.svg'
import exchange from '../images/exchange.svg'
import cross from '../images/cross.svg'
import exc from '../images/exc.svg'


const CryptoDetails = () => {
  const {coinid}=useParams();
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3d2b753eccmsh04bf0b831f8b334p103038jsn609652e2e852',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  const {data,loading,error }= useFetch(`https://coinranking1.p.rapidapi.com/coin/${coinid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=7d`,options)
  
  const stats = [
    { title: 'Price to USD', value: `$ ${data?.data?.coin?.price && millify(data?.data?.coin?.price)}`, icon: dollar },
    { title: 'Rank', value: data?.data?.coin?.rank, icon: rank },
    { title: 'Market Cap', value: `$ ${data?.data?.coin?.marketCap && millify(data?.data?.coin?.marketCap)}`, icon: dollar },
    { title: 'All-time-high(daily avg.)', value: `$ ${data?.data?.coin?.allTimeHigh?.price && millify(data?.data?.coin?.allTimeHigh?.price)}`, icon: trophy },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: data?.data?.coin?.numberOfMarkets, icon: currency },
    { title: 'Number Of Exchanges', value: data?.data?.coin?.numberOfExchanges, icon: exchange},
    { title: 'Approved Supply', value: data?.data?.coin?.supply?.confirmed ? check : cross, icon: exc },
    { title: 'Total Supply', value: `$ ${data?.data?.coin?.supply?.total && millify(data?.data?.coin?.supply?.total)}`, icon: exc },
    { title: 'Circulating Supply', value: `$ ${data?.data?.coin?.supply?.circulating && millify(data?.data?.coin?.supply?.circulating)}`, icon: exc },
  ];

  if (loading) return ('Loading')
  return (
    <div className='m-7'>
    <div className='flex justify-center items-center flex-col border-b border-solid border-[#d9d9d9] py-10 gap-2'>
      <h2 className='text-3xl font-bold text-blue-600'> {data?.data?.coin.name}</h2>
      <p>{data?.data?.coin.name}  live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      
    </div>
      <div className='flex flex-col lg:flex-row justify-between gap-10 items-center pt-8'>
        <div>
          <div >
            <h3 className='font-bold mt-5 text-[#0071bd] text-xl'>{data?.data?.coin.name} Value Statistics</h3>
            <p className='text-base opacity-90'>An overview showing the statistics of {data?.data?.coin.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </div>
          {stats.map(({ icon, title, value })=>(
            <div className='flex justify-between text-base border-b border-solid border-[#d9d9d9] opacity-90 p-5'>
              <div className='flex gap-2 text-base'>
                <img src={icon} alt="" className='h-6'/>
                <p>{title}</p>
              </div>
              <p className='font-bold text-base'>{value}</p>
            </div>
          ))}
        </div>
        <div>
          <div>
            <h3 className='font-bold mt-5 text-[#0071bd] text-xl'>Other Stats Info</h3>
            <p className='text-base opacity-90'>An overview showing the statistics of {data?.data?.coin.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </div>
          {genericStats.map(({ icon, title, value })=>(
            <div className='flex justify-between text-base border-b border-solid border-[#d9d9d9] opacity-90 p-5'>
              <div className='flex gap-2 text-base'>
                <img src={icon} alt="" className='h-6' />

                <p>{title}</p>
              </div>
              {(title==='Approved Supply')?<img src={value} alt="" className='h-6'/>:
              <p className='font-bold text-base'>{value}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CryptoDetails