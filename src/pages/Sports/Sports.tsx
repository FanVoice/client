import { Box, VStack, Heading, IconButton } from '@chakra-ui/react';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import {
    categoriesContainerStyles,
    h2TitleWithButtonStyles,
} from '../../utils/styles';
import { GoBackButton } from '../../components/GoBackButton';
import { useNavigate } from 'react-router-dom';
import Api from '../../utils/api';
import { useEffect, useState } from 'react';
import { SportsType } from '../../utils/types';

export const Sports = () => {
    const navigate = useNavigate();
    const [sports, setSports] = useState<SportsType[] | undefined>(undefined);
    const api = new Api();

    useEffect(() => {
        api.getCategory('sports')
            .then((res) => {
                if (res?.data) {
                    console.log(res);
                    setSports(res.data);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <VStack display="flex" justifyContent="center" width="390px">
            <Heading sx={h2TitleWithButtonStyles}>
                <GoBackButton />
                Виды спорта
            </Heading>
            <Box sx={categoriesContainerStyles}>
                {sports?.map((sport) => {
                    return (
                        <CategoryCard
                            key={sport.id}
                            src={sport.photo}
                            title={sport.name}
                            onClick={() => {
                                navigate(`/categories/sports/${sport.id}`);
                            }}
                        />
                    );
                })}
            </Box>
        </VStack>
    );
};
