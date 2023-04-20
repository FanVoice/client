import {
    VStack,
    Heading,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Input,
    IconButton,
    List,
    Box,
} from '@chakra-ui/react';
import { FilterIcon } from '../../components/FilterIcon';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import sport from '../../assets/sports.svg';
import people from '../../assets/people.svg';
import youtube from '../../assets/youtube.svg';
import handball from '../../assets/handball.svg';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import testImg from '../../assets/test-product.png';
import {
    tabsStyles,
    tabListStyles,
    tabStyles,
    tabPanelAllCards,
    tabPanelCategories,
    iconButtonStyles,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { h2TitleStyles } from '../../utils/styles';

type categoriesType = {
    categoryLogo: string;
    id: number;
    url: string;
    title: string;
};
const categoriesData: categoriesType[] = [
    { categoryLogo: sport, id: 1, url: 'sports', title: 'Виды спорта' },
    { categoryLogo: people, id: 2, url: 'clubs', title: 'Клубы' },
    { categoryLogo: youtube, id: 3, url: 'bloggers', title: 'Блогеры' },
    { categoryLogo: handball, id: 4, url: 'authlets', title: 'Спортсмены' },
];

export const Main = () => {
    const navigate = useNavigate();

    return (
        <VStack>
            <Heading sx={h2TitleStyles}>Маркетплейс</Heading>
            <Tabs sx={tabsStyles}>
                <TabList sx={tabListStyles}>
                    <Tab sx={tabStyles}>Все товары</Tab>
                    <Tab sx={tabStyles}>Категории</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel sx={tabPanelAllCards}>
                        <Box display="flex" gap="28px">
                            <Input
                                type="search"
                                w="276px"
                                placeholder="Поиск"
                            />
                            <IconButton
                                sx={iconButtonStyles}
                                aria-label="Фильтр"
                                icon={<FilterIcon />}
                            />
                        </Box>
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
                    <TabPanel sx={tabPanelCategories}>
                        {categoriesData.map((card) => {
                            return (
                                <CategoryCard
                                    src={card.categoryLogo}
                                    title={card.title}
                                    onClick={() => {
                                        navigate(`/categories/${card.url}`);
                                    }}
                                />
                            );
                        })}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    );
};
