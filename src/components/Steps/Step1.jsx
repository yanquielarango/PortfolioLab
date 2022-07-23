import {
  Stack,
  Heading,
  Text,
  Container,
  Image,
  Checkbox,
  Button,
} from "@chakra-ui/react";

import { images } from "../../contanst";
import { useDB } from "../../context/DbContext";
import React, { useState, useEffect } from "react"

const Step1 = () => {

  const { results, onSave, data, handleCheck } = useDB();


  const[values, setValues] = useState(results.items)



  const checkList = ['  ubrania, które nadają się do ponownego użycia', 'ubrania, do wyrzucenia', 'zabawki', 'książki', 'inne']


  return (
    <>
      <Stack h="100px" background="#FAD648" mt="8.85rem">
        <Stack w="800px" p="1rem" ml="2rem">
          <Container maxW="1200px" mx="auto" px={4} py={4}>
            <Heading as="h2" size="md">
              Ważne!
            </Heading>
            <Text fontSize="12px">{data.title?.[0]}</Text>
          </Container>
        </Stack>
      </Stack>
      <Stack h="400px" background="#ECE9DE">
        <Stack direction="row" background="#ECE9DE" h="100%">
          <Stack w="50%" px={16} py={4}>
            <Text fontSize="12px" mb="10px">
              Krok {data.steps?.[0]}/4
            </Text>
            <Heading as="h3"fontSize="16px" pb="1rem">
              Zaznacz co chcesz oddać:
            </Heading>
            <Stack spacing="1rem">
          
              {checkList.map((item, index) => (
                <Checkbox 
                size="md" 
                colorScheme="orange" 
                borderColor="gray"
                key={index}
                onChange={handleCheck}
                value={item}
                >
                <Text fontSize="12px">{item}</Text>
              </Checkbox>
              ))}
            
            </Stack>
            <Stack pt="4rem">
              <Button
                w="100px"
                colorScheme="yellow"
                variant="outline"
                cursor="pointer"
                onClick={() => onSave(values, "items")}
              >
                Dalej
              </Button>
            </Stack>
          </Stack>
          <Stack w="10%">
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

export default Step1;
