import { PersonCard } from '../components/PersonCard/PersonCard';
import { h2TitleWithButtonStyles } from '../utils/styles';
import { Heading, VStack } from '@chakra-ui/react';
import { GoBackButton } from '../components/GoBackButton';
import { useEffect, useState } from 'react';
import Api from '../utils/api';
import { CardList } from '../components/CardList';
import { PeopleType, peopleProps, personDataType } from '../utils/types';

export const People = ({ type }: peopleProps) => {
    const [people, setPeople] = useState<PeopleType[] | undefined>(undefined);
    const api = new Api();

    let url: string;

    if (type === 'athlete') {
        url = 'athletes';
    } else {
        url = 'bloggers';
    }

    useEffect(() => {
        api.getCategory(url)
            .then((res) => {
                if (res?.data) {
                    console.log(res);
                    setPeople(res.data);
                }
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <VStack display="flex" justifyContent="center" gap="12px">
            <Heading sx={h2TitleWithButtonStyles}>
                <GoBackButton />
                {type === 'athlete' ? 'Спортсмены' : 'Блоггеры'}
            </Heading>
            <CardList data={people} component={PersonCard} />
        </VStack>
    );
};
