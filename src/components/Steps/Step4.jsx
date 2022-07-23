

import {
  Stack,
  Heading,
  Text,
  Container,
  Image,
  Button,
  Textarea ,
  Input
} from "@chakra-ui/react";
import { images } from "../../contanst";

import { useDB } from "../../context/DbContext";


const Step4 = () => {

    const { data, handleChange, locations, back } = useDB();

  return (
    <>
      <Stack h="100px" background="#FAD648" mt="8.85rem">
        <Stack w="800px" p="1rem" ml="2rem">
          <Container maxW="1200px" mx="auto" px={4} py={4}>
            <Heading as="h2" size="md">
              Ważne!
            </Heading>
            <Text fontSize="12px">{[data.title?.[3]]}</Text>
          </Container>
        </Stack>
      </Stack>
      <Stack h="400px" background="#ECE9DE">
        <Stack direction="row" background="#ECE9DE" h="100%">
          <Stack w='100%' px={16} py={4}>
            <Text fontSize="12px"  mb="10px" >
              Krok {data.steps?.[3]}/4
            </Text>
            <Heading as="h3" fontSize="16px">
            Podaj adres oraz termin odbioru rzecz przez kuriera
            </Heading>
            <Stack direction="row" align="center"  w='100%' pt='1rem'>
              <Stack w='50%'>
                <Heading as='h5' fontSize='14px'>Adres odbioru</Heading>
                <Stack direction="row" align="center" >
                  <Text fontSize='12px' mr='2.2rem'>Ulica</Text>
                  <Input borderColor="#3C3C3C26" w='50%' h='50%'/>
                </Stack>
                <Stack direction="row" aalign="center" align="center">
                  <Text fontSize='12px' mr='1.5rem'>Miasto</Text>
                  <Input borderColor="#3C3C3C26" w='50%' h='50%'/>
                </Stack>
                <Stack direction="row" aalign="center" align="center">
                  <Text fontSize='12px' mr='.6rem'>Kod <hr></hr> pocztowy</Text>
                  <Input borderColor="#3C3C3C26" w='50%' h='50%'/>
                </Stack>
                <Stack direction="row" aalign="center" align="center">
                  <Text fontSize='12px' mr='1rem'>Numer <hr></hr>telefonu</Text>
                  <Input borderColor="#3C3C3C26" w='50%' h='50%' />
                </Stack>
              </Stack>

              <Stack w='50%'>
              <Heading as='h5' fontSize='14px'>Teermin odbioru</Heading>
              <Stack direction="row" aalign="center" align="center">
                  <Text fontSize='12px' mr='2.9rem'>Data</Text>
                  <Input borderColor="#3C3C3C26" w='50%' h='50%' />
                </Stack>
              <Stack direction="row" aalign="center" align="center">
                  <Text fontSize='12px' mr='1.7rem'>Godzina</Text>
                  <Input borderColor="#3C3C3C26" w='50%' h='50%' />
                </Stack>
              <Stack direction="row" aalign="center" align="center">
                  <Text fontSize='12px' mr='1rem'>Uwagi <hr></hr>dla kuriera</Text>
                  <Textarea  borderColor="#3C3C3C26" w='50%' h='50%' />
                </Stack>
              </Stack>
            </Stack>            
    
            <Stack pt="3.5rem" direction="row" spacing={6}>
              <Button w="100px" colorScheme="yellow" variant="outline" onClick={back}>
                  Wstecz
              </Button>
              <Button w="100px" colorScheme="yellow" variant="outline">
                Dalej
              </Button>
            </Stack>
          </Stack>
          <Stack w="130%">
            <Image
              src={images.BackgroundForm}
              alt="BackgroundForm"
              w="100%"
              h="100%"
              objectFit="cover"
              sx={{ mixBlendMode: "darken" }}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Step4;
