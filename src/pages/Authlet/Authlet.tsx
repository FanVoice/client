import { VStack, Heading, Image, HStack, Text, List } from '@chakra-ui/react';
import { GoBackButton } from '../../components/GoBackButton';
import { h2TitleWithButtonStyles, paragrapghStyles } from '../../utils/styles';
import { Logo } from '../../components/Logo';
import person from '../../assets/authlets.png';
import testImg from '../../assets/test-product.png';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { cardImageStyles, h4HeadingStyles, logoStyles } from './styles';

const Authlet = ({}) => {
    return (
        <VStack display="flex" justifyContent="center">
            <Heading
                sx={h2TitleWithButtonStyles}
                display="flex"
                justifyContent="flex-end"
            >
                <GoBackButton />
                <Logo sx={logoStyles} />
            </Heading>
            <Image
                src={person}
                alt="Фамилия Имя Отчество"
                sx={cardImageStyles}
            />
            <HStack width="100%" display="flex" justifyContent="space-between">
                <Heading as="h4" sx={h4HeadingStyles}>
                    Фамилия Имя Отчество
                </Heading>
                <Text sx={paragrapghStyles}>01.01.1990</Text>
            </HStack>
            <HStack width="100%" display="flex" mt="13px !important">
                <Heading as="h4" sx={h4HeadingStyles}>
                    Клуб:
                </Heading>
                <Text>Чудо название клуба</Text>
            </HStack>
            <Heading as="h4" sx={h4HeadingStyles} width="100%" mt="13px">
                О себе
            </Heading>
            <Text sx={paragrapghStyles}>
                Ad exercitation enim labore aliqua laborum tempor dolore
                exercitation aliqua Lorem sint quis est ut irure. Nisi elit non
                sit veniam fugiat cupidatat esse in. Ad minim sit in aliquip
                ipsum incididunt dolore laborum. Ut ea sit id exercitation
                ullamco duis elit amet non enim dolor nostrud.
            </Text>
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

export default Authlet;
