import { Heading, Box } from '@chakra-ui/react'
import React from 'react'

const Header = ({title}) => {
  return (
    <Box p={4} shadow={"md"}>
        <Heading>{title}</Heading>
    </Box>
  )
}

export default Header