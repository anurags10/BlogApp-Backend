import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    blogs: {
        type: mongoose.Types.ObjectId,
        ref:"Blog",
        required:true
    }
});

export default mongoose.model('User',userSchema);
// In MongoDb collection will be created as a users(by naming convention of mongoDb i.e User = users)