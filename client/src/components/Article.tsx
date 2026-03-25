import React from 'react'
import { type postType } from '../lib/types'
import ReactMarkdown from 'react-markdown'

type propTypes = {
    post: postType
}

function Article({ post }: propTypes) {
  return (
    <div className='flex flex-col p-7 items-center justify-center'>
    <div className='w-full'> <h1 className='poppins text-4xl text-left font-medium border-b-2  w-fit'>{post.title}</h1></div>
    <div className='w-full'><h2 className='poppins text-left text-3xl font-medium mt-5 pt-3'>{post.subtitle}</h2></div>  

        <div className='mt-10'><img src={post.image} className='w-190 h-110 object-cover' /></div>
      
      <div className='w-full justify-start'>
        <ReactMarkdown
  components={{
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-6 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl poppins font-semibold mt-5 mb-3">{children}</h2>
    ),
    p: ({children}) => (
        <p className=' poppins'>{children}</p>
    )
  }}
>
  {post.content}
</ReactMarkdown>
      </div>
    </div>
  )
}

export default Article
