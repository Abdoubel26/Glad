import mongoose from 'mongoose'


const likeSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true},
    post:  {type: mongoose.Schema.Types.ObjectId, ref: "posts", required: true},
})


likeSchema.index({user: 1, post: 1}, {unique: true})


export default mongoose.model('Like', likeSchema)