import {Stack, Text, Image, Heading, Flex, Button, Container, Box, Center} from '@chakra-ui/react'
import { images} from '../contanst';

const Fundaction = () => {
  return (
    <>
        <Stack align="center" pt='2.5rem' id='fundaction'>
            <Text fontSize="2xl" color='blackAlpha.700'>
                Komu pomagamy?
            </Text>
            <Image src={images.Decoration}  alt='Decoration' w={150} mt='1rem' pb='2rem'  />
        </Stack>
        <Container maxW="1000px" mx="auto" px={2} py={4} align='center' color='gray'>
            <Stack w='500px' justify='space-between' align='center' direction='row'>
                <Button colorScheme='gray' variant='outline' size='lg'  fontSize='13px'>
                    Fundacjom
                </Button>
                <Button colorScheme='gray' variant='ghost' size='lg' fontSize='13px'>
                    Organizacjom <br/> pozarządowym
                </Button>
                <Button colorScheme='gray' variant='ghost' size='lg' fontSize='13px'>
                    Lokalnym <br/> zbiórkom
                </Button>
            </Stack>
            <Text fontSize='14px' w='400px' mt='2.5rem'>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </Text>

            <Stack w='800px' mt='3rem' direction='row' justify='space-between' align='center' >
                <Stack justify='flex-start' align='flex-start' color='gray'>
                    <Text fontSize='lg' fontWeight='400' as='h3' >
                        Fundacja “Dbam o Zdrowie”
                    </Text>
                    <Text fontSize='12px' >
                        Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                    </Text>
                </Stack>               
                <Text fontSize="10px">ubrania, jedzenie, sprzęt AGD, meble, zabawki</Text>
                
            </Stack>
            <Stack borderBottom='1px' color='gray' w='800px' mt='1rem'  ></Stack>
            <Stack w='800px' mt='1rem' direction='row' justify='space-between' align='center' >
                <Stack justify='flex-start' align='flex-start' color='gray'>
                    <Heading fontSize='lg' fontWeight='400' as='h3' >
                        Fundacja “Dla dzieci”
                    </Heading>
                    <Text fontSize='12px' >
                        Cel i misja: Pomoc dzieciom z ubogich rodzin.
                    </Text>
            
                </Stack>
                <Text fontSize="10px">ubrania, meble, zabawki</Text>                
            </Stack>
            <Stack borderBottom='1px' color='gray' w='800px' mt='1rem'></Stack>


            <Stack w='800px' mt='1rem' direction='row' justify='space-between' align='center' >
                <Stack justify='flex-start' align='flex-start' color='gray'>
                    <Heading fontSize='lg' fontWeight='400' as='h3' >
                        Fundacja “Bez domu”
                    </Heading>
                    <Text fontSize='12px' >
                        Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.
                    </Text>
                </Stack>            
                <Text fontSize="10px">ubrania, jedzenie, ciepłe koce</Text>
                
            </Stack>
            <Stack direction='row' mt='2.5rem' align='center' justify='center'>
            <Center w='30px' h='30px' border='1px'> 
                <Box as='span' fontWeight='300' fontSize='lg'>
                1
                </Box>
            </Center>
            <Center w='30px' h='30px'  >
                <Box as='span' fontWeight='300' fontSize='lg'>
                2
                </Box>
            </Center>
            <Center w='30px' h='30px' >
                <Box as='span' fontWeight='300' fontSize='lg'>
                3
                </Box>
            </Center>
            </Stack>
            
        </Container>
    </>
  )
}

export default Fundaction