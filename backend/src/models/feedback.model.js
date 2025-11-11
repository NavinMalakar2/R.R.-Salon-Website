import mongoose from "mongoose";

const feedbackSchema =new mongoose.Schema({
    username:{type:"string",required:"true"},
    message:{type:"string",required:"true"},
})

const Feedback=mongoose.model('Feedback',feedbackSchema);


export default Feedback;