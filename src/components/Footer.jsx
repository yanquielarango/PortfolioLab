
import { images} from '../contanst';
import {Flex, Stack, Heading, Box, Text, Image, HStack, FormControl, FormLabel, Input, FormErrorMessage, Button} from '@chakra-ui/react';
import { Formik, Field} from 'formik';
import { toast } from 'react-hot-toast';


const Footer = () => {
  return (
    <>
      <Stack direction='row' mt='3rem' spacing={2} id='contact' color='#3C3C3C'  >
        <Stack w='60%'>
            <Image src={images.form}  alt='People' opacity='0.2' objectFit='cover' w='100%' h='100%'/>
        </Stack>
        <Stack w='30%'   align='center'  >
            <Heading as='h2' fontWeight='400' fontSize='2xl' mt='5rem'> Skontaktuj się z nami</Heading>
              <Image src={images.Decoration} alt='decoration' w='150px' />
            <Stack direction='row'>
              <Box bg='white' p={6} rounded='md' w='400px' color='gray'>
                <Formik 
                initialValues={{  
                  name: '',
                  email: '', 
                  message: '' 
                  }}
                  onSubmit={async (values, {resetForm}) => {
                    const response = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(values)

                    })
                    const data = await response.json()
                    console.log(data)

                    if(data.status === 'success'){
                      toast.success('Wiadomość wysłana')
                      resetForm({values: ''})
                    }
                    else{
                      toast.error('Wiadomość nie wysłana')
                    }
                    
                  }}


                  >

                {({ handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <HStack spacing={4} mt='1rem'>
                      <FormControl isInvalid={!!errors.name && touched.name}>
                        <FormLabel htmlFor='text'  fontSize='12px' mb='0rem'>Wpisz swoje imię</FormLabel>
                        <Field  as={Input}  name='name' type='text'  
                        borderColor='blackAlpha.400'
                        variant='flushed'
                        placeholder ='Wpisz swoje imię' fontSize='12px' opacity='.5'
                        
                        validate={(value) => {
                          if (!value) {
                            return 'name is required';
                          }
                        
                        }}
                        />
                        <FormErrorMessage>{errors.name}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.email && touched.email}>
                        <FormLabel htmlFor='email'  fontSize='12px'mb='0rem' >Wpisz swój email</FormLabel>
                        <Field  as={Input}  name='email' type='email'
                        borderColor='blackAlpha.400'
                        variant='flushed'
                        placeholder='Wpisz swój email' fontSize='12px' opacity='.5'
                        validate={(value) => {
                          if (!value) {
                            return 'Email is required';
                          }
                          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
                          errors.email = 'invalid email address';
                          }
                        }}
                      
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>                  
                    </HStack>

                    
                    <FormControl isInvalid={!!errors.message && touched.message} >
                      <FormLabel htmlFor='message'  fontSize='12px' mb='0rem' mt='2rem'>Wpisz swoją wiadomość</FormLabel>
                      <Field  as={Input}  name='message' type='text' 
                      borderColor='blackAlpha.400'
                      variant='flushed'
                      placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                        fontSize='10px' opacity='.5'
                        validate={(value) => {
                          if (value === '') {
                            return 'message can not be empty';
                          }else if (value.length < 120) {
                            return 'message must be at least 120 characters';
                          }
                        
                        }}
                        />
                        <FormErrorMessage>{errors.message}</FormErrorMessage>
                      </FormControl>                  
                    <Button type='submit' colorScheme='gray' mt='2rem' variant='outline'  float='right' >Wyślij</Button>
                  </form>
                )}
                  
                </Formik>
          </Box>        
              </Stack> 
              
        </Stack>

        
        
  </Stack>
  <Flex justify="center" mt='-2rem'  fontSize='12px' color='gray' >
        <Text >
        Copyright by Coders Lab
        </Text>  
  </Flex>
  
</>
  )
}

export default Footer