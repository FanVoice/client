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
import { productDataType } from '../../utils/types';

export const ProductCard = ({ data }: { data: productDataType }) => {
    return (
        <Card key={data.id} sx={cardStyles}>
            <Image src={data.photo} alt={data.name} sx={cardImageStyles} />
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
