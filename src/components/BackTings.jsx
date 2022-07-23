
import {Stack, Container, Image, Flex, Text, Box} from '@chakra-ui/react';
import { images} from '../contanst'


const BackTings = () => {
  return (
    <Container maxW='1200px'mx="auto" px={4} py={4}>
    <Stack direction='row'>
      <Stack w='600px'>
       <Image src={images.formHero} alt='Home' pos='absolute' top='0' left='0'  w='50%' h={650} objectFit='cover '/>
      </Stack>
      <Stack>
        <Flex direction='column' justify='center' align='center' mt='3.86rem'>
          <Text fontSize='2xl' color='blackAlpha.700'fontWeight='semibold' align='center'>
            Oddaj  rzeczy, których  nie chcesz <br/> POTRZEBUJĄCYM
          </Text>
          <Image src={images.Decoration}  alt='Decoration' w={200} mt='1rem' mb='2rem' />
          <Text fontSize='2xl' color='blackAlpha.700'fontWeight='semibold' >
            Wystarczy 4 proste kroki:
          </Text>
          <Stack direction='row' mt='2.5rem'>
            <Flex w='80px' h='80px' border='1px' borderColor='gray' align='center' justify='center'  sx={{transform: 'rotate(-45deg)'}}>
              <Box  sx={{transform: 'rotate(45deg)'}}  >
                <Text  align='center' mt='-2rem'  fontSize='1.2rem'   color='blackAlpha.700'>1</Text>
                <Text  color='blackAlpha.700'fontWeight='semibold'  fontSize='12px' align='center' > Wybierz rzeczy</Text>
              </Box>
            </Flex>
            
            <Flex w='80px' h='80px'  border='1px' borderColor='gray'  align='center' justify='center'  sx={{transform: 'rotate(-45deg)'}}>
              <Box  sx={{transform: 'rotate(45deg)'}}  >
                <Text align='center'   mt='-2rem'  fontSize='1.2rem'   color='blackAlpha.700'>2</Text>
                <Text  color='blackAlpha.700'fontWeight='semibold'  fontSize='12px' align='center' > Spakuj je <br/> w worki</Text>
              </Box> 
            </Flex>

            <Flex w='80px' h='80px'  border='1px' borderColor='gray' justify='center'  sx={{transform: 'rotate(-45deg)'}}>
              <Box  sx={{transform: 'rotate(45deg)'}}  >
                <Text   fontSize='1.2rem'   color='blackAlpha.700' align='center' mt='-.6rem'>3</Text>
                <Text  color='blackAlpha.700'fontWeight='semibold'  fontSize='12px' align='center'  > Wybierz fundację</Text>
              </Box>
            </Flex>

            <Flex w='80px' h='80px'  border='1px' borderColor='gray' justify='center'  sx={{transform: 'rotate(-45deg)'}}>
              <Box  sx={{transform: 'rotate(45deg)'}}  >
                <Text  align='center' mt='-.7rem' fontSize='1.2rem'   color='blackAlpha.700'>4</Text>
                <Text  color='blackAlpha.700'fontWeight='semibold'  fontSize='12px' align='center' >Zamów kuriera</Text>
              </Box>
            </Flex>

          </Stack>
        </Flex>
        <Flex gap='2rem' justify='center' align='center' >
      

          
      
        </Flex>
      </Stack>
    </Stack>
   
   </Container>
  )
}

export default BackTings