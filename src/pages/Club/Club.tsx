import {
    VStack,
    Heading,
    Image,
    HStack,
    Text,
    List,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';
import { GoBackButton } from '../../components/GoBackButton';
import { Logo } from '../../components/Logo';
import club from '../../assets/clubs/RubinLogo2019.svg';
import testImg from '../../assets/test-product.png';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { cardImageStyles, h4HeadingStyles, logoStyles } from './styles';
import person from '../../assets/authlets.png';
import {
    tabsStyles,
    tabListStyles,
    tabStyles,
    tabPanelAllCards,
    tabPanelCategories,
} from '../Main/styles';
import { PersonCard } from '../../components/PersonCard/PersonCard';
import { h2TitleWithButtonStyles, paragrapghStyles } from '../../utils/styles';
import { HeaderWithLogo } from '../../components/HeaderWithLogo/HeaderWithLogo';

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

const Club = ({}) => {
    return (
        <VStack display="flex" justifyContent="center">
            <HeaderWithLogo />
            <HStack w="100%">
                <Image
                    src={club}
                    alt="Название клуба"
                    sx={cardImageStyles}
                    pr="20px"
                />
                <VStack
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                >
                    <Heading as="h4" sx={h4HeadingStyles}>
                        Название клуба
                    </Heading>
                    <HStack>
                        <Text sx={paragrapghStyles}>Основан: </Text>
                        <Text sx={paragrapghStyles}>01.01.1990 </Text>
                    </HStack>
                </VStack>
            </HStack>

            <Heading as="h4" sx={h4HeadingStyles} width="100%" mt="13px">
                О клубе
            </Heading>
            <Text sx={paragrapghStyles}>
                Ad exercitation enim labore aliqua laborum tempor dolore
                exercitation aliqua Lorem sint quis est ut irure. Nisi elit non
                sit veniam fugiat cupidatat esse in. Ad minim sit in aliquip
                ipsum incididunt dolore laborum. Ut ea sit id exercitation
                ullamco duis elit amet non enim dolor nostrud.
            </Text>
            <Tabs sx={tabsStyles}>
                <TabList sx={tabListStyles}>
                    <Tab sx={tabStyles}>Спортсмены</Tab>
                    <Tab sx={tabStyles}>Предложения</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel sx={tabPanelAllCards}>
                        <List
                            pt="20px"
                            display="flex"
                            flexDir="column"
                            gap="20px"
                        >
                            {personData.map((card) => {
                                return (
                                    <PersonCard
                                        src={card.photo}
                                        title={card.name}
                                        club={card.club}
                                        sportType={card.sportType}
                                        type="authlet"
                                    />
                                );
                            })}
                        </List>
                    </TabPanel>
                    <TabPanel sx={tabPanelCategories}>
                        <List
                            pt="20px"
                            display="flex"
                            flexDir="column"
                            gap="20px"
                        >
                            <ProductCard src={testImg} title="test" />
                            <ProductCard src={testImg} title="sport" />
                            <ProductCard
                                src={testImg}
                                title="Название товара"
                            />
                        </List>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    );
};

export default Club;
