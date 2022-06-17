import {Stack, Text} from '@chakra-ui/react';

const Alert = ({message}) => {
  return (
    <Stack  align='center'w={300}  background='red.100' borderRadius='5px'>
        <Text fontSize="sm" color='red.500' p='15px'>
        
          <li>
            {message}
          </li>
        </Text>
    </Stack>
  )
}

export default Alert