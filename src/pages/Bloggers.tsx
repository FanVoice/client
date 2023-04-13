import { PersonCard } from '../components/PersonCard/PersonCard';
import person from '../assets/authlets.png';
import { h2TitleWithButtonStyles } from '../utils/styles';
import { Heading, VStack } from '@chakra-ui/react';
import { GoBackButton } from '../components/GoBackButton';

export const Bloggers = () => {
    return (
        <VStack display="flex" justifyContent="center" gap="12px">
            <Heading sx={h2TitleWithButtonStyles}>
                <GoBackButton />
                Блоггеры
            </Heading>
            <PersonCard src={person} title="Кто-то" club="Спартак" type='blogger'/>
            <PersonCard src={person} title="Кто-то" club="Спартак" type='blogger'/>
            <PersonCard src={person} title="Кто-то" club="Спартак" type='blogger'/>
            <PersonCard src={person} title="Кто-то" club="Спартак" type='blogger'/>
        </VStack>
    );
};
