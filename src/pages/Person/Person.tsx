import { VStack, Heading, Image, HStack, Text, List } from '@chakra-ui/react';
import { paragrapghStyles } from '../../utils/styles';
import testImg from '../../assets/test-product.png';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { cardImageStyles, h4HeadingStyles } from './styles';
import { HeaderWithLogo } from '../../components/HeaderWithLogo/HeaderWithLogo';
import { useEffect, useState } from 'react';
import Api from '../../utils/api';
import person from '../../assets/authlets.png';

type personProps = {
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

export const Person = ({ type }: personProps) => {
    const [personData, setPersonData] = useState<personDataType | undefined>(undefined);

    const api = new Api();
    useEffect(() => {
        api.getPersonInfo().then((res) => {
            if (res?.data) {
                setPersonData(res.data);
            }
        });
    }, []);

    return (
        <VStack display="flex" justifyContent="center">
            <HeaderWithLogo />
            <Image
                src={personData?.photo || person}
                alt={personData?.name}
                sx={cardImageStyles}
            />
            <HStack width="100%" display="flex" justifyContent="space-between">
                <Heading as="h4" sx={h4HeadingStyles}>
                    {personData?.name}
                </Heading>
                <Text sx={paragrapghStyles}>{personData?.birthday}</Text>
            </HStack>
            {type === 'authlet' ? (
                <HStack width="100%" display="flex" mt="13px !important">
                    <Heading as="h4" sx={h4HeadingStyles}>
                        Клуб:
                    </Heading>
                    <Text>{personData?.club_name}</Text>
                </HStack>
            ) : null}
            <Heading as="h4" sx={h4HeadingStyles} width="100%" mt="13px">
                О себе
            </Heading>
            <Text sx={paragrapghStyles}>{personData?.bio}</Text>
            <Heading
                as="h4"
                sx={h4HeadingStyles}
                width="100%"
                mt="21px !important"
            >
                Предложения
            </Heading>
            <List pt="17px" display="flex" flexDir="column" gap="20px">
                <ProductCard src={testImg} title="test" />
                <ProductCard src={testImg} title="sport" />
                <ProductCard src={testImg} title="Название товара" />
            </List>
        </VStack>
    );
};
