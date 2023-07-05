import NextAuth,{NextAuthOptions} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'


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
            authorize(credentials, req) {
                console.log(credentials.email);
                const user = {id: "1", username:"user", email:"user@example.com"}
                return user;
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
            console.log(session,token);
            return session
        }
    },
    pages:{
    
    }
    
}
export default NextAuth(authOptions);