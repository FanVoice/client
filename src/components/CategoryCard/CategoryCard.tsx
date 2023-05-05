import { Card, CardBody, CardHeader, Heading, Image } from '@chakra-ui/react';
import { cardStyles, cardBodyStyles, cardImageStyles } from './styles';
import { h3TitleStyles } from '../../utils/styles';

export type CategoryCardProps = {
    src: string;
    title?: string;
    id?: string | number;
    onClick: (id: string | number) => void;
};
export const CategoryCard = ({
    src,
    title,
    id,
    onClick,
}: CategoryCardProps) => {
    const handleClick = (): void => {
        if (id) {
            onClick(id);
        }
    };

    return (
        <Card sx={cardStyles} onClick={handleClick}>
            <CardBody sx={cardBodyStyles}>
                <Image src={src} alt={title} sx={cardImageStyles} />
            </CardBody>
            <CardHeader p="0">
                <Heading as="h3" sx={h3TitleStyles}>
                    {title}
                </Heading>
            </CardHeader>
        </Card>
    );
};
