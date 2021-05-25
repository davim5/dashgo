import { Text, Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebax";

export default function UserList() {
    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button
                         as="a" 
                         size="sm" 
                         fontSize="small" 
                         colorScheme="pink"
                         leftIcon={<Icon as={RiAddLine}></Icon>}
                         >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w="8"/>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td p="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Davi Lima</Text>
                                        <Text fontSize="sm" color="gray.300">davim53@hotmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril, 2021</Td>
                                <Td>
                                    <Button
                                    as="a" 
                                    size="sm" 
                                    fontSize="sm" 
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine} fontSize="16"></Icon>}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    );
}