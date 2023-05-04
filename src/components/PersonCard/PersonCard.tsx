import { Card, CardBody, CardHeader, Image, Tag } from '@chakra-ui/react';
import {
    cardBodyStyles,
    cardHeadingStyles,
    cardImageStyles,
    cardStyles,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { personDataType } from '../../utils/types';

export const PersonCard = ({
    data
}: {data: personDataType}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (data.type === 'athlete') {
            navigate('/categories/athletes:slug');
        }
        if (data.type === 'blogger') {
            navigate('/categories/bloggers:slug');
        }
    };

    return (
        <Card sx={cardStyles} onClick={handleClick}>
            <Image src={data.photo} alt={data.name} sx={cardImageStyles} />
            <CardHeader p="0" sx={cardHeadingStyles}>
                {data.name}
            </CardHeader>
            <CardBody sx={cardBodyStyles}>
                <Tag>{data.sport_type_name}</Tag>
                {data.type === 'athlete' ? <Tag>{data.club_name}</Tag> : null}
            </CardBody>
        </Card>
    );
};
