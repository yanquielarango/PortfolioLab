import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {Stack, Text, Image,  FormControl,
  FormLabel,
  Input,
 InputGroup, InputRightElement, Icon, Button} from '@chakra-ui/react';

  import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {images} from '../contanst';
import { useAuth } from '../context/AuthContext';
import Alert from '../components/Alert';


const LoginPage = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const { login } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        await login(user.email, user.password);
        navigate("/");
      

    } catch (error) {
      console.log(error.code);
      if (error.code === 'auth/user-not-found') {
        setError("User not exists");
      }
      else  if(user.password === '' || user.email === '') {
        setError("All fields are required");      
      }
      else if(error.code === 'auth/wrong-password') {
        setError("Wrong password");
      }
      else if(error.code === 'auth/invalid-email') {
        setError("Invalid email");
      }

      
  }
  }


  return (
    <Stack>
      <Stack justify='center' align='center' mt='5rem'>
        <Text fontSize='2xl' color='blackAlpha.800'>
          Zaloguj się
        </Text>
        <Image src={images.Decoration} alt='Decoration' w={140} mt='1rem' paddingBottom='2rem' />
        
        {error?.length > 0 && <Alert message={error} />}
        <Stack   align='center'w={300} h={220} background='blackAlpha.200' borderRadius='5px'>
          <Stack w={200}  >
            
            <FormControl>
              <FormLabel htmlFor='email' color='gray' fontSize='12px' mt='1rem'>Email</FormLabel>
              <Input id='email' type='email'  borderColor='blackAlpha.400'  
                placeholder='Enter email'                       
                fontSize='12px'
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              <Text fontSize='xs'></Text>
              <FormLabel htmlFor='password' color='gray' fontSize='12px' mt='1rem'>Hasło</FormLabel>
              <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    borderColor='blackAlpha.400'
                    fontSize='12px'
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                   
                  />
                  <InputRightElement width='4.5rem'>
                    <Icon onClick={handleClick} cursor='pointer' >
                      {show ? <ViewIcon  w={5} h={5}/> : < ViewOffIcon  w={5} h={5}/>}
                    </Icon>
                  </InputRightElement>
                </InputGroup>
            
            </FormControl>
            
          </Stack>
        </Stack>
    
        <Stack w={350} direction='row' justify='space-between'   align='center'>
          <Button variant='ghost' colorScheme='gray' fontSize='12px' fontWeight='normal' mt='1rem' color='gray'>
            <Link to='/register'> Załóż konto</Link>
          </Button>
          <Stack pt='1rem'>
            <Text color='gray' >
              <Button onClick={handleSubmit} variant='ghost' colorScheme='gray' fontSize='12px' fontWeight='normal'>Zaloguj się</Button>
            </Text>

          </Stack>
        </Stack>

      </Stack>
    </Stack>
  )
}

export default LoginPage