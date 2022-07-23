import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import {Stack, Container, Image, Flex, Text, Button} from '@chakra-ui/react';
import { images} from '../contanst'





const HomeHeader = () => {

    const { user } = useAuth();


    return (
        <Container maxW='1200px'mx="auto" px={4} py='1.025rem' id='home'>
            <Stack direction='row'>
                <Stack w='600px'>
                    <Image src={images.home} alt='Home' pos='absolute' top='0' left='-15%'  w='50%' h={600} objectFit='cover'/>
                </Stack>
            <Stack h='28.9rem'>
                <Flex direction='column' justify='center' align='center' mt='7rem'>
                    <Text fontSize='2xl' color='blackAlpha.700'fontWeight='semibold'>
                        Zacznij pomagać!
                    </Text>
                    <Text fontSize='2xl' color='blackAlpha.700'fontWeight='semibold' >
                        Oddaj niechciane rzeczy w zaufanie ręce
                    </Text>
                    <Image src={images.Decoration}  alt='Decoration' w={200} mt='1rem' mb='2rem' />
                </Flex>
                <Flex gap='2rem' justify='center' align='center' >
                    <Button colorScheme='gray' variant='outline' p='2rem' color='gray' w={150}>                
                        <Link to={!user ? '/login' : '/oddaj-rzeczy'}>
                            ODDAJ <br></br>RZECZY
                        </Link>
                    </Button>
                    <Button colorScheme='gray' variant='outline' p='2rem' color='gray' w={150}>
                        ZORGANIZUJ <br></br> ZBIÓRKĘ
                    </Button>
                </Flex>
            </Stack>
            </Stack>
    
        </Container>
    )
    }

export default HomeHeader