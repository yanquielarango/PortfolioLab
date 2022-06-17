import {useState} from 'react';
import { Link, useNavigate  } from 'react-router-dom';

import {Stack, Text, Image,  FormControl,
  FormLabel,
  Input,
  InputGroup, InputRightElement, Icon, Button} from '@chakra-ui/react';

  import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {images} from '../contanst';
import { useAuth } from '../context/AuthContext';
import Alert from '../components/Alert';


const Register = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)


  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if(  user.password === '' || user.email === '') {
        setError("All fields are required");
      }
      else if( user.password !== user.confirmPassword) {
        setError("Passwords do not match");        
      }
      else if (user.email === true) {
        setError("Email is already in use");
      }
      else if(user.password.length < 6) {
        setError("Password needs to be at least 6 characters");
      }
      else if( user.email.includes('@') === false) {
        setError("Invalid email");
      }
      else {
        await signup(user.email, user.password);
        navigate("/");
      }

    
    } catch (err) {
      console.log(err.code);

  
    
  }
  }

  return (
    <Stack>
      <Stack justify='center' align='center' mt='5rem'>
        <Text fontSize='2xl' color='blackAlpha.800'>
          Załóż konto
        </Text>
        <Image src={images.Decoration} alt='Decoration' w={140} mt='1rem' paddingBottom='2rem' />

        {error?.length > 0 && <Alert message={error} />}
        
        <Stack  align='center'w={300} h={280} background='blackAlpha.200' borderRadius='5px'>
        
          <Stack w={200}  >
            
              <FormControl>
                <FormLabel htmlFor='email' color='gray' fontSize='12px' mt='1rem'>Email</FormLabel>
                <Input id='email' type='email'  borderColor='blackAlpha.400' 
                  placeholder='youremail@company.tld'   fontSize='12px'
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                {/* <Text fontSize='xs' color='red' ml='4px'>{error}</Text> */}
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
                      <Icon onClick={handleClick} cursor='pointer'>
                        {show ? <ViewIcon  w={5} h={5}/> : < ViewOffIcon  w={5} h={5}/>}
                      </Icon>
                    </InputRightElement>                    
                  </InputGroup>
                  
                
                  {/* <Text fontSize='xs' color='red' ml='5px'>{error}</Text> */}

                  <FormLabel htmlFor='password' color='gray' fontSize='12px' mt='1rem'>Powtórz hasło</FormLabel>
                    <InputGroup size='md'>
                        <Input
                          pr='4.5rem'
                          type={show ? 'text' : 'password'}
                          placeholder='Enter password'
                          borderColor='blackAlpha.400'
                          fontSize='12px'
                          onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                        />
                      
                      </InputGroup>
              
              </FormControl>
            
          </Stack>
        </Stack>
    
        <Stack w={350} direction='row' justify='space-between'   align='center'>
          <Button variant='ghost' colorScheme='gray' fontSize='12px' fontWeight='normal' mt='1rem' color='gray'>
            <Link to='/login'> Zaloguj się </Link>
          </Button>
          <Stack pt='1rem'>
            <Text  color='gray'  >
              <Button onClick={handleSubmit} variant='ghost' colorScheme='gray' fontSize='12px' fontWeight='normal'>Załóż konto</Button>
            </Text>

          </Stack>
        </Stack>

      </Stack>
    </Stack>
  )
}

export default Register