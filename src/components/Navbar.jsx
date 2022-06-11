import {NavLink, Link} from 'react-router-dom';
import {Stack, Flex, Container, Text} from '@chakra-ui/react';



const Navbar = () => {
  return (
    <Stack >
      <Container maxW="1200px" mx="auto" px={4} py={4}>
        <Flex justify="flex-end" align="center" gap='2rem' color='gray'>
          <Text fontSize="sm"><Link to="/login" >Zaloguj</Link></Text>
          <Text fontSize="sm" border='1px' borderColor='yellow' p='.3rem'><Link to="/register" >Załóż konto</Link></Text> 
        </Flex>

        <Flex justify="flex-end" gap="2rem" color='gray' mt='1rem'>
          <NavLink to="/" >Start</NavLink>
          <NavLink to="/chodzi" >O co chodzi?</NavLink>
          <NavLink to="/about">O nas</NavLink>
          <NavLink to="/fundaction" >Fundacja i organizacje</NavLink>
          <NavLink to="/contact" >Kontakt</NavLink>
        </Flex>
      </Container>
    
    </Stack>
  )
}

export default Navbar