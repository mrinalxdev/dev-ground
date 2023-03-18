import React from 'react'
import { Flex, Button, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { DASHBOARD } from '../../lib/routes'
import {useLogout} from '../../hooks/auth'


const Navbar = () => {
  const {logout,isLoading } = useLogout()

  return (
    <Flex shadow='sm' pos='fixed' width='full' borderTop='6px solid' height='16' zIndex='3' justify='center' borderTopColor='white' borderBottomRadius='6'>
        <Flex px='4' w='full' align='center' maxW='1200px'>
            <Link to={DASHBOARD}>
              <Heading>DevPlayGround</Heading>
            </Link>

            <button className="bg-cyan-600 hover:bg-cyan-400 rounded-lg p-3 ml-auto" onClick={logout} isLoading={isLoading}>
              Log Out
            </button>
        </Flex>
    </Flex>
  )
}

export default Navbar