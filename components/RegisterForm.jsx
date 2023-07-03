"use client";

import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'
import { FormEvent } from 'react'
const RegisterForm = ({ children, onSubmit }) => {

    return (
        <VStack mt={'5'}>
            <Button>
                
                <Link href={'/'} className='hover:text-lightGreen transition-all ease-in-out font-semibold'>
                    Logo
                </Link>
            </Button>
            <Flex width="full" justifyContent={"center"} mt={'3'}>
                <Box p={10} width={'30em'} border={'1px'} borderRadius={'3xl'}>
                    <Box textAlign={"left"}>
                        <Heading size={'xl'}>Crear Cuenta</Heading>
                    </Box>
                    <Box my={4}>
                        {children}

                    </Box>
                    <Box my={4} textAlign={"left"}>
                        <form onSubmit={onSubmit}>
                            <FormControl>
                                <FormLabel>Nombre de Usuario</FormLabel>
                                <Input type="text" placeholder='Ingresa nombre de usuario' name='username'></Input>
                            </FormControl>
                            <FormControl mt={6}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder='Ingresa correo electrónico' name='email'></Input>
                            </FormControl>
                            <FormControl mt={6}>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder='Ingresa contraseña' name='password'></Input>
                            </FormControl>
                            <FormControl mt={6}>
                                <FormLabel>Confirm Password</FormLabel>
                                <Input type="password" placeholder='Confirma contraseña' name='confirmPassword'></Input>
                            </FormControl>
                            <Button width="full" mt={4} type="submit" backgroundColor={'green.100'} _hover={{ background: 'green.400', color: 'white' }}>
                                Crear
                            </Button>

                        </form>
                    </Box>
                </Box>
            </Flex>
        </VStack>

    )
}

export default RegisterForm
