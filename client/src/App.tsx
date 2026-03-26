import Feed from "./components/Feed"
import NavBar from "./components/NavBar"
import { posts } from "./assets/assets"
import Article from "./components/Article"
import Login from "./components/Login"

function App() {
  return (
    <>
    <Login />
      {/* <NavBar />
      <Feed text='The Latest Good News' /> 
      <Article post={posts[3]} /> */}
    </>
  )
}

export default App
