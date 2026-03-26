import { useContext, createContext, type FC, type ReactNode, useState } from "react";
import { type postType } from "../lib/types";


interface postsContextType {
    posts: postType[],
    setPosts: React.Dispatch<React.SetStateAction<postType[]>>
}

const postsContext = createContext<postsContextType>({
    posts: [],
    setPosts: () => {},
})


export const PostsContextProvider: FC<{children: ReactNode}> = ({children}) => {

    const [posts, setPosts] = useState<postType[]>([])

    return (
        <postsContext.Provider value={{posts, setPosts}} >
            {children}
        </postsContext.Provider>
    )
}

export const usePosts = () =>  {
    const context = useContext(postsContext)
    return context
}