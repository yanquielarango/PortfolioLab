

import {
  Stack,
  Heading,
  Text,
  Container,
  Image,
  Button,
  Select,
  Input,
  Checkbox
} from "@chakra-ui/react";
import { images } from "../../contanst";

import { useDB } from "../../context/DbContext";


const Step2 = () => {

    const { data, handleChange,  back, onSave } = useDB();

    // const ckeckList =  ];

  return (
    <>
      <Stack h="100px" background="#FAD648" mt="8.85rem">
        <Stack w="800px" p="1rem" ml="2rem">
          <Container maxW="1200px" mx="auto" px={4} py={4}>
            <Heading as="h2" size="md">
              Ważne!
            </Heading>
            <Text fontSize="12px">{[data.title?.[2]]}</Text>
          </Container>
        </Stack>
      </Stack>
      <Stack h="400px" background="#ECE9DE">
        <Stack direction="row" background="#ECE9DE" h="100%">
          <Stack w="80%" px={16} py={4}>
            <Text fontSize="12px"  mb="10px" >
              Krok {data.steps?.[2]}/4
            </Text>
            <Heading as="h3" size="md">
            Lokalizacja:
            </Heading>
            <Stack spacing="1rem" direction="row" align="center" >
            
              <Select placeholder="---wybierz---"   borderColor="#3C3C3C26" w='30%' >
      
                {['Poznań', 'Warszawa', 'Kraków', 'Wrocław', 'Katowice'].map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}

              </Select>

            </Stack>            
            <Stack>
              <Heading as='h4' fontSize='12px' mt='10px'>
                  Komu chcesz pomóc?
              </Heading>
              <Stack spacing="1rem" direction="row" align="center"  fontSize="12px"  >
               {['dzieciom', 'samotnym matkom', 'bezdomnym'].map((item, index) => (
                <Checkbox 
                size="md" 
                colorScheme="orange" 
                borderColor="gray"
                key={index}
                // onChange={handleCheck}
                value={item}
                >
                <Text fontSize="12px">{item}</Text>
              </Checkbox>
              ))}
              </Stack>

              <Stack  spacing="1rem" direction="row" align="center"  fontSize="12px">
              {['niepełnosprawnym', 'osobom starszym'].map((item, index) => (
                <Checkbox 
                size="md" 
                colorScheme="orange" 
                borderColor="gray"
                key={index}
                // onChange={handleCheck}
                value={item}
                >
                <Text fontSize="12px">{item}</Text>
              </Checkbox>
              ))}
              </Stack>

              <Stack >
                <Heading as='h4' fontSize='12px' mt='10px'>
                  Wpisz nazwę konkretnej organizacji (opcjonalnie)
                </Heading>  
                <Input  size='sm'  w='60%' border='1px' borderColor='gray'/>
              </Stack>

            </Stack>
            <Stack pt="1rem" direction="row" spacing={6}>
              <Button w="100px" colorScheme="yellow" variant="outline" onClick={back}>
                  Wstecz
              </Button>
              <Button w="100px" colorScheme="yellow" variant="outline" onClick={() => onSave()}>
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

export default Step2;
