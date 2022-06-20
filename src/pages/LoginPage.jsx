import {Flex, Box, Text, Image, VStack, FormControl, FormLabel, Input, FormErrorMessage, Button} from '@chakra-ui/react';
import { Formik, Field } from 'formik';
import { Link, useNavigate  } from 'react-router-dom';


import { useAuth } from '../context/AuthContext';

import {images} from '../contanst'

const LoginPage = () => {

    const { login } = useAuth();
    const navigate = useNavigate();


  return (
    <Flex align='center' justify='center'  direction='column' mt='5rem'>
    <Text fontSize='2xl' color='blackAlpha.800'>
    Zaloguj się
    </Text>
    <Image src={images.Decoration} alt='Decoration' w={140} mt='1rem' paddingBottom='2rem' />
      <Box bg='blackAlpha.200' p={6} rounded='md' w={64}>
        <Formik 
          initialValues={{  
            email: '',
            password: '', 
            confirmPassword: '' 
            }}
            onSubmit={async (values) => {
              await login(values.email, values.password);
              navigate("/");
            }}
            >

          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align='flex-start'>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor='email'  fontSize='12px' >Email</FormLabel>
                  <Field  as={Input}  name='email' type='email'  
                  borderColor='blackAlpha.400'
                  variant='filled'
                  validate={(value) => {
                    if (!value) {
                      return 'Email is required';
                    }
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
                    errors.email = 'Invalid email address';
                    }
                  
                  }}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor='password'  fontSize='12px' >Hasło</FormLabel>
                  <Field  as={Input}  name='password' type='password'
                  borderColor='blackAlpha.400'
                  variant='filled'
                  validate={(value) => {
                    if(value.length < 6) {
                      return 'Password needs to be at least 6 characters';
                    }
                  }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                
                <Button type='submit' colorScheme='teal' w='100%' variant='solid'>  Zaloguj się</Button>

                <Flex gap='2rem'>
                <Text fontSize='12px'>
                Nie masz konta?
                </Text>
                <Text fontSize='12px' color='teal' fontWeight='bold'>
                  <Link to='/register'>Załóż konto</Link>
                </Text>
                </Flex>
              </VStack>
            </form>
          )}
            
          </Formik>
      </Box>
  </Flex>
  )
}

export default LoginPage