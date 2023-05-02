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
import { CardList } from '../../components/CardList';
import { productDataArray } from '../../utils/MockData';
import { getCategories } from '../../store/CategoriesSlice';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store/rootReducer';
import { AnyAction } from '@reduxjs/toolkit';

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
    const location = useLocation();
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        if (location.pathname === '/') {
            setTabIndex(0);
            return;
        }
        if (location.pathname === '/categories') {
            setTabIndex(1);
            return;
        }
    }, [location.pathname]);

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
            <Tabs sx={tabsStyles} index={tabIndex} onChange={onTabChange}>
                <TabList sx={tabListStyles}>
                    <Tab sx={tabStyles} isSelected={tabIndex === 0}>
                        Все товары
                    </Tab>
                    <Tab sx={tabStyles} isSelected={tabIndex === 1}>
                        Категории
                    </Tab>
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
                        <CardList
                            data={productDataArray}
                            component={ProductCard}
                        />
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
            {isFilterOpen && <FilterPopup isOpen={isOpen} onClose={onClose} />}
        </VStack>
    );
};
