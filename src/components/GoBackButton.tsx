import { Image } from '@chakra-ui/react';
import arrow from '../assets/MdArrowBackIosNew.svg';

export const GoBackButton = () => {
    return (
        <Image src={arrow} alt='Вернуться назад' />
    );
};
