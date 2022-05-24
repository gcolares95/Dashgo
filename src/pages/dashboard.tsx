import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ChartApex } from "../components/ChartApex";

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <ChartApex /> { /* Gráfico */}
                    </Box>
                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <ChartApex />  { /* Gráfico */}
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}