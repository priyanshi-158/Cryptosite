import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import useFetch from './useFetch'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'
import CryptoCard from './CryptoCard'
import NewsCard from './NewsCard'
const Homepage = () => {
    const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3d2b753eccmsh04bf0b831f8b334p103038jsn609652e2e852',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    const { data, loading, error } =
        useFetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options1)


        const options = {
            method: 'GET',
            headers: {
              'X-BingApis-SDK': 'true',
              'X-RapidAPI-Key': '3d2b753eccmsh04bf0b831f8b334p103038jsn609652e2e852',
              'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
          };
          const{data: news,loading:fetching,error:error1}=
          useFetch('https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&freshness=Day&textFormat=Raw&safeSearch=Off',options)

          console.log(news)
    if (loading|| fetching) return "Loading...";
    else {
        return (
            <div className='ml-2'>
                <h2 className='text-3xl font-bold py-3'>Global Crypto Stats</h2>
                <div className='w-[80%]'>
                    
                        <table className='w-[80%]'>
                            <tr className=''>
                                <td className='' >
                                    <div>
                                        <h6 className='text-lg text-slate-400'>Total Cryptocurrencies</h6>
                                        <h1 className='text-2xl font-bold'>{data?.data?.stats.totalCoins}</h1>
                                    </div>
                                </td>
                                <td className=''>
                                    <div>
                                        <h6 className='text-lg text-slate-400'>Total Exchanges</h6>
                                        <h1 className='text-2xl font-bold'>{millify(data?.data?.stats.totalExchanges)}</h1>
                                    </div>
                                </td>
                            </tr>
                            <tr className=''>
                                <td className=''>
                                    <div>
                                        <h6 className='text-lg text-slate-400'>Total Market Cap</h6>
                                        <h1 className='text-2xl font-bold'>{millify(data?.data?.stats.totalMarketCap)}</h1>
                                    </div>
                                </td>
                                <td className=''>
                                    <div>
                                        <h6 className='text-lg text-slate-400'>Total 24h Volume</h6>
                                        <h1 className='text-2xl font-bold'>{millify(data?.data?.stats.total24hVolume)}</h1>
                                    </div>
                                </td>
                            </tr>
                            <tr className=''>
                                <td className=''>
                                    <div>
                                        <h6 className='text-lg text-slate-400'>Total Markets</h6>
                                        <h1 className='text-2xl font-bold'>{millify(data?.data?.stats.totalMarkets)}</h1>
                                    </div>
                                </td>
                            </tr>
                        </table>
                </div>
                <div className='flex  items-center mt-10'>
                    <h2 className='text-2xl font-semibold py-3'>Top 10 Cryptocurrencies in the world</h2>
                    <h3 className='right-0 text-blue-600 underline font-semibold absolute'><Link to='/cryptocurrencies'>Show More</Link></h3>
                </div>
                {data?.data?.coins.slice(0, 10).map((currency) => (
                    <Link to={`/crypto/${currency.uuid}`} className='m-3 hover:shadow-md flex flex-wrap'>
                        <CryptoCard currency={currency} key={currency.uuid} />
                    </Link>
                ))}
                <div className='flex  items-center mt-10'>
                    <h2 className='text-2xl font-semibold py-3'>Latest Crypto News</h2>
                    <h3 className='right-0 text-blue-600 underline font-semibold absolute'><Link to='/news'>Show More</Link></h3>
                </div>
                {news?.value.slice(0,4).map((news,i)=>(
                    <Link to={news.url}  className='m-3 hover:shadow-md flex flex-wrap'>
                        <NewsCard news={news} key={i}/>
                    </Link> ))}
            </div>
        )
    }
}

export default Homepage