import { Flex, Spinner } from '@chakra-ui/react';

const AppSpinner = () => {
    return (
        <Flex
            m="50px 0 !important"
            w="100%"
            h="100%"
            justifyContent="center"
            align="center"
        >
            <Spinner color="orange.500" />{' '}
        </Flex>
    );
};

export default AppSpinner;
