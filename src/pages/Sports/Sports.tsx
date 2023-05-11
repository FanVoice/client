import { Box, VStack, Heading } from '@chakra-ui/react';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import {
    categoriesContainerStyles,
    h2TitleWithButtonStyles,
} from '../../utils/styles';
import { GoBackButton } from '../../components/GoBackButton';
import { useNavigate } from 'react-router-dom';
import Api from '../../utils/api';
import { useEffect, useState } from 'react';
import { CategoriesType } from '../../utils/types';
import AppSpinner from '../../components/Spinner';
import AppError from '../../components/AppError/AppError';
import { errorMessages } from '../../utils/constants';

export const Sports = () => {
    const navigate = useNavigate();
    const [sports, setSports] = useState<CategoriesType[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean | undefined>(undefined);

    const api = new Api();

    useEffect(() => {
        setIsLoading(true);
        api.getCategory('sports')
            .then((res) => {
                if (res?.data) {
                    setSports(res.data);
                }
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, []);

    const onClick = (id: string | number) => {
        navigate(`/categories/sports/${id}`);
    };

    const render = () => {
        if (isLoading) {
            return <AppSpinner />;
        } else {
            return sports?.map((sport) => {
                return (
                    <CategoryCard
                        key={sport.id}
                        id={sport.id}
                        src={sport.photo}
                        title={sport.name}
                        alt={sport.photo ? sport.name : 'Изображение недоступно'}
                        onClick={onClick}
                    />
                );
            });
        }
    };
    return (
        <VStack display="flex" justifyContent="center" width="390px">
            <Heading sx={h2TitleWithButtonStyles}>
                <GoBackButton />
                Виды спорта
            </Heading>
            <Box sx={categoriesContainerStyles}>
                {isError ? (
                    <AppError errorMessage={errorMessages.base} />
                ) : (
                    render()
                )}
            </Box>
        </VStack>
    );
};
