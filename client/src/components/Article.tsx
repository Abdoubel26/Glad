import ReactMarkdown from 'react-markdown'
import Feed from './Feed'
import { useEffect, useState, useRef } from 'react'
import type { postType } from '../lib/types'
import { useParams, useNavigate } from 'react-router-dom'
import { usePosts } from '../context/postsContext'

function Article() {
  const navigate = useNavigate()
  const { posts } = usePosts()
  const { id } = useParams<{id: string}>()

  const topRef = useRef<HTMLDivElement>(null!)


  useEffect(() =>{
    if(topRef.current){
      topRef.current.scrollIntoView({ behavior: "smooth"})
    }
  }, [id])

  useEffect(() => {
    const foundpost = posts.find(p => p._id === id)
    if(foundpost) setPost(foundpost)
  }, [id])

  const [post, setPost] = useState<postType>({
    title: "",
    subtitle: "",
    image: "",
    _id: "",
    content: "",
    category: "",
    createdAt: "",
  })



  return (
    <>
    <div ref={topRef} className='flex flex-col p-7 px-20 items-center justify-center'>
    <div  className='w-full flex flex-row items-center justify-between'> <h1 className='poppins text-4xl text-left font-medium border-b-2  w-fit'>{post.title}</h1> <span onClick={() => navigate('/')} className='text-black outfit font-semibold border transition-all border-black px-3 py-2 cursor-pointer hover:bg-[#939352] rounded-2xl text-lg' >X</span></div>
    <div className='w-full'><h2 className='poppins text-left text-3xl font-medium mt-5 pt-3'>{post.subtitle}</h2></div>  

        <div className='mt-10'><img src={post.image} className='w-190 h-110 object-cover' /></div>
      
      <div className=' justify-center mt-5 w-full '> 
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
      <div className='border-t border-b w-screen mt-10 flex flex-row justify-around'> 
        <p className=' text-2xl font-bold outfit cursor-pointer'>Like ❤️</p>
        <p className='text-2xl font-bold outfit  cursor-pointer'>Save 🔖</p>
      </div>
    </div>
    <Feed  text='See more Good News'/>
    </>
  )
}

export default Article
