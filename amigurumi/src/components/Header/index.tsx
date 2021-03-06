import  { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { NotificationsNav } from './NotificationsNav'
import { Logo } from './Logo';
import { RiMenuLine } from 'react-icons/ri';
import { Profile } from './Profile';

export function Header(){
    const isWideVersion = useBreakpointValue( { 
        base: false,
        lg:true,
      })

    return (
      <Flex
        as="header"
        w="100%"
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
      > 
        
        <Logo />  

        <Flex align="center" ml="auto">
          <NotificationsNav />
          <Profile showProfileData={isWideVersion} />
        </Flex>
      </Flex>
    );
}