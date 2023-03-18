import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { DASHBOARD } from '../../lib/routes'


const Navbar = () => {
  return (
    <Flex shadow='sm' pos='fixed' width='full' borderTop='6px solid' height='16' zIndex='3' justify='center' bg="white" borderBottomRadius='6'>
        <Flex px='4' w='full' align='center' maxW='1200px' bg='red'>
            <h1>Home</h1>

            <button className>
              Log Out
            </button>
        </Flex>
    </Flex>
  )
}

export default Navbar