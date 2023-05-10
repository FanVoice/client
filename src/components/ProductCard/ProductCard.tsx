import {
    Card,
    CardBody,
    Image,
    CardHeader,
    Heading,
    Tag,
} from '@chakra-ui/react';
import {
    cardStyles,
    cardImageStyles,
    cardHeadingStyles,
    cardBodyStyles,
} from './styles';

import './styles.css';
import noPhoto from '../../assets/no-image.png';
import { productDataType } from '../../utils/types';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ data }: { data: productDataType }) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/items/${data.id}`);
    }
    return (
        <Card key={data.id} sx={cardStyles} onClick={onClick}>
            <Image src={data.photo || noPhoto} alt={data.name} sx={cardImageStyles} />
            <CardHeader p="0" display="flex" alignContent='center' justifyContent='space-between'>
                <Heading sx={cardHeadingStyles}>{data.name}</Heading>
                <Tag height='20px' margin='18px 16px 18px 0' variant="solid" colorScheme="orange">
                    {`${data.price} $`}
                </Tag>
            </CardHeader>
            <CardBody className="product-card__body" sx={cardBodyStyles}>
                {data.description}
            </CardBody>
        </Card>
    );
};
