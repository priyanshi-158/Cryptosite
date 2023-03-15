import moment from 'moment'
import React from 'react'
import demo from '../images/icon.jpg'

const NewsCard = ({news}) => {
  return (
    <div className='w-[100%] m-3 bg-zinc-50'>
    <div className=' flex justify-between bg-slate-100 p-5 w-[100%]'>
    <h4 className='w-[70%] text-xl font-medium'>
        {news.name}
    </h4>
    <img src={news?.image?.thumbnail?.contentUrl || demo} alt="" className='w-[100px] h-[100px]'/>
    </div>
    <p className='m-2'>{news.description>100?`${news.description.substring(0,100)} ...`:news.description}</p>
    <div className='flex justify-between'>
    <div className='flex'>
      <img src={news.provider[0]?.image?.thumbnail?.contentUrl} alt="No" className='h-8 '/>
     <p className='m-1 ml-2'>{news.provider[0]?.name}</p>
      </div>
      <p className=''>{moment(news.datePublished).startOf('ss').fromNow()}</p>
    </div>
    </div>
  )
}

export default NewsCard