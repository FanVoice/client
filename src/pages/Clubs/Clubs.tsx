import { Box, VStack, Heading, IconButton } from '@chakra-ui/react';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import {
    categoriesContainerStyles,
    h2TitleWithButtonStyles,
} from '../../utils/styles';
import { GoBackButton } from '../../components/GoBackButton';
import { useNavigate } from 'react-router-dom';
import rubin from '../../assets/clubs/RubinLogo2019.svg';
import loko from '../../assets/clubs/FC_Lokomotiv 1.svg';
import spartak from '../../assets/clubs/FC_Spartak_Moscow_Logo 1.svg';
import ugmk from '../../assets/clubs/Ugmklogo 1.svg';

export const Clubs = () => {
    const navigate = useNavigate();
    return (
        <VStack display="flex" justifyContent="center">
            <Heading sx={h2TitleWithButtonStyles}>
                <GoBackButton />
                Клубы
            </Heading>
            <Box sx={categoriesContainerStyles}>
                <CategoryCard
                    src={rubin}
                    onClick={() => {
                        navigate('#');
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
