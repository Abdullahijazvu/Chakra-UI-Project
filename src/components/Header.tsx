import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react"

export function Header(){
    return(
        <Box pb="28" as="section">
        <Box color="gray.50" bg="purple.600" pt="90px" pb="198px" px="8" textAlign={["center", "left", "center"]}>
            <Heading fontWeight="extrabold" fontSize={["6xl", "3xl", "5xl"]}>Simple pricing for your business</Heading>
            <Text fontWeight="medium" fontSize={['4xl', 'lg', '2xl']} pt="4">Plans that are carefully crafted to suit your business.</Text>
        </Box>
        </Box>
    );
}