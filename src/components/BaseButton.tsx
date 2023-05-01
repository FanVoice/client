import { Button } from '@chakra-ui/react';

export const BaseButton = ({
    buttonText,
    onClick,
}: {
    buttonText: string;
    onClick: () => void;
}) => {
    return (
        <Button colorScheme="orange" w="328px" h="48px" onClick={onClick}>
            {buttonText}
        </Button>
    );
};
