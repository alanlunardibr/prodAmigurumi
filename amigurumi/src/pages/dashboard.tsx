import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";

export default function Dashboard(){
    return(
        <Flex direction="column" h="100vh">
            <Header />
        </Flex>
    )
}
