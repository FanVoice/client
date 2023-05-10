import { PersonCard } from '../components/PersonCard/PersonCard';
import { h2TitleWithButtonStyles } from '../utils/styles';
import { Heading, VStack } from '@chakra-ui/react';
import { GoBackButton } from '../components/GoBackButton';
import { useEffect, useState } from 'react';
import Api from '../utils/api';
import { CardList } from '../components/CardList';
import { CategoriesType, peopleProps} from '../utils/types';
import AppSpinner from '../components/Spinner';
import AppError from '../components/AppError/AppError';
import { errorMessages } from '../utils/constants';

export const People = ({ type }: peopleProps) => {
    const [people, setPeople] = useState<CategoriesType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean | undefined>(false);
    const [isError, setIsError] = useState<boolean | undefined>(undefined)
    const api = new Api();
    let url: string;

    if (type === 'athlete') {
        url = 'athletes';
    } else {
        url = 'bloggers';
    }
    const render = () => {
        if (isLoading) {
            return <AppSpinner />;
        } else {
            return <CardList data={people} component={PersonCard} />
        }
    };

    useEffect(() => {
        setIsLoading(true);
        api.getCategory(url)
            .then((res) => {
                if (res?.data) {
                    setPeople(res.data);
                }
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, []);
    return (
        <VStack display="flex" justifyContent="center" gap="12px">
            <Heading sx={h2TitleWithButtonStyles}>
                <GoBackButton />
                {type === 'athlete' ? 'Спортсмены' : 'Блоггеры'}
            </Heading>
            {isError ? <AppError errorMessage={errorMessages.base} /> : render()}
        </VStack>
    );
};
