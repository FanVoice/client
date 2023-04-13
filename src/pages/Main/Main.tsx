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

export const Main = () => {
    const navigate = useNavigate();

    return (
        <VStack>
            <Heading sx={h2TitleStyles}>
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
                                aria-label="Фильтр"
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
                        <CategoryCard src={sport} title="Виды спорта" onClick={() => {navigate('/categories/sports')}}/>
                        <CategoryCard src={people} title="Клубы" onClick={() => {navigate('/categories/clubs')}} />
                        <CategoryCard src={handball} title="Спортсмены" onClick={() => {navigate('/categories/authlets')}} />
                        <CategoryCard src={youtube} title="Блогеры" onClick={() => {navigate('/categories/bloggers')}} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    );
};
