import { VStack, Heading, Tabs, Tab, TabList, TabPanels, TabPanel, Input, IconButton } from '@chakra-ui/react';
import { FilterIcon } from '../components/FilterIcon';
import { CategoryCard } from '../components/CategoryCard';
import sport from '../assets/sports.svg';
import people from '../assets/people.svg';
import youtube from '../assets/youtube.svg';
import handball from '../assets/handball.svg';


export const Main = () => {
    return (
        <VStack>
            <Heading fontSize="xl" mt='13px'>Маркетплейс</Heading>
            <Tabs colorScheme="orange" position="relative" variant="unstyled" width='328px'  >
                <TabList w='100%' mt='12px'>
                    <Tab borderBottom='2px solid #E2E8F0' w='50%' _selected={{ color: 'orange.500', borderBottom: '2px solid #ED8936' }}>Все товары</Tab>
                    <Tab borderBottom='2px solid #E2E8F0' w='50%' _selected={{ color: 'orange.500', borderBottom: '2px solid #ED8936' }}>Категории</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel display='flex' p='0' gap='28px' mt='20px'>
                        <Input type='search' w='276px' placeholder='Поиск' />
                        <IconButton aria-label='Search parameters' bg='transparent' icon={<FilterIcon />} />
                    </TabPanel>
                    <TabPanel display='flex' p='0' gap='20px' mt='34px' flexWrap='wrap'>
                        <CategoryCard src={sport} title='Виды спорта' />
                        <CategoryCard src={people} title='Клубы' />
                        <CategoryCard src={handball} title='Спортсмены' />
                        <CategoryCard src={youtube} title='Блогеры' />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    );
};
