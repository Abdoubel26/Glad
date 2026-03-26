import mongoose from 'mongoose'


const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    subtitle: {type: String, required: true},
    image: {type: String, required: true},
    content: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    category: {type: String, required: true}
})


export default mongoose.model("Post", postSchema)