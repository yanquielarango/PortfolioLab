import {Stack, Text, Image, Heading,} from '@chakra-ui/react'
import { images} from '../contanst';


const About = () => {
  return (
    <Stack direction='row' mt='3rem' spacing='0' id='about' color='#3C3C3C'>
        <Stack w='50%'    background='#F0F1F1' align='center' justify='center' >
            <Heading as='h1' fontWeight='300' mb='1rem'> O nas</Heading>
            <Image src={images.Decoration} alt='decoration' w='150px' />
            <Stack>
                <Text w='400px' align='center' fontSize='xl' my='1rem' fontWeight='400'>Nori grape silver beet broccoli kombu beet 
                    greens fava bean potato quandong celery. 
                    Bunya nuts black-eyed pea
                    prairie turnip leek lentil turnip greens parsnip.
                </Text>
                <Image src={images.Signature} alt='signature' w='150px' alignSelf='flex-end'  />
            </Stack>
            
        </Stack>
        <Stack w='50%'>
            <Image src={images.People}  alt='People'/>
        </Stack>
    </Stack>
  )
}

export default About