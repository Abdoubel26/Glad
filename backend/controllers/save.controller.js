import Save from '../models/save.model.js'



export const getSaves = async (req, res) => {
    try {
        const foundSaves = await Save.find()
        return res.status(200).json({ success: true, saves: foundSaves})
    } catch(e) {
        return res.status(500).json({ success: false, message:`Internal Server Error: ${e.message}`})
    }
}


export const toggleSave = async (req, res) => {
    const { postId } = req.body
    const { id } = req.userId
    if(!postId) return res.status(400).json({ success: false, message:"Missing post ID"});
    try {
        const foundSave = await Save.findOne({user: id, post: postId})
        if(foundSave){
            await Save.findOneAndDelete({user: id, post: postId})
            return res.status(200).json({ success: true, message: "Save deleted"})
        } else {
            const newSave = new Save({user: id, post: postId})
            await newSave.save()
            console.log(newSave)
            return res.status(200).json({ success: true, message:"Save added", save: newSave})
        }
    } 
    catch(e) {
        return res.status(500).json({ success: false, message:`Internal Server Error: ${e.message}`})
    }
}