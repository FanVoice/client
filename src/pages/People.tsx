import { PersonCard } from '../components/PersonCard/PersonCard';
import person from '../assets/authlets.png';
import { h2TitleWithButtonStyles } from '../utils/styles';
import { Heading, VStack } from '@chakra-ui/react';
import { GoBackButton } from '../components/GoBackButton';
import { useEffect, useState } from 'react';
import Api from '../utils/api';
import { AxiosResponse } from 'axios';

type peopleProps = {
    type: 'authlet' | 'blogger';
};

type personDataType = {
    id: number;
    name: string;
    type: string;
    birthday: string | null;
    bio: string;
    club_id: number;
    club_name: string;
    photo: string | null;
    sport_type: number;
    sport_type_name: string;
};

export const People = ({ type }: peopleProps) => {
    const [personData, setPersonData] = useState<personDataType[]>([]);
    const api = new Api();

    useEffect(() => {
        api.getPersonInfo().then(
            (res) => {
                if (res?.data) {
                    setPersonData(res.data);
                }
            }
        );
    }, []);

    return (
        <VStack display="flex" justifyContent="center" gap="12px">
            <Heading sx={h2TitleWithButtonStyles}>
                <GoBackButton />
                {type === 'authlet' ? 'Спортсмены' : 'Блоггеры'}
            </Heading>

            {personData.map((card: any) => {
                return (
                    <PersonCard
                        src={card.photo}
                        title={card.name}
                        club={type === 'authlet' ? card.club : null}
                        sportType={card.sportType}
                        type={type}
                    />
                );
            })}
        </VStack>
    );
};
