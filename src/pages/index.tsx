import { Flex, Button, Stack, Radio, RadioGroup } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import styled from 'styled-components'

export default function SignIn() {
  return (
    <Flex
      w="100vw" // centralizar E <-> D
      h="100vh" // centralizar Ac <-> Ba
      alignItems="center" // Caixa altura form
      justifyContent="center" // Posição form
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        background="gray.800"
        padding="8" // * 4 = resultado em px
        borderRadius={8}
        flexDir="column"
      >
        <Flex
          justifyContent="center"
          h="45px"
          fontSize="23"
          color="#007565"
        >Faça seu login
        </Flex>

        <Stack spacing="3">
          <RadioGroup>
            <Stack
              spacing={2}
              direction="column"
            >
              <Flex
                padding="1px"
                direction="column"
                marginTop="5px"                
              >
              </Flex>
              <Radio
                size="lg"
                borderColor="#007565"
                borderRadius="3px"
                h={5}
                colorScheme="green"
                value="1"
              >Acesso médico
              </Radio>
              <Radio
                size="lg"
                borderColor="#007565"
                borderRadius="3px"
                colorScheme="green"
                value="2"
              >Acesso paciente
              </Radio>              
            </Stack>            
          </RadioGroup>

          <Input name='number' type='number' label='CRM' />
          <Input name='password' type='password' label='CPF' />
        </Stack>

        <Button
          type="submit"
          marginTop="5"          
          color="white"
          background="#007565"
          colorScheme="green"
          transition=" all 600ms inherit"
          size="lg"
        >Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

// <h1>SisLab - Sistema de Gerenciamento Laboratorial</h1>
// <h1>CEDAPP – Centro de Diagnostico Anatomopatológico</h1>