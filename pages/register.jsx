import { Alert, AlertIcon, FormControl } from '@chakra-ui/react'
import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import axios, {AxiosError}from 'axios'
const RegisterPage = () => {

  const [error,setError] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    
    try{
        const res = await axios.post(`/api/auth/signup`, 
        { 
            email:formData.get('email'),
            password:formData.get('password'),
            username:formData.get('username')
        })
        console.log(res)


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
