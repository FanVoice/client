import { HeaderWithLogo } from '../../components/HeaderWithLogo/HeaderWithLogo';
import { AppSlider } from '../../components/Slider/Slider';
import testImg from '../../assets/athletes.png';
import { useParams } from 'react-router-dom';
import Api from '../../utils/api';
import { useEffect, useState } from 'react';
import { clubDataType, productDataType } from '../../utils/types';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import './styles.css';
import { HStack, Heading, Image, Text } from '@chakra-ui/react';
import { paragrapghStyles } from '../../utils/styles';
import { h4HeadingStyles } from '../Person/styles';
import { BaseButton } from '../../components/BaseButton';
import noPhoto from '../../assets/no-image.png';

const Product = () => {
    const { slug } = useParams<{ slug?: string }>() || {};
    const api = new Api();
    const [item, setItem] = useState<productDataType | undefined>(undefined);
    const [club, setClub] = useState<clubDataType | undefined>(undefined);

    useEffect(() => {
        api.getItem(slug).then((res) => {
            if (res?.data) {
                setItem(res.data);
            }
        });
    }, []);

    useEffect(() => {
        if (item) {
            api.getClubInfo(item?.club_id).then((res) => {
                if (res?.data) {
                    setClub(res.data);
                }
            });
        }
    }, [item]);

    return (
        <>
            <HeaderWithLogo />

            <div className="slider">
                <AppSlider>
                    {/* Заменить Тест img когда в бэк положат норм данные */}
                    <img src={testImg} alt="Image 1" />
                    <img src={item?.photo || noPhoto} alt="Image 1" />
                </AppSlider>
                <HStack
                    mt="63px"
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                >
                    <Heading as="h4" sx={h4HeadingStyles}>
                        {item?.name}
                    </Heading>
                </HStack>
                <Text mt="11px" sx={paragrapghStyles}>
                    {item?.description}
                </Text>
                <HStack
                    mt="35px"
                    display="flex"
                    justifyContent="flex-end"
                    gap="13px"
                >
                    <Heading as="h4" sx={h4HeadingStyles}>
                        Имя Фамилия
                    </Heading>

                    <Image
                        src={club?.photo}
                        alt={club?.name}
                        overflow="hidden"
                    />
                </HStack>
                <BaseButton
                    buttonText="Приобрести"
                    onClick={() => console.log('test')}
                />
            </div>
        </>
    );
};

export default Product;
