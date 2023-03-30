import { Image } from '@chakra-ui/react';
import LogoImage from '../assets/logo.jpeg';

export type LogoProps = {
    size?: string;
};

export const Logo = ({ size = '44px' }: LogoProps) => (
    <Image
        borderRadius="full"
        boxSize={size}
        src={LogoImage}
        alt="FanVoice Logo"
    />
);
