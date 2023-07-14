import NextAuth,{NextAuthOptions} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import {connectDB} from "../../../libs/mongodb"
import User from '../../../models/user'
import bcrypt from "bcryptjs"
const authOptions = {
    session:{
        strategy:'jwt'
    },
    providers:[
        CredentialsProvider({
            type:'credentials',
            credentials:{
                email: {label: "Email", type:"email", placeholder: ""},
                password:{label: "Password", type:"password",placeholder:"*****"}
            },
            async authorize(credentials, req) {
                await connectDB();
                console.log(credentials)

                const userFound = await User.findOne({email:credentials?.email}).select("+password")

                if(!userFound) throw new Error("Invalid credentials")
                console.log(userFound)
                const passwordMatch =await bcrypt.compare(credentials.password, userFound.password)
                console.log("Match:")
                console.log(passwordMatch)
                if(!passwordMatch) throw new Error("Invalid credentials")

                return userFound;
            }
        }),
    
        
    ],
    callbacks:{
        jwt({account, token, user, profile, session}){
            console.log({
                account,
                token,
                user,
                profile
            });
            if(user) token.user = user;
            console.log(token);
            return token;

        },
        session({session, token}){
            session.user = token.user;
            return session
        }
    },
    pages:{
        signIn:'/login'
    }
    
}
export default NextAuth(authOptions);