import { Image } from '@chakra-ui/react';
import LogoImage from '../assets/logo.jpeg';
import { useNavigate } from 'react-router-dom';

export type LogoProps = {
    size?: string;
    sx: object;
};

export const Logo = ({ size = '44px', sx }: LogoProps) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
    };

    return (
        <Image
            sx={sx}
            borderRadius="full"
            cursor="pointer"
            boxSize={size}
            src={LogoImage}
            alt="FanVoice Logo"
            onClick={onClick}
        />
    );
};
