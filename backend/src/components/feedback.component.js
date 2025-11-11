import Feedback from "../models/feedback.model.js";

const userFeedback = async (req, res) => {
    try {
        const {username,message}=req.body;
        console.log(username,message);
        if(!username ||!message){
            return res.status(400).json({ message: 'Please provide username and message.' });
        }
        const newFeedback = new Feedback({username,message});
        await newFeedback.save();
        res.status(201).json({message:'send successfully'});
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.error('not send');
    }
}

export default userFeedback;