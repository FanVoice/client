import { Card, CardBody, CardHeader, Heading, Image } from '@chakra-ui/react';
import { cardStyles, cardBodyStyles, cardImageStyles, cardHeadingStyles } from './styles';

export type CategoryCardProps = {
    src: string;
    title: string;
};
export const CategoryCard = ({ src, title }: CategoryCardProps) => {
    return (
        <Card sx={cardStyles}>
            <CardBody sx={cardBodyStyles}>
                <Image src={src} alt={title} sx={cardImageStyles} />
            </CardBody>
            <CardHeader p='0' >
                <Heading sx={cardHeadingStyles}>{title}</Heading>
            </CardHeader>
        </Card>
    );
};
