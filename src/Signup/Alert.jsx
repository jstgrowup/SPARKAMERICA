import { AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react'
import React from 'react'

export default function Alert() {
    return (
        <>
            <Box>
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>Email sent!</AlertTitle>
                    <AlertDescription>Please check your mail and get your verification link.</AlertDescription>
                    <CloseButton position={"absolute"} right={"8px"} top={"8px"}></CloseButton>
                </Alert>
            </Box>

        </>
    )
}
