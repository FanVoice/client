import { VStack, Heading, Image, HStack, Text, List } from '@chakra-ui/react';
import { paragrapghStyles } from '../../utils/styles';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { cardImageStyles, h4HeadingStyles } from './styles';
import { HeaderWithLogo } from '../../components/HeaderWithLogo/HeaderWithLogo';
import { peopleProps, personDataType, productDataType } from '../../utils/types';
import { CardList } from '../../components/CardList';
import { useParams } from 'react-router-dom';
import noPhoto from '../../assets/no-image.png';
import { useEffect, useState } from 'react';
import Api from '../../utils/api';

export const Person = ({ type }: peopleProps) => {
    const { slug } = useParams<{ slug?: string }>() || {};
    const api = new Api();
    const [person, setPerson] = useState<personDataType | undefined>(undefined);
    const [recommended, setRecommended] = useState<productDataType[] | undefined>(undefined);

    useEffect(() => {
        api.getPersonInfo(slug).then((res) => {
            if (res?.data) {
                setPerson(res.data);
            }
        });
        api.getRecommendedItems(`${type === 'athlete' ? 'athletes' : 'bloggers'}`, slug).then((res) => {
            if (res?.data) {
                setRecommended(res?.data);
            }
        });
    }, []);

    return (
        <VStack display="flex" justifyContent="center">
            <HeaderWithLogo />
            <Image
                src={person?.photo || noPhoto}
                alt={person?.name}
                sx={cardImageStyles}
            />
            <HStack width="100%" display="flex" justifyContent="space-between">
                <Heading as="h4" sx={h4HeadingStyles}>
                    {person?.name}
                </Heading>
                <Text sx={paragrapghStyles}>{person?.birthday}</Text>
            </HStack>
            {type === 'athlete' ? (
                <HStack width="100%" display="flex" mt="13px !important">
                    <Heading as="h4" sx={h4HeadingStyles}>
                        Клуб:
                    </Heading>
                    <Text>{person?.club_name}</Text>
                </HStack>
            ) : null}
            <Heading as="h4" sx={h4HeadingStyles} width="100%" mt="13px">
                О себе
            </Heading>
            <Text sx={paragrapghStyles}>{person?.bio}</Text>
            <Heading
                as="h4"
                sx={h4HeadingStyles}
                width="100%"
                mt="21px !important"
            >
                Предложения
            </Heading>
            <CardList data={recommended} component={ProductCard} />
        </VStack>
    );
};
