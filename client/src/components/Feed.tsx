import { useEffect, useState } from "react"
import { getPosts, getSaves, toggleSave } from "../lib/services"
import { useNavigate, useParams } from "react-router-dom"
import { usePosts } from "../context/postsContext"
import { useAuth } from "../context/thisUserContext"

function Feed({text}: {text: string}) {

  const { id } = useParams<{id: string}>()

  const { token, thisUser } = useAuth()

  const { posts, setPosts} = usePosts()
  const navigate = useNavigate()

  const [saves, setSaves] = useState<{user: string, post: string, _id: string}[]>([])

  useEffect(() => {
    const loadPosts = async () => {
    const response = await getPosts()
    if(response.success) {
      setPosts(response.posts)
    } else {
      alert(response.message)
    }
    }
    const loadSaves = async () => {
      const response = await getSaves()
      if(response.success){
        setSaves(response.saves)
      } else {
        alert(response.message)
      }
    }
    loadPosts()
    loadSaves()
  }, [])

  const clickSave = async (postId: string) => {
    const response = await toggleSave(token, postId)
    if(response.success){
      const foundSave = saves.find(save => save.post === postId && save.user === thisUser.id )
      if(foundSave){
        setSaves(prev => prev.filter(save => save._id !== foundSave._id))
      } else {
        setSaves(prev => [...prev, response.save])
      }
    }
    else {
      alert(response.message)
    }
  }


  return (
    <div className='p-4 justify-center items-center w-screen flex flex-col max-w-screen overflow-clip'>
       <div className=' w-full'><h1 className=' text-4xl border-b-2 w-fit outfit p-1 self-start  font-bold'>{text}</h1></div>

        <div className=" lg:grid lg:grid-cols-3 max-w-screen w-screen lg:gap-10 lg:gap-y-5 p-3">
        {posts.map((post, indx) => (
            <div key={indx} className={` bg-blue-800 rounded-2xl p-3 pb-1 cursor-pointer hover:scale-103 transition-all duration-200 ${id && id === post._id ? "hidden" :  ""}`}>
                <img src={post.image}  onClick={() => navigate(`/article/${post._id}`)} className="h-50 object-cover w-full rounded-2xl cursor-pointer"/>
               <h1  onClick={() => navigate(`/article/${post._id}`)} className="text-white poppins font-medium pt-3 pb-1 cursor-pointer">{post.title}</h1> 
               <h2  onClick={() => navigate(`/article/${post._id}`)} className="text-gray-200 p-1 font-light">{post.subtitle} <span className="text-white underline hover:text-blue-300 transition-all font-semibold">Read more...</span></h2>
               <div onClick={() =>{
               const func = async () => {
                await clickSave(post._id)
               } 
               func()
              }}
              className="w-full flex justify-end">
                 { saves.length !== 0 && saves.some(save => save.post === post._id) ?
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M713-600 600-713l56-57 57 57 141-142 57 57-198 198ZM200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Z"/></svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>
                 }
               </div>
            </div>
        ))

        }
        </div> 


    </div>
  )
}

export default Feed
