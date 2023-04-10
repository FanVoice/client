import { Box, VStack, Heading, IconButton } from '@chakra-ui/react';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import running from '../../assets/running.svg';
import basketball from '../../assets/basketball.svg';
import swimming from '../../assets/swimming.svg';
import football from '../../assets/football.svg';
import tennis from '../../assets/tennis.svg';
import valleyball from '../../assets/sports.svg';
import { categoriesContainerStyles } from '../../utils/styles';
import { GoBackButton } from '../../components/GoBackButton';
import { useNavigate } from 'react-router-dom';
import { goBackButtonStyles } from '../../utils/styles';

export const Sports = () => {
    const navigate = useNavigate();
    return (
        <VStack display="flex" justifyContent="center" width="390px">
            <Heading
                fontSize="xl"
                mt="13px"
                position="relative"
                width="328px"
                textAlign="center"
                justifyContent="center"
            >
                <IconButton
                    sx={goBackButtonStyles}
                    icon={<GoBackButton />}
                    aria-label="Вернуться назад"
                    onClick={() => {navigate(-1)}}
                />{' '}
                Виды спорта
            </Heading>
            <Box sx={categoriesContainerStyles}>
                <CategoryCard src={valleyball} title="Волейбол" onClick={() => {navigate('#')}} />
                <CategoryCard src={football} title="Футбол" onClick={() => {navigate('#')}} />
                <CategoryCard src={tennis} title="Теннис" onClick={() => {navigate('#')}} />
                <CategoryCard src={running} title="Бег" onClick={() => {navigate('#')}} />
                <CategoryCard src={swimming} title="Плавание" onClick={() => {navigate('#')}} />
                <CategoryCard src={basketball} title="Баскетбол" onClick={() => {navigate('#')}} />
            </Box>
        </VStack>
    );
};
