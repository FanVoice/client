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
import { clubData, personDataArray, productDataArray } from '../../utils/MockData';

export const Club = ({}) => {
    return (
        <VStack display="flex" justifyContent="center">
            <HeaderWithLogo />
            <HStack w="100%">
                <Image
                    src={clubData.logo}
                    alt={clubData.club_name}
                    sx={cardImageStyles}
                    pr="20px"
                />
                <VStack
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                >
                    <Heading as="h4" sx={h4HeadingStyles}>
                        {clubData.club_name}
                    </Heading>
                    <HStack>
                        <Text sx={paragrapghStyles}>Основан: </Text>
                        <Text sx={paragrapghStyles}>
                            {clubData.founding_date}
                        </Text>
                    </HStack>
                </VStack>
            </HStack>

            <Heading as="h4" sx={h4HeadingStyles} width="100%" mt="13px">
                О клубе
            </Heading>
            <Text sx={paragrapghStyles}>{clubData.description}</Text>
            <Tabs sx={tabsStyles}>
                <TabList sx={tabListStyles}>
                    <Tab sx={tabStyles}>Спортсмены</Tab>
                    <Tab sx={tabStyles}>Предложения</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel sx={tabPanelAllCards}>
                        <CardList data={personDataArray} component={PersonCard} />
                    </TabPanel>
                    <TabPanel sx={tabPanelCategories}>
                        <CardList data={productDataArray} component={ProductCard} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    );
};
