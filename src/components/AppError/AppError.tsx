import { Flex, Text } from '@chakra-ui/react';
import { errorMessageContainer, errorMessageText } from './styles';

type ErrorProps = {
    errorMessage: string;
  }

const AppError = ({ errorMessage }: ErrorProps) => {
    return (
        <Flex sx={errorMessageContainer}>
            <Text sx={errorMessageText}>{errorMessage}</Text>
        </Flex>
    );
};

export default AppError;
