import { Flex, Box, Text, Avatar} from '@chakra-ui/react';

export function Profile(){
    return(
        <Flex
        align="center"
        >
            <Box mr="4" textAlign="right">
                <Text>Davi Lima</Text>
                <Text color="gray.300" fontSize="smal">davim53@hotmail.com</Text>
            </Box>
        
            <Avatar size="md" name="Davi Lima" src="http://github.com/davim5.png"/>
        </Flex>
    );
}