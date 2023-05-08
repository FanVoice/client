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
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { cardImageStyles, h4HeadingStyles, logoStyles } from './styles';
import {
    tabsStyles,
    tabListStyles,
    tabStyles,
    tabPanelAllCards,
    tabPanelCategories,
} from '../Main/styles';
import { PersonCard } from '../../components/PersonCard/PersonCard';
import { paragrapghStyles } from '../../utils/styles';
import { HeaderWithLogo } from '../../components/HeaderWithLogo/HeaderWithLogo';
import { CardList } from '../../components/CardList';
import { personDataArray, productDataArray } from '../../utils/MockData';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from '../../utils/api';
import { clubDataType } from '../../utils/types';

export const Club = ({}) => {
    const { slug } = useParams<{ slug?: string }>() || {};
    const api = new Api();
    const [club, setClub] = useState<clubDataType | undefined>(undefined);

    useEffect(() => {
        api.getClubInfo(slug).then((res) => {
            if (res?.data) {
                console.log(res)
                setClub(res.data);
            }
        });
    }, []);

    return (
        <VStack display="flex" justifyContent="center">
            <HeaderWithLogo />
            <HStack w="100%">
                <Image
                    src={club?.photo}
                    alt={club?.name}
                    sx={cardImageStyles}
                    pr="20px"
                />
                <VStack
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                >
                    <Heading as="h4" sx={h4HeadingStyles}>
                    {club?.name}
                    </Heading>
                    {/* Пока бэк не умеет такое отдавать, поэтому прячу */}
                    {/* <HStack>
                        <Text sx={paragrapghStyles}>Основан: </Text>
                        <Text sx={paragrapghStyles}>
                            {club.founding_date}
                        </Text>
                    </HStack> */}
                </VStack>
            </HStack>

            <Heading as="h4" sx={h4HeadingStyles} width="100%" mt="13px">
                О клубе
            </Heading>
            <Text sx={paragrapghStyles}>{club?.description}</Text>
            <Tabs sx={tabsStyles}>
                <TabList sx={tabListStyles}>
                    <Tab sx={tabStyles}>Спортсмены</Tab>
                    <Tab sx={tabStyles}>Предложения</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel sx={tabPanelAllCards}>
                        {/* заменить на данные с сервера */}
                        <CardList data={personDataArray} component={PersonCard} />
                    </TabPanel>
                    <TabPanel sx={tabPanelCategories}>
                        {/* заменить на данные с сервера */}
                        <CardList data={productDataArray} component={ProductCard} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    );
};
