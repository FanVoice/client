import { Box, VStack, Heading, IconButton } from '@chakra-ui/react';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import running from '../../assets/running.svg';
import football from '../../assets/football.svg';
import tennis from '../../assets/tennis.svg';
import valleyball from '../../assets/sports.svg';
import { categoriesContainerStyles } from '../../utils/styles';
import { GoBackButton } from '../../components/GoBackButton';
import { useNavigate } from 'react-router-dom';
import { goBackButtonStyles } from '../../utils/styles';
import rubin from '../../assets/clubs/RubinLogo2019.svg';
import loko from '../../assets/clubs/FC_Lokomotiv 1.svg';
import spartak from '../../assets/clubs/FC_Spartak_Moscow_Logo 1.svg';
import ugmk from '../../assets/clubs/Ugmklogo 1.svg';

export const Clubs = () => {
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
                    onClick={() => {
                        navigate(-1);
                    }}
                />{' '}
                Клубы
            </Heading>
            <Box sx={categoriesContainerStyles}>
                <CategoryCard
                    src={rubin}
                    onClick={() => {
                        navigate('/categories/clubs:slug');
                    }}
                />
                <CategoryCard
                    src={loko}
                    onClick={() => {
                        navigate('#');
                    }}
                />
                <CategoryCard
                    src={spartak}
                    onClick={() => {
                        navigate('#');
                    }}
                />
                <CategoryCard
                    src={ugmk}
                    onClick={() => {
                        navigate('#');
                    }}
                />
            </Box>
        </VStack>
    );
};
