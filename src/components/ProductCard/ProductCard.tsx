import { Card, CardBody, Image, CardHeader, Heading } from '@chakra-ui/react';
import {
    cardStyles,
    cardImageStyles,
    cardHeadingStyles,
    cardBodyStyles,
} from './styles';

import './styles.css';

export type ProductCardProps = {
    src: string;
    title: string;
};

export const ProductCard = ({ src, title }: ProductCardProps) => {
    return (
        <Card sx={cardStyles}>
            <Image src={src} alt={title} sx={cardImageStyles} />
            <CardHeader p="0">
                <Heading sx={cardHeadingStyles}>{title}</Heading>
            </CardHeader>
            <CardBody className="product-card__body" sx={cardBodyStyles}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                quibusdam laudantium hic, consequuntur nobis libero asperiores
                tempora iste inventore magni labore, alias aspernatur quia
                dolore cum consequatur quidem. Praesentium, enim?
            </CardBody>
        </Card>
    );
};
