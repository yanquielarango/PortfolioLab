import { useState, useEffect } from "react";

import {
  Stack,
  Heading,
  Text,
  Container,
  Image,
  Button,
  Select,
} from "@chakra-ui/react";
import { images } from "../../contanst";

import { useDB } from "../../context/DbContext";


const Step2 = () => {

    const { data,   handleChangeAmount, back, onSave } = useDB();

  return (
    <>
      <Stack h="100px" background="#FAD648" mt="8.85rem">
        <Stack w="800px" p="1rem" ml="2rem">
          <Container maxW="1200px" mx="auto" px={4} py={4}>
            <Heading as="h2" size="md">
              Ważne!
            </Heading>
            <Text fontSize="12px">{[data.title?.[1]]}</Text>
          </Container>
        </Stack>
      </Stack>
      <Stack h="400px" background="#ECE9DE">
        <Stack direction="row" background="#ECE9DE" h="100%">
          <Stack w="80%" px={16} py={4}>
            <Text fontSize="12px"  mb="10px" >
              Krok {data.steps?.[1]}/4
            </Text>
            <Heading as="h3" fontSize="16px" pb="1rem">
            Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
            </Heading>
            <Stack spacing="1rem" direction="row" align="center" pb='4rem'>
            <Text>Liczba 60l worków:</Text>
              <Select placeholder="---wybierz---"   borderColor="#3C3C3C26" w='30%'  >
              {new Array(10).fill(null).map((_, item) => (
                <option key={item} value={item + 1} onChange={handleChangeAmount}>{item + 1}</option>
              ))}
              

              </Select>
            </Stack>
            <Stack pt="7rem" direction="row" spacing={6}>
              <Button w="100px" colorScheme="yellow" variant="outline" onClick={back}>
                Wstecz
              </Button>
              <Button w="100px" colorScheme="yellow" variant="outline" onClick={() => onSave()}>
                Dalej
              </Button>
            </Stack>
          </Stack>
          <Stack w="150%">
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
