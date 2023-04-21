import { PersonCard } from '../components/PersonCard/PersonCard';
import person from '../assets/authlets.png';
import { h2TitleWithButtonStyles } from '../utils/styles';
import { Heading, VStack } from '@chakra-ui/react';
import { GoBackButton } from '../components/GoBackButton';

type peopleProps = {
    type: 'authlet' | 'blogger';
};

type personDataType = {
    name: string;
    club: string;
    photo: string;
    sportType: string;
};

const personData: personDataType[] = [
    {
        name: 'Кто-то',
        club: 'Спартак',
        photo: person,
        sportType: 'Футбол',
    },
    {
        name: 'Кто-то',
        club: 'Спартак',
        photo: person,
        sportType: 'Футбол',
    },
    {
        name: 'Кто-то',
        club: 'Спартак',
        photo: person,
        sportType: 'Футбол',
    },
];

export const People = ({ type }: peopleProps) => {
    return (
        <VStack display="flex" justifyContent="center" gap="12px">
            <Heading sx={h2TitleWithButtonStyles}>
                <GoBackButton />
                {type === 'authlet' ? 'Спортсмены' : 'Блоггеры'}
            </Heading>

            {personData.map((card) => {
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
