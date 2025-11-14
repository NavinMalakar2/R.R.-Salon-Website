import mongoose from 'mongoose'

const bookingSchema= new mongoose.Schema({
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    username:{type:String, required:true},
    // email: {type: String, required:true},
    mobileNumber:{type:Number,required:true},
    slot: {type: String, required:true},
    employe: {type: String, required:true},
    
})
 const  UserBooking= mongoose.model('UserBooking',bookingSchema);

 export default UserBooking;  //exporting the model to use it in other files.