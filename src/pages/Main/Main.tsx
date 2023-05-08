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
import Api from '../../utils/api';
import { CategoriesType } from '../../utils/types';
import AppSpinner from '../../components/Spinner';
import AppError from '../../components/AppError/AppError';
import { errorMessages } from '../../utils/constants';

export const Main = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<CategoriesType[] | undefined>(
        undefined
    );
    const [items, setItems] = useState(undefined);
    const [isItemsLoading, setIsItemsLoading] = useState<boolean>(false);
    const [isItemsError, setIsItemsError] = useState<boolean>(false);
    const [isCategoriesLoading, setIsCategoriesLoading] =
        useState<boolean>(false);
    const [isCategoriesError, setIsCategoriesError] = useState<boolean>(false);
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
        if (location.pathname === '/') {
            setIsItemsLoading(true);
            api.getItems()
                .then((res) => {
                    if (res?.data) {
                        setItems(res.data);
                    }
                })
                .catch(() => setIsItemsError(true))
                .finally(() => setIsItemsLoading(false));
        }
        if (location.pathname === '/categories') {
            setIsCategoriesLoading(true);
            api.getCategories()
                .then((res) => {
                    if (res?.data) {
                        setCategories(res.data);
                    }
                })
                .catch(() => setIsCategoriesError(true))
                .finally(() => setIsCategoriesLoading(false));
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

    const onClick = (id: string | number) => {
        navigate(`/categories/${id}`);
    };

    const renderItems = () => {
        if (isItemsLoading) {
            return <AppSpinner />;
        } else {
            return <CardList data={items} component={ProductCard} />;
        }
    };

    const renderCategories = () => {
        if (isCategoriesLoading) {
            return <AppSpinner />;
        } else {
            return categories?.map((card) => {
                return (
                    <CategoryCard
                        key={card.id}
                        src={card.photo}
                        title={card.name}
                        id={card.id}
                        onClick={onClick}
                    />
                );
            });
        }
    };

    return (
        <VStack>
            <Heading sx={h2TitleStyles}>Маркетплейс</Heading>
            <Tabs sx={tabsStyles} index={tabIndex} onChange={onTabChange}>
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
                        {isItemsError ? (
                            <AppError errorMessage={errorMessages.base} />
                        ) : (
                            renderItems()
                        )}
                    </TabPanel>
                    <TabPanel sx={tabPanelCategories}>
                        {isCategoriesError ? (
                            <AppError errorMessage={errorMessages.base} />
                        ) : (
                            renderCategories()
                        )}
                    </TabPanel>
                </TabPanels>
            </Tabs>
            {isFilterOpen && <FilterPopup isOpen={isOpen} onClose={onClose} />}
        </VStack>
    );
};
