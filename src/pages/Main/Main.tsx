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

export const Main = () => {
    return (
        <VStack>
            <Heading fontSize="xl" mt="13px">
                Маркетплейс
            </Heading>
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
                                aria-label="Search parameters"
                                icon={<FilterIcon />}
                            />
                        </Box>
                        <List pt="20px" display='flex' flexDir='column' gap='20px'>
                            <ProductCard src={testImg} title="test" />
                            <ProductCard src={testImg} title="sport" />
                            <ProductCard src={testImg} title="Название товара" />
                        </List>
                    </TabPanel>
                    <TabPanel sx={tabPanelCategories}>
                        <CategoryCard src={sport} title="Виды спорта" />
                        <CategoryCard src={people} title="Клубы" />
                        <CategoryCard src={handball} title="Спортсмены" />
                        <CategoryCard src={youtube} title="Блогеры" />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    );
};
