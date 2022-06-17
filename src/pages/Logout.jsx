import { Link } from 'react-router-dom'
import {Stack, Text, Image} from '@chakra-ui/react';
import {images} from '../contanst';


    const Logout = () => {
    return (
        <Stack>
        <Stack justify="center" align="center" mt="5rem">
            <Text fontSize="3xl" color="blackAlpha.800" align="center" >
            Wylogowanie nastąpiło  <br/> 
            pomyślnie!
            </Text>
            <Image
            src={images.Decoration}
            alt="Decoration"
            w={200}
            mt="1rem"
            paddingBottom="2rem"
            />
        
            <Stack
            align="center"
            w={300}
            h={220}
        
            >
            <Text border='1px' borderColor='gray.400' p='.5rem' >
                <Link to='/' >
                    Strona główna
                </Link>
            </Text>
            </Stack>

    
           
        
            
        </Stack>
        </Stack>
    );
    };

    export default Logout;
