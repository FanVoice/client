import { Heading } from '@chakra-ui/react';
import { logoStyles } from './styles';
import { h2TitleWithButtonStyles } from '../../utils/styles';
import { GoBackButton } from '../GoBackButton';
import { Logo } from '../Logo';

export const HeaderWithLogo = () => {
    return (
        <Heading
            sx={h2TitleWithButtonStyles}
            display="flex"
            justifyContent="flex-end"
        >
            <GoBackButton />
            <Logo sx={logoStyles} />
        </Heading>
    );
};
