import { VStack, Heading, Image, HStack, Text, List } from '@chakra-ui/react';
import { paragrapghStyles } from '../../utils/styles';
import person from '../../assets/authlets.png';
import testImg from '../../assets/test-product.png';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { cardImageStyles, h4HeadingStyles } from './styles';
import { HeaderWithLogo } from '../../components/HeaderWithLogo/HeaderWithLogo';

type personDataType = {
    id: number;
    name: string;
    dateOfBirth: string;
    description: string;
    club: string;
    sportType: string;
    photo: string;
};

const personData: personDataType = {
    id: 0,
    name: 'Фамилия Имя Отчество',
    dateOfBirth: '01.01.1990',
    description:
        'Ad exercitation enim labore aliqua laborum tempor dolore exercitation aliqua Lorem sint quis est ut irure. Nisi elit non sit veniam fugiat cupidatat esse in. Ad minim sit in aliquip ipsum incididunt dolore laborum. Ut ea sit id exercitation ullamco duis elit amet non enim dolor nostrud.',
    club: 'Чудо название клуба',
    sportType: 'Футбол',
    photo: person,
};

type personProps = {
    type: 'authlet' | 'blogger';
};

export const Person = ({ type }: personProps) => {
    return (
        <VStack display="flex" justifyContent="center">
            <HeaderWithLogo />
            <Image
                src={personData.photo}
                alt={personData.name}
                sx={cardImageStyles}
            />
            <HStack width="100%" display="flex" justifyContent="space-between">
                <Heading as="h4" sx={h4HeadingStyles}>
                    {personData.name}
                </Heading>
                <Text sx={paragrapghStyles}>{personData.dateOfBirth}</Text>
            </HStack>
            {type === 'authlet' ? (
                <HStack width="100%" display="flex" mt="13px !important">
                    <Heading as="h4" sx={h4HeadingStyles}>
                        Клуб:
                    </Heading>
                    <Text>{personData.club}</Text>
                </HStack>
            ) : null}
            <Heading as="h4" sx={h4HeadingStyles} width="100%" mt="13px">
                О себе
            </Heading>
            <Text sx={paragrapghStyles}>{personData.description}</Text>
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
