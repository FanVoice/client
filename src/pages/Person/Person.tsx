import { VStack, Heading, Image, HStack, Text, List } from '@chakra-ui/react';
import { paragrapghStyles } from '../../utils/styles';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { cardImageStyles, h4HeadingStyles } from './styles';
import { HeaderWithLogo } from '../../components/HeaderWithLogo/HeaderWithLogo';
import { peopleProps } from '../../utils/types';
import {
    personDataSingle,
    productDataArray,
} from '../../utils/MockData';
import { CardList } from '../../components/CardList';

export const Person = ({ type }: peopleProps) => {
    return (
        <VStack display="flex" justifyContent="center">
            <HeaderWithLogo />
            <Image
                src={personDataSingle.photo}
                alt={personDataSingle.name}
                sx={cardImageStyles}
            />
            <HStack width="100%" display="flex" justifyContent="space-between">
                <Heading as="h4" sx={h4HeadingStyles}>
                    {personDataSingle.name}
                </Heading>
                <Text sx={paragrapghStyles}>{personDataSingle.birthday}</Text>
            </HStack>
            {type === 'authlet' ? (
                <HStack width="100%" display="flex" mt="13px !important">
                    <Heading as="h4" sx={h4HeadingStyles}>
                        Клуб:
                    </Heading>
                    <Text>{personDataSingle.club_name}</Text>
                </HStack>
            ) : null}
            <Heading as="h4" sx={h4HeadingStyles} width="100%" mt="13px">
                О себе
            </Heading>
            <Text sx={paragrapghStyles}>{personDataSingle.bio}</Text>
            <Heading
                as="h4"
                sx={h4HeadingStyles}
                width="100%"
                mt="21px !important"
            >
                Предложения
            </Heading>
            <CardList data={productDataArray} component={ProductCard} />
        </VStack>
    );
};
