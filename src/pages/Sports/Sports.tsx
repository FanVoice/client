import { Box, VStack, Heading, IconButton } from '@chakra-ui/react';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import running from '../../assets/running.svg';
import basketball from '../../assets/basketball.svg';
import swimming from '../../assets/swimming.svg';
import football from '../../assets/football.svg';
import tennis from '../../assets/tennis.svg';
import valleyball from '../../assets/sports.svg';
import {
    categoriesContainerStyles,
    h2TitleWithButtonStyles,
} from '../../utils/styles';
import { GoBackButton } from '../../components/GoBackButton';
import { useNavigate } from 'react-router-dom';

export const Sports = () => {
    const navigate = useNavigate();
    return (
        <VStack display="flex" justifyContent="center" width="390px">
            <Heading sx={h2TitleWithButtonStyles}>
                <GoBackButton />
                Виды спорта
            </Heading>
            <Box sx={categoriesContainerStyles}>
                <CategoryCard
                    src={valleyball}
                    title="Волейбол"
                    onClick={() => {
                        navigate('#');
                    }}
                />
                <CategoryCard
                    src={football}
                    title="Футбол"
                    onClick={() => {
                        navigate('#');
                    }}
                />
                <CategoryCard
                    src={tennis}
                    title="Теннис"
                    onClick={() => {
                        navigate('#');
                    }}
                />
                <CategoryCard
                    src={running}
                    title="Бег"
                    onClick={() => {
                        navigate('#');
                    }}
                />
                <CategoryCard
                    src={swimming}
                    title="Плавание"
                    onClick={() => {
                        navigate('#');
                    }}
                />
                <CategoryCard
                    src={basketball}
                    title="Баскетбол"
                    onClick={() => {
                        navigate('#');
                    }}
                />
            </Box>
        </VStack>
    );
};
