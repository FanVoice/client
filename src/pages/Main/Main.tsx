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
    useDisclosure,
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
import { useLocation, useNavigate } from 'react-router-dom';
import { h2TitleStyles } from '../../utils/styles';
import { useEffect, useState } from 'react';
import { FilterPopup } from '../../components/FilterPopup/FilterPopup';

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
    const locaion = useLocation();
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (locaion.pathname === '/') {
            console.log(0);
            setTabIndex(0);
            return;
        }
        if (locaion.pathname === '/categories') {
            console.log(1);
            setTabIndex(1);
            return;
        }
    }, [locaion]);

    const onTabChange = () => {
        if (tabIndex === 0) {
            navigate('/categories');
        }
        if (tabIndex === 1) {
            navigate('/');
        }
    };

    const onFilterOpen = () => {
        setIsFilterOpen(true);
        onOpen();
    };

    return (
        <VStack>
            <Heading sx={h2TitleStyles}>Маркетплейс</Heading>
            <Tabs sx={tabsStyles} onChange={onTabChange}>
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
                                _hover={{ background: 'transparent' }}
                                onClick={onFilterOpen}
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
            {isFilterOpen ? (
                <FilterPopup isOpen={isOpen} onClose={onClose} />
            ) : null}
        </VStack>
    );
};
