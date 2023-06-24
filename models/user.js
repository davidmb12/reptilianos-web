import {Schema} from 'mongoose';

const UserSchema = new Schema({
    email:{
        type:String,
        unique:true,
        required:[true, "Email is required"],
        match:[
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            "Email is not valid"
        ]
    },
    password:{
        type: String,
        required:[true, "Password is required"],
        select: false
    },
    fullname:'',
})