import {
    VStack,
    Heading,
    Image,
    HStack,
    Text,
    List,
    Box,
    IconButton,
    Input,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';
import { GoBackButton } from '../../components/GoBackButton';
// import { h2TitleWithButtonStyles, paragrapghStyles } from '../../utils/styles';
import { Logo } from '../../components/Logo';
import club from '../../assets/clubs/RubinLogo2019.svg';
import testImg from '../../assets/test-product.png';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { cardImageStyles, h4HeadingStyles, logoStyles } from './styles';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import { FilterIcon } from '../../components/FilterIcon';
import {
    tabsStyles,
    tabListStyles,
    tabStyles,
    tabPanelAllCards,
    iconButtonStyles,
    tabPanelCategories,
} from '../Main/styles';

const Club = ({}) => {
    return (
        <VStack display="flex" justifyContent="center">
            <Heading
                // sx={h2TitleWithButtonStyles}
                display="flex"
                justifyContent="flex-end"
            >
                <GoBackButton />
                {/* <Logo sx={logoStyles} /> */}
            </Heading>
            <HStack>
                <Image src={club} alt="Название клуба" sx={cardImageStyles} />
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
                            <PersonCard
                                src={person}
                                title="Кто-то"
                                club="Спартак"
                                type="authlet"
                            />
                            <PersonCard
                                src={person}
                                title="Кто-то"
                                club="Спартак"
                                type="authlet"
                            />
                            <PersonCard
                                src={person}
                                title="Кто-то"
                                club="Спартак"
                                type="authlet"
                            />
                            <PersonCard
                                src={person}
                                title="Кто-то"
                                club="Спартак"
                                type="authlet"
                            />
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
