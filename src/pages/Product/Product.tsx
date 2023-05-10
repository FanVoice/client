import { HeaderWithLogo } from '../../components/HeaderWithLogo/HeaderWithLogo';
import { AppSlider } from '../../components/Slider/Slider';
import { useParams } from 'react-router-dom';
import Api from '../../utils/api';
import { useEffect, useState } from 'react';
import { productDataType } from '../../utils/types';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import './styles.css';
import { HStack, Heading, Image, Text } from '@chakra-ui/react';
import { h4HeadingStyles, paragrapghStyles } from '../../utils/styles';
import { BaseButton } from '../../components/BaseButton';
import noPhoto from '../../assets/no-image.png';

const Product = () => {
    const { slug } = useParams<{ slug?: string }>() || {};
    const api = new Api();
    const [item, setItem] = useState<productDataType | undefined>(undefined);
    // TODO: информация о спортсмене или клубе пока некорректно отдается с бэка
    // const [club, setClub] = useState<clubDataType | undefined>(undefined);

    useEffect(() => {
        api.getItem(slug).then((res) => {
            if (res?.data) {
                setItem(res.data);
            }
        });
    }, []);
    const renderPhoto = (data: productDataType | undefined) => {
        if (data?.photo && typeof data?.photo === 'string') {
            return <Image src={data?.photo} alt={item?.name} />;
        }
        if (data?.photo && typeof data?.photo === 'object') {
            return (
                <AppSlider>
                    {/* TODO: Заменить Тест img когда в бэк положат норм данные */}
                    {data?.photo?.map((image: string) => {
                        return <img src={image} alt={data.name} />;
                    })}
                </AppSlider>
            );
        }
        return <Image src={noPhoto} alt={'Изображение недоступно'} />;
    };
    return (
        <>
            <HeaderWithLogo />
            <div className="slider">
                {renderPhoto(item)}
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
                {/* TODO: бэк пока некорректно отдает данные о связанном с продуктом спортсмене/клубе */}
                {/* <HStack
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
                </HStack> */}
                <BaseButton
                    buttonText="Приобрести"
                    // TODO: кнопка пока ничего не делает
                    onClick={() => console.log('test')}
                />
            </div>
        </>
    );
};

export default Product;
