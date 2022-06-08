import { useEffect } from "react";
import Link from "next/link";
import { useQuery } from 'react-query';
import { RiAddLine } from "react-icons/ri";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";


export default function UserList() {
    const { data, isLoading, error } = useQuery('users', async () => { // useQuery('nomeDaQuery'), o nome da query será uma chave que será armazenada no cache
        // 2º parâmetro é a função que retornará os dados
        const response = await fetch('http://localhost:3000/api/users');
        const data = response.json();

        return data;
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    useEffect(() => {

    }, [])

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        {/* Passando passHref pois, Button não é uma tag "a" diretamente */}
                        <Link href="/   users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex>
                            <Text>Falha ao obter dados dos usuários</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th px={["0", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>Usuário</Th>
                                        {isWideVersion && <Th>Data de cadastro</Th>}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td px={["0", "4", "6"]}>
                                            <Checkbox colorScheme="pink" />
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Text fontWeight="bold">Guilherme Colares</Text>
                                                <Text fontSize="sm" color="gray.300">gcolares95@gmail.com</Text>
                                            </Box>
                                        </Td>
                                        {isWideVersion && <Td>04 de abril, 2021</Td>}

                                    </Tr>
                                </Tbody>
                            </Table>

                            <Pagination />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}