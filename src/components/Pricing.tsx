import {Box, Button, Flex, Text, Heading, HStack, Icon, StackProps, Stack} from "@chakra-ui/react"
import React from "react"
import { CheckIcon } from "../icons/Icon"

export const ListItem = (props: StackProps) => {
    const {children, ...rest} = props;
    return(
        <HStack as="li" spacing="5" {...rest} alignItems="start">
            <Icon as={CheckIcon} w="22px" h="22px"/>
            <Text textAlign={["left", "left", "center"]}>{children}</Text>
        </HStack>
    )
}

export function Pricing(){
    return(
        <Box mx="6">
        <Box maxW="994px" margin="auto" mt="-256px" borderRadius="12px" overflow="hidden" boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);">
            <Flex direction={["column", "column", "row"]}>
                <Box bg="#F0EAFB" p="60px">
                    <Text textAlign={["left", "left", "center"]} fontWeight="extrabold" fontSize="2xl">Premium PRO</Text>
                    <Heading textAlign={["left", "left", "center"]} as="h3" fontSize={["5xl","5xl","6xl"]} mt="4">$329</Heading>
                    <Text color="#171923" textAlign={["left", "left", "center"]} fontSize="lg" mt="2" fontWeight="medium" >billed just once</Text>
                    <Button colorScheme="purple" size="lg" w="282px" mt="6" >Get Started</Button>
                </Box>
                <Box p="60px" fontSize="18px" bg="white">
                    <Text textAlign="left">Access these features when you get this pricing package for your business.</Text>
                    <Stack as="ul" spacing="20px" pt="6">
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Automated messages via Zapier</ListItem>
                        <ListItem>24/7 support and consulting</ListItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
        </Box>
    )
}