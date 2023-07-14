import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { Alert, AlertIcon } from '@chakra-ui/react';
const LoginPage = () => {
  const [error, setError] = useState();
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })
    if (res.error) setError(res.error)
    if (res.ok) return router.push({ pathname: '/', query: { u: "true" } })

    console.log(res)

  };

  return (

    <div>
      <LoginForm onSubmit={handleSubmit}>
        {error && <Alert status='error' borderRadius={'md'}>
          <AlertIcon />
            {error}
        </Alert>
        }
      </LoginForm>
    </div>
  )
}

export default LoginPage
