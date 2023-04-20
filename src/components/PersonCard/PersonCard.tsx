import { Card, CardBody, CardHeader, Image, Tag } from '@chakra-ui/react';
import {
    cardBodyStyles,
    cardHeadingStyles,
    cardImageStyles,
    cardStyles,
} from './styles';

type PersonCardProps = {
    title: string;
    src: string;
    club: string | null;
    type: string;
    sportType: string;
};
import { useNavigate } from 'react-router-dom';

export const PersonCard = ({
    title,
    src,
    club,
    type,
    sportType,
}: PersonCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (type === 'authlet') {
            navigate('/categories/authlets:slug');
        }
        if (type === 'blogger') {
            navigate('/categories/bloggers:slug');
        }
    };

    return (
        <Card sx={cardStyles} onClick={handleClick}>
            <Image src={src} alt={title} sx={cardImageStyles} />
            <CardHeader p="0" sx={cardHeadingStyles}>
                {title}
            </CardHeader>
            <CardBody sx={cardBodyStyles}>
                <Tag>{sportType}</Tag>
                {type === 'authlet' ? <Tag>{club}</Tag> : null}
            </CardBody>
        </Card>
    );
};
