import React from 'react'
import useFetch from './useFetch'
import NewsCard from './NewsCard'
import { Link } from 'react-router-dom'
const News = () => {
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3d2b753eccmsh04bf0b831f8b334p103038jsn609652e2e852',
        'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
    }
};
  const{data,loading,error}=
  useFetch('https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',options)
  console.log(data)
  if(loading && data==null) return ('Loading...')
  else if(error) return('Page facing error')
  else{
  return (
    !loading && <>
      {data?.data?<div className='flex flex-wrap'>
      {data?.data.map((news,i) => (
          <Link to={news.url} className='m-3 lg:w-[30%] bg-slate-100 hover:shadow-sm'>
            <NewsCard news={news} key={i} />
          </Link>
        ))}</div>:<div class="flex items-center justify-center h-screen w-[!00%]">
    <div className='flex items-center justify-center' >
      <span className="text-gray-500 text-4xl text-center">📚</span>
      <p className="text-gray-700 text-lg font-semibold">No news found</p>
    </div>
  </div>}
      
    </>
  )}
}

export default News