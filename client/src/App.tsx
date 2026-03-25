import Feed from "./components/Feed"
import NavBar from "./components/NavBar"
import { posts } from "./assets/assets"
import Article from "./components/Article"

function App() {
  return (
    <>
      <NavBar />
      {/* <Feed /> */}
      <Article post={posts[3]} />
    </>
  )
}

export default App
