import { Box, VStack, Heading, IconButton } from '@chakra-ui/react';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import {
    categoriesContainerStyles,
    h2TitleWithButtonStyles,
} from '../../utils/styles';
import { GoBackButton } from '../../components/GoBackButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from '../../utils/api';
import { SportsType } from '../../utils/types';

export const Clubs = () => {
    const navigate = useNavigate();
    const [clubs, setClubs] = useState<SportsType[] | undefined>(undefined);
    const api = new Api();

    useEffect(() => {
        api.getCategory('clubs')
            .then((res) => {
                if (res?.data) {
                    console.log(res);
                    setClubs(res.data);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <VStack display="flex" justifyContent="center">
            <Heading sx={h2TitleWithButtonStyles}>
                <GoBackButton />
                Клубы
            </Heading>
            <Box sx={categoriesContainerStyles}>
                {clubs?.map((card) => {
                    return (
                        <CategoryCard
                            key={card.id}
                            src={card.photo}
                            onClick={() => {
                                navigate(`/categories/clubs/${card.id}`);
                            }}
                        />
                    );
                })}
            </Box>
        </VStack>
    );
};
