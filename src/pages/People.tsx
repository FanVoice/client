import { PersonCard } from '../components/PersonCard/PersonCard';
import { h2TitleWithButtonStyles } from '../utils/styles';
import { Heading, VStack } from '@chakra-ui/react';
import { GoBackButton } from '../components/GoBackButton';
import { useEffect, useState } from 'react';
import Api from '../utils/api';
import { CardList } from '../components/CardList';
import { peopleProps, personDataType } from '../utils/types';
import { personDataArray } from '../utils/MockData';

export const People = ({ type }: peopleProps) => {
    const [personData, setPersonData] = useState<personDataType[] | undefined>(
        undefined
    );
    const api = new Api();

    useEffect(() => {
        // api.getPersonInfo().then(
        //     (res) => {
        //         if (res?.data) {
        //             setPersonData(res.data);
        //         }
        //     }
        // );
        setPersonData(personDataArray);
    }, []);
    
    return (
        <VStack display="flex" justifyContent="center" gap="12px">
            <Heading sx={h2TitleWithButtonStyles}>
                <GoBackButton />
                {type === 'athlete' ? 'Спортсмены' : 'Блоггеры'}
            </Heading>
            <CardList data={personData} component={PersonCard} />
        </VStack>
    );
};
