import Post from '../models/post.model.js'



export const getPosts = async (req, res) => {
    try {
        const foundposts = await Post.find()
        return res.status(200).json({ success: true, message: "Posts fetched successfully", posts: foundposts})
    } catch(e) {
        return res.status(500).json({ success: false, message:`Internal Server Error: ${e.message}`})
    }
}


export const createPost = async (req, res) => {
    const {title, subtitle, image, content, category} = req.body
    if(!title || !image || !content || !category || !subtitle ) return res.status(400).json({ success: false, message: "Missing required fields"});
    try {
        const newPost = new Post({title, subtitle, image, content, category})
        await newPost.save()
        return res.status(201).json({ success: true, message: "post created successfully"})
    } catch(e) {
        return res.status(500).json({ success: false, message:`Internal Server Error: ${e.message}`})
    }
}