import moment from 'moment'
import React from 'react'
import demo from '../images/icon.jpg'

const NewsCard = ({ news }) => {
  return (
    <div className='w-[90%] m-3 '>
      <div className=' flex justify-between p-5'>
        <h4 className=' text-xl font-medium'>
          {news.title}
        </h4>
        <img src={news.thumbnail || demo} alt="" className='w-[100px] h-[100px]' />
      </div>
      <p className='m-2'>{news.description > 100 ? `${news.description.substring(0, 100)} ...` : news.description}</p>
      <div className='flex'>
        <p className='m-2'>{moment(news.createdAt).startOf('ss').fromNow()}</p>
      </div>
    </div>
  )
}

export default NewsCard