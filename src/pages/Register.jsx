import {useState} from 'react';
import { Link } from 'react-router-dom';

import {Stack, Text, Image,  FormControl,
  FormLabel,
  Input,
  FormHelperText, InputGroup, InputRightElement, Icon} from '@chakra-ui/react';

  import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {images} from '../contanst';

const Register = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Stack>
      <Stack justify='center' align='center' mt='5rem'>
        <Text fontSize='2xl' color='blackAlpha.800'>
          Załóż konto
        </Text>
        <Image src={images.Decoration} alt='Decoration' w={140} mt='1rem' paddingBottom='2rem' />
        <Stack   align='center'w={300} h={280} background='blackAlpha.200' borderRadius='5px'>
          <Stack w={200}  >
            <FormControl>
              <FormLabel htmlFor='email' color='gray' fontSize='12px' mt='1rem'>Email</FormLabel>
              <Input id='email' type='email'  borderColor='blackAlpha.400'  placeholder='Enter email'/>
              <FormLabel htmlFor='password' color='gray' fontSize='12px' mt='1rem'>Hasło</FormLabel>
              <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    borderColor='blackAlpha.400'
                  />
                  <InputRightElement width='4.5rem'>
                    <Icon onClick={handleClick} cursor='pointer'>
                      {show ? <ViewOffIcon  w={5} h={5}/> : <ViewIcon  w={5} h={5}/>}
                    </Icon>
                  </InputRightElement>
                </InputGroup>

                <FormLabel htmlFor='password' color='gray' fontSize='12px' mt='1rem'>Powtórz hasło</FormLabel>
                  <InputGroup size='md'>
                      <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        borderColor='blackAlpha.400'
                      />
                      <InputRightElement width='4.5rem'>
                        <Icon onClick={handleClick} cursor='pointer'>
                          {show ? <ViewOffIcon  w={5} h={5}/> : <ViewIcon  w={5} h={5}/>}
                        </Icon>
                      </InputRightElement>
                    </InputGroup>
            
            </FormControl>
          </Stack>
        </Stack>
    
        <Stack w={350} direction='row' justify='space-between'   align='center'>
          <Text fontSize='12px' color='gray' pt='1rem'>
            <Link to='/login'> Zaloguj się </Link>
          </Text>
          <Stack pt='1rem'>
            <Text fontSize='12px' color='gray'  p='8px' border='2px' borderColor='blackAlpha.400' >
              <Link to='/register'> Załóż konto</Link>
            </Text>

          </Stack>
        </Stack>

      </Stack>
    </Stack>
  )
}

export default Register