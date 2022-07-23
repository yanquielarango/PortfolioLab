import {Stack, Container, Text, Heading } from '@chakra-ui/react'

 
const HomeThreeColumns = () => {
  return (
    <Stack background='#FAD648' p={10}   color='#5E5322' id='kroki' >
        <Container maxW="1200px" mx="auto" px={4} py={4}>
          <Stack   direction='row' justify='space-between' align='center'>
            <Stack w='300px' align='center' textAlign='center' >
                <Heading as='h1' fontWeight='300' size='3xl' mb='.5rem'>10</Heading>
                <Text>ODDANYCH WORKÓW</Text>
                <Text fontSize='12px'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                  vel enim a elit viverra elementuma. Aliquam erat volutpat.</Text>
            </Stack>
            <Stack w='300px' align='center' textAlign='center'>
                <Heading as='h1' fontWeight='300' size='3xl' mb='.5rem'>5</Heading>
                <Text>WSPARTYCH ORGANIZACJI</Text>
                <Text fontSize='12px'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.</Text>
            </Stack>
            <Stack w='300px' align='center' textAlign='center' >
                <Heading as='h1' fontWeight='300' size='3xl' mb='.5rem'>7</Heading>
                <Text >ZORGANIZOWANY ZBIÓREK</Text>
                <Text  fontSize='12px'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.</Text>
            </Stack>
          </Stack>
        </Container>
        
    </Stack>
  )
}

export default  HomeThreeColumns