import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

//Для desktop версии прописать медиазапросы max и min with
export const Root = () => {
    return (
        <Container
            as="main"
            className="root"
            bg="white"
            centerContent
            minW="390px"
            maxW="390px"
            minH="100vh"
            px={8}
            py={4}
        >
            <Outlet />
        </Container>
    );
};
