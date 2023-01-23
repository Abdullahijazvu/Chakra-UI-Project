import { HStack, Icon, Text, StackProps, Box } from "@chakra-ui/react"
import React, { ElementType } from "react"
import {MoneyBackGuranteeIcon, MoneySubscriptionIcon, HassleFreeIcon} from "../icons/Icon"

interface FeatureProps extends StackProps{
    icon: ElementType
}

function Feature(props: FeatureProps){
    const { icon, children, ...rest } = props;
    return(
        <HStack {...rest} spacing='6'>
            <Icon as = {icon} boxSize='12'/>
            <Text textAlign={["left", "left", "left"]} fontSize="1xl" fontWeight="bold">{children}</Text>
        </HStack>
    )
}

export function Features(){
    return(
        <Box maxW="1024px" m="auto" pt="60px" pb="8" fontSize="18px" bg="white">
        <HStack px="12" spacing="5">
            <Feature icon={MoneyBackGuranteeIcon}>30 days money back Guarantee</Feature>
            <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
            <Feature icon={MoneySubscriptionIcon}>No monthly subscription Pay once and for all</Feature>
        </HStack>
        </Box>
    )
}