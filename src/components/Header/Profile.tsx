import { Flex, Box, Text, Avatar} from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps){
    return(
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Davi Lima</Text>
                    <Text color="gray.300" fontSize="smal">davim53@hotmail.com</Text>
                </Box>    
            )}
        
            <Avatar size="md" name="Davi Lima" src="http://github.com/davim5.png"/>
        </Flex>
    );
}