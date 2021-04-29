import { Box, Button, Flex, Heading, Image, Spacer, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import { Input } from '../components/Form/Input'

export default function Login() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.700"
        p="6"
        borderRadius={8}
        flexDir="column"
      >
        <Flex>
          <Box d="flex">
            <Heading color="pink.200" fontFamily="Pacifico">
              Flor de Lis
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Image
              width="3"
              height="3"
              src="knitting-needles.png"
              boxSize="44px"
            />
          </Box>
        </Flex>
        <Box mt="5">
                
          {/* <Stack spacing="4" >
            <Input name="email" type="email" label="E-mail" placeholder="E-mail" focusBorderColor="pink.200"/>
            <Input ame="password" type="password" label="Senha"  placeholder="Senha" focusBorderColor="pink.200"/>
          </Stack> */}

          <Stack spacing="4">
            <Input
            name="email" 
            type="email" 
            label="E-mail" 
            />
            <Input 
            name="password" 
            type="password" 
            label="Senha" 
            
            />
        </Stack>
        </Box>



        <Button
        type="submit" 
        mt="6" 
        colorScheme="pink"
        size="lg"

        >
          Entrar
        </Button>
      </Flex>

    </Flex>
  );
}
