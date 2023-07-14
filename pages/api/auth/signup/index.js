import { NextResponse } from 'next/server'
import User from '../../../../models/user';
import { connectDB } from '../../../../libs/mongodb';
import bcrypt from 'bcryptjs';

async function POST(req, response) {
    const { username, email, password } = await req.body;
    if (!password || password.length < 6)
        return response.status(400).json({ message: "Password must be at least 6 characters" })

    try {
        await connectDB();

        const userFound = await User.findOne({ email })
        if (userFound) return response.status(409).json({ message: "Email already exists" }, { status: 409 });

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({
            email,
            username,
            password: hashedPassword,
        })
        const savedUser = await user.save();
        return response.status(200).json({ _id: savedUser.id,email:savedUser.email,username:savedUser.username})

    }catch(err) {
        if(err instanceof Error){
            console.log(err)
            return response.status(400).json({ error: err });
        }
    }


}
export default function handler(request, response) {
    const method = request.method;

    if (method == 'POST') {
        return POST(request, response);
    }
    if (method == 'PUT') {

    }
    if (method == 'GET') {

    }
    if (method == 'PUT') {

    }
    return response.status(200).json({ meassage: method });
}



