import { Alert, AlertIcon, FormControl } from '@chakra-ui/react';
import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import axios, {AxiosError}from 'axios';
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/router';
import { redirect } from 'next/dist/server/api-utils';


const RegisterPage = () => {

  const [error,setError] = useState();
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    
    try{
        const signUpResponse = await axios.post(`/api/auth/signup`, 
        { 
            email:formData.get('email'),
            password:formData.get('password'),
            username:formData.get('username')
        });
        console.log(signUpResponse);
        const res = await signIn('credentials',{
          email: signUpResponse.data.email,
          password:formData.get('password'),
          redirect:false
        })
        
        if(res.ok) return router.push({pathname: '/', query: {u:"true"}})

    }catch(error){
      console.log(error)
      if(error instanceof AxiosError){
        setError(error.response?.data.message)
      }
    }

}


  return (
    <div>
      
      <RegisterForm onSubmit={handleSubmit}>
        {error &&<Alert status='error'>
          <AlertIcon />
            {error}
          </Alert> 
        }
      </RegisterForm>
    </div>
  )
}

export default RegisterPage
