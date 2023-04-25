import { PersonCard } from '../components/PersonCard/PersonCard';
import { h2TitleWithButtonStyles } from '../utils/styles';
import { Heading, VStack } from '@chakra-ui/react';
import { GoBackButton } from '../components/GoBackButton';
import person from '../assets/authlets.png';

type peopleProps = {
    type: 'authlet' | 'blogger';
};

type personDataType = {
    name: string;
    photo: string;
    sport_type_name: string;
    club: string;
};
const personData: personDataType[] = [
    { name: 'Кто-то', photo: person, sport_type_name: 'Футбол', club: 'Зенит' },
    { name: 'Кто-то', photo: person, sport_type_name: 'Тест1', club: 'Тест' },
    { name: 'Кто-то', photo: person, sport_type_name: 'Тест3', club: 'Тест2' },
];

export const People = ({ type }: peopleProps) => {
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
                        sportType={card.sport_type_name}
                        type={type}
                    />
                );
            })}
        </VStack>
    );
};
