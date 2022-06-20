import {Stack, Text, Image, Container, Button} from '@chakra-ui/react';
import { images} from '../contanst';
import { useAuth } from '../context/AuthContext';
import {  Link } from 'react-router-dom';



const SimpleSteps = () => {

    const { user} = useAuth();

    
  


  return (
    <>
        <Stack align="center" pt='2rem'>
            <Text fontSize="2xl" color='blackAlpha.700'>
                Wystarczą 4 proste kroki
            </Text>
            <Image src={images.Decoration}  alt='Decoration' w={200} mt='1rem' pb='2rem'  />
        </Stack>

        <Stack background='blackAlpha.200' p={8} color='black' >
            <Container maxW="800px" mx="auto" px={2} py={4}>
               <Stack   direction='row' justify='space-between' align='center'>
                <Stack  align='center' color='gray'>
                    <Image src={images.Icon1}  alt='Icon1' w='60px' />
                    <Text fontSize='12px'  fontWeight='bold'>Wybierz rzeczy</Text>
                    <Stack borderBottom='1px' color='gray' w='3rem'></Stack>
                    <Text  fontSize='12px' align='center'>ubrania, zabawki, <br/> sprzęt i inne</Text>
                </Stack>
                <Stack align='center'  color='gray'>
                    <Image src={images.Icon2}  alt='Icon2' w='60px' />
                    <Text fontSize='12px' color='gray' fontWeight='bold' >Spakuj je</Text>
                    <Stack borderBottom='1px' color='gray' w='3rem'></Stack>                
                    <Text fontSize='12px'  align='center'>skorzystaj z <br/> worków na śmieci </Text>
                </Stack>
                <Stack  align='center' color='gray'>
                    <Image src={images.Icon3}  alt='Icon3' w='60px' />
                    <Text fontSize='12px'  fontWeight='bold'>Zdecyduj komu <br/> chcesz pomóc</Text>
                    <Stack borderBottom='1px' color='gray' w='3rem'></Stack>
                    <Text fontSize='12px' align='center' >wybierz zaufanie  <br/>miejsce</Text>
                </Stack>
                <Stack  align='center' color='gray'>
                    <Image src={images.Icon4}  alt='Icon4' w='60px' />
                    <Text fontSize='12px'  fontWeight='bold'>Zamów kuriera</Text>
                    <Stack borderBottom='1px' color='gray' w='3rem'></Stack>
                    <Text  fontSize='12px' align='center' >kurier przyjedzie  <br/> w dogodnym terminie</Text>
                </Stack>
            </Stack>

            </Container>
        
    </Stack>

    <Stack align="center" pt='2rem'>
        <Button colorScheme='gray' variant='outline' p='2rem' color='gray' w={150}>                
            <Link to={!user ? '/login' : '/oddaj-rzeczy'}>
                ODDAJ <br></br>RZECZY
            </Link>
        </Button>
    </Stack>
    </>


  )
}

export default SimpleSteps