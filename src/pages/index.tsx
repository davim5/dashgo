import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form';

type SignInFormData = {
  email:string;
  password:string;
}

export default function Home() {

  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise( resolve => setTimeout(resolve,2000));
    console.log(values);
  }

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
       onSubmit={handleSubmit(handleSignIn)}
     >
      <Stack spacing="4">
      <Input type="email" name="email" label="E-mail" {...register("email")}/>
      <Input type="password" name="password" label="Senha" {...register("password")}/>
      </Stack>

      <Button
        type="submit"
        mt="6"
        colorScheme="pink"
        isLoading={formState.isSubmitting}
        size="lg">Entrar</Button
      >
     </Flex>
   </Flex>
  )
}
