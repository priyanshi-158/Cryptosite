import React from 'react'
import moment from 'moment'
import useFetch from './useFetch'
import NewsCard from './NewsCard'
import { Link } from 'react-router-dom'
const News = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': '3d2b753eccmsh04bf0b831f8b334p103038jsn609652e2e852',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };
  const{data,loading,error}=
  useFetch('https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&freshness=Day&textFormat=Raw&safeSearch=Off',options)
  console.log(data)
  if(loading && data===null) return ('Loading...')
  else{
  return (
    !loading && <>
      <div className='flex flex-wrap'>
      {data?.value.map((news,i) => (
          <Link to={news.url} className='m-3 lg:w-[30%] hover:shadow'>
            <NewsCard news={news} key={i} />
          </Link>
        ))}
      </div>
    </>
  )}
}

export default News