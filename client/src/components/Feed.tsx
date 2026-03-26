import { useEffect } from "react"
import { getPosts } from "../lib/services"
import { useNavigate } from "react-router-dom"
import { usePosts } from "../context/postsContext"

function Feed({text}: {text: string}) {

  const { posts, setPosts} = usePosts()
  const navigate = useNavigate()

  useEffect(() => {
    const loadPosts = async () => {
    const response = await getPosts()
    if(response.success) {
      setPosts(response.posts)
    } else {
      alert(response.message)
    }
    }
    loadPosts()
  }, [])

  return (
    <div className='p-4 justify-center items-center w-screen flex flex-col max-w-screen overflow-clip'>
       <div className=' w-full'><h1 className=' text-4xl border-b-2 w-fit outfit p-1 self-start  font-bold'>{text}</h1></div>

        <div className=" lg:grid lg:grid-cols-3 max-w-screen w-screen lg:gap-10 lg:gap-y-5 p-3">
        {posts.map((post, indx) => (
            <div key={indx} onClick={() => navigate(`/article/${post._id}`)} className=" bg-blue-800 rounded-2xl p-3 pb-1 cursor-pointer hover:scale-103 transition-all duration-200">
                <img src={post.image}  className="h-50 object-cover w-full rounded-2xl cursor-pointer"/>
               <h1 className="text-white poppins font-medium pt-3 pb-1 cursor-pointer">{post.title}</h1> 
               <h2 className="text-gray-200 p-1 font-light">{post.subtitle} <span className="text-white underline hover:text-blue-300 transition-all font-semibold">Read more...</span></h2>
            </div>
        ))

        }
        </div> 


    </div>
  )
}

export default Feed
