import Like from '../models/like.model.js'



export const toggleLike =  async (req, res) => {
    const { postId, } = req.body
    const { id } = req.id
    if(!id || !postId) return res.status(400).json({ success: false, message:"Missing user ID or post ID"});
    try{
        const foundlike = await Like.findOne({user: id, post: postId})
        if(:foundlike){
            await Like.findOneAndDelete({user: id, post: postId})
            return res.status(200).json({ success:true, message: "like removed" })
        } else {
            const newLike = new Like({user: id, post: postId})
            await newLike.save()
            return res.status(200).json({ success: true, message: "like added", like: newLike})
        }
    } catch(e) {
        return res.status(500).json({ success:false, message:`Internal Server Error: ${e.message}`})
    }
}

// export const toggleSave = async (req, res) => {
//     const { postId} = req.body
//     const { id } = req.id
//     if(!id || !postId) return res.status(400).json({ success: false, message:"Missing user ID or post ID"});
//     try {
//         const foundsave = await Like.findOne({user: id, post: postId, save: true})
//         if(foundsave){
//             await Like.findOneAndUpdate({user: id, post: postId, save: true}, {save: false})
//             return res.status(200).json({ success: true, message:"save removed"})
//         } else {
//             const newSave = new Like({user: id, post: postId, save: true})
//             await newSave.save()
//             return res.status(200).json({ success: true, message: "Save added", save: newSave})
//         }
//     } catch(e) {
//         return res.status(500).json({ success:false, message:`Internal Server Error: ${e.message}`})
//     }
// }