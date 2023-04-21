import { Image } from '@chakra-ui/react';
import LogoImage from '../assets/logo.jpeg';

export type LogoProps = {
    size?: string;
    sx: object;
};

export const Logo = ({ size = '44px', sx }: LogoProps) => (
    <Image
        sx={sx}
        borderRadius="full"
        boxSize={size}
        src={LogoImage}
        alt="FanVoice Logo"
    />
);
