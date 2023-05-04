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
import Api from '../../utils/api';
import { CategoriesType } from '../../utils/types';

export const Main = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<CategoriesType[] | undefined>(
        undefined
    );
    const { isOpen, onOpen, onClose } = useDisclosure();
    const api = new Api();

    useEffect(() => {
        if (location.pathname === '/') {
            setTabIndex(0);
            return;
        }
        if (location.pathname === '/categories') {
            setTabIndex(1);
            return;
        }
    }, [location]);

    useEffect(() => {
        api.getCategories()
        .then((res) => {
            if (res?.data) {
                setCategories(res.data);
            }
        })
        .catch((err) => console.log(err));
    }, []);

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
                        {categories?.map((card) => {
                            return (
                                <CategoryCard
                                    src={card.photo}
                                    title={card.name}
                                    onClick={() => {
                                        navigate(`/categories/${card.id}`);
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
