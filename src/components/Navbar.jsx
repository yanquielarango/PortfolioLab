import { Link, useNavigate} from 'react-router-dom';
import {Stack, Flex, Container, Text, Button} from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import { Link as Links } from 'react-scroll';





const Navbar = () => {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
      try {
        await logout();
        navigate('/logout');
      }catch (err) {
        console.log(err);
      }
  }

  return (
    <Stack >
      <Container maxW="1200px" mx="auto" px={4} py={4}>
        <Flex justify="flex-end" align="center" gap='2rem' color='gray'  >
          {user ? (
            <Stack justify="flex-end" align="center"  direction='row' spacing='1rem'>
            <Text fontSize="sm">{user.email}</Text>
            <Text fontSize="sm" border='1px' borderColor='yellow' p='.3rem'><Link to={!user ? '/login' : '/oddaj-rzeczy'}>Oddaj rzeczy</Link></Text>
            <Text onClick={handleLogout}  cursor='pointer' fontWeight='normal'  fontSize='14px' >Wyloguj</Text>
            </Stack>
          ) : <>
          <Button variant='ghost'  ><Link to="/login" >Zaloguj</Link></Button>
          <Button colorScheme='yellow' variant='outline'>
              <Link to="/register" >Załóż konto</Link>
          </Button>
          </>}
        
        </Flex>

        <Flex justify="flex-end" gap="2rem" color='gray' mt='1rem' cursor='pointer'>
          <Link to="/" >Start</Link>
          <Links to='kroki' spy={true} smooth={true} offset={50} >O co chodzi?</Links>
          <Links to="about" spy={true} smooth={true} offset={50}>O nas</Links>
          <Links to="fundaction" spy={true} smooth={true} offset={50} >Fundacja i organizacje</Links>
          <Links to="contact"  spy={true} smooth={true} offset={50}>Kontakt</Links>
        </Flex>
      </Container>
    
    </Stack>
  )
}

export default Navbar