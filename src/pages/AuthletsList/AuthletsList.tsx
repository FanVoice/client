import { AuthletsCard } from '../../components/AuthletsCard/AuthletsCard';
import authlets from '../../assets/authlets.png';
import { categoriesContainerStyles } from '../../utils/styles';
import { Box, Heading, VStack } from '@chakra-ui/react';

export const AuthletsList = () => {
    return (
        <VStack display="flex" justifyContent="center" width="390px">
            <Heading fontSize="xl" mt='13px'>Спортсмены</Heading>
            <AuthletsCard src={authlets} title="Кто-то" />
            <AuthletsCard src={authlets} title="Кто-то" />
            <AuthletsCard src={authlets} title="Кто-то" />
            <AuthletsCard src={authlets} title="Кто-то" />
        </VStack>
    );
};
