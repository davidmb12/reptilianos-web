import {Schema,model,models} from 'mongoose';

const UserSchema = new Schema({
    email:{
        type:String,
        trim:true,
        unique:true,
        required:[true, "Email is required"],
        lowercase:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        
    },
    password:{
        type: String,
        required:[true, "Password is required"],
        select: false
    },
    username:{
        type: String,
        required:[true, "Username is required"],
        minLength:[3,"Username must be at least 3 characters"],
        maxLength:[50,"Username must be at least 5 characters"],
    },
})

const User = models.User || model('User',UserSchema)
export default User;