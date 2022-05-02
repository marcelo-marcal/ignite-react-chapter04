import { Flex, Stack, Text, Input, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
// import logon01 from '../../public/logo01.jpeg'

export function Header() {
  return (    
    <Flex
      as="form"
      width="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >

      <Text
        fontSize="2xl"
        fontWeight="bold" // Negrito
        letterSpacing="tight" // deixar a fonte mais unida
        width="64" // Largura
        color="grey"
      >
        Marçal
        <Text
          as="span"
          marginLeft="1"
          color="blue.500"
        >.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color="green.200"
        position="relative"
        background="gray.800"
        borderRadius="full"
      >
        <Input 
          color="gray.50"
          variant="unstyled"
          paddingX="4"
          marginRight="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
    </Flex>
  );
}
