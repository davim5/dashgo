import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';
import { Input } from '../components/Form/Input'

export default function Home() {
  return (
   <Flex
     w="100vw"
     h="100vh"
     align="center"
     justify="center"
   >
     <Flex
       as="form"
       w="100%"
       maxWidth={360}
       bg="gray.800"
       p="8" // 8x4 = 32px ou 8/4 = 2rem
       borderRadius={8}
       flexDir="column"
     >
      <Stack spacing="4">
      <Input type="email" name="email" label="E-mail"/>
      <Input type="password" name="password" label="Senha"/>
      </Stack>

      <Button
        type="submit"
        mt="6"
        colorScheme="pink"
        size="lg">Entrar</Button
      >
     </Flex>
   </Flex>
  )
}
