import { IconButton, Image } from '@chakra-ui/react';
import arrow from '../assets/MdArrowBackIosNew.svg';
import { useNavigate } from 'react-router-dom';
import { goBackButtonStyles } from '../utils/styles';

export const GoBackButton = () => {
    const navigate = useNavigate();
    return (
        <IconButton
            sx={goBackButtonStyles}
            icon={<Image src={arrow} alt="Вернуться назад" />}
            aria-label="Вернуться назад"
            onClick={() => {
                navigate(-1);
            }}
        />
    );
};
