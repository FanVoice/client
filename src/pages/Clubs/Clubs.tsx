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
import { CategoriesType } from '../../utils/types';
import AppSpinner from '../../components/Spinner';
import AppError from '../../components/AppError/AppError';
import { errorMessages } from '../../utils/constants';

export const Clubs = () => {
    const navigate = useNavigate();
    const [clubs, setClubs] = useState<CategoriesType[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean |undefined>(undefined);

    const api = new Api();

    useEffect(() => {
        setIsLoading(true);
        api.getCategory('clubs')
            .then((res) => {
                if (res?.data) {
                    setClubs(res.data);
                }
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, []);

    const onClick = (id: string | number) => {
        navigate(`/categories/clubs/${id}`);
    };

    const render = () => {
        if (isLoading) {
            return <AppSpinner />;
        } else {
            return clubs?.map((card) => {
                return (
                    <CategoryCard
                        key={card.id}
                        src={card.photo}
                        id={card.id}
                        onClick={onClick}
                    />
                );
            });
        }
    };

    return (
        <VStack display="flex" justifyContent="center">
            <Heading sx={h2TitleWithButtonStyles}>
                <GoBackButton />
                Клубы
            </Heading>
            <Box sx={categoriesContainerStyles}>
                {isError ? <AppError errorMessage={errorMessages.base} /> : render()}
            </Box>
        </VStack>
    );
};
