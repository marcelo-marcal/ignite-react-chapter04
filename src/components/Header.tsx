import { Flex, HStack, Text, Input, Icon, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'
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
          fontSize="50"
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

      <Flex
        align="center"
        marginLeft="auto"
      >
        <HStack 
          spacing="8"
          marginX="8"
          paddingRight="8"
          paddingY="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex
          align="center"          
        >
          <Box
            marginRight="4"
            textAlign="right" 
          >
            <Text>Marcelo Marçal</Text>
            <Text 
              color="gray.300"
              fontSize="small"
            >
              marcelo.a.marcal@hotmail.com
            </Text>
          </Box>
          <Avatar 
            size="md" 
            name="Marcelo Marçal" 
            src='https://avatars.githubusercontent.com/u/71234390?v=4' 
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
