import { posts } from "../assets/assets"

function Feed() {
  return (
    <div className='p-4 w-screen flex flex-col max-w-screen overflow-clip'>
       <div className=' border-b-2 w-fit'><h1 className=' text-4xl outfit p-1  font-bold'>Latest Good News</h1></div>

        <div className=" lg:grid lg:grid-cols-3 lg:gap-10 lg:gap-y-5 p-3">
        {posts.map((post, indx) => (
            <div key={indx} className=" bg-blue-800 rounded-2xl p-3 cursor-pointer">
                <img src={post.image}  className="h-50 object-cover w-full rounded-2xl"/>
               <h1 className="text-white poppins font-medium p-3 cursor-pointer">{post.title}</h1> 
            </div>
        ))

        }
        </div> 


    </div>
  )
}

export default Feed
