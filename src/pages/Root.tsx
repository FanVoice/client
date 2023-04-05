import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const Root = () => {
    return (
        <Container
            as="main"
            className="root"
            bg="white"
            centerContent
            minW="100vw"
            minH="100vh"
            px={8}
            py={4}
        >
            <Outlet />
        </Container>
    );
};
