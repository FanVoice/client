import { Button, Container, Text, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Error = () => (
    <Container
        as="main"
        className="root"
        bg="white"
        minW="100vw"
        minH="100vh"
        px={8}
        py={4}
        id="error-page"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
    >
        <Heading fontSize="2xl">Ошибка</Heading>
        <Text fontSize="md" mb={4}>
            Кажется, такой страницы не существует!
        </Text>
        <Link to="/">
            <Button colorScheme="orange">Вернуться на главную</Button>
        </Link>
    </Container>
);
