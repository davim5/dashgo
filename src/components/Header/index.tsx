import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';



export function Header(){
    return (
        <Flex
          as="header"
          w="100%"
          maxW={1488}
          h="20"
          mx="auto"
          marginTop="4"
          paddingX="6"
          align="center"
        >
            <Logo/>
            <SearchBox/>
            
            <Flex
            align="center"
            ml="auto"
            >
                <NotificationsNav/>
                <Profile/>     
            </Flex>
        </Flex>
    );
}