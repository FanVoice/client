import { Card, CardBody, CardHeader, Image, Tag } from '@chakra-ui/react';
import {
    cardBodyStyles,
    cardHeadingStyles,
    cardImageStyles,
    cardStyles,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

export const PersonCard = ({data}: any) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === '/categories/athletes') {
            navigate(`/categories/athletes/${data.id}`);
        }
        if (location.pathname === '/categories/bloggers') {
            navigate(`/categories/bloggers/${data.id}`);
        }
    };

    return (
        <Card key={data.id} sx={cardStyles} onClick={handleClick}>
            <Image src={data.photo} alt={data.name} sx={cardImageStyles} />
            <CardHeader p="0" sx={cardHeadingStyles}>
                {JSON.stringify(data.name)}
            </CardHeader>
            {/* Пока что бэк не умеет отдавать более полную информацию, поэтому прячем этот блок}

            {/* <CardBody sx={cardBodyStyles}>
                <Tag>{data.sport_type_name}</Tag>
                {data.type === 'athlete' ? <Tag>{data.club_name}</Tag> : null}
            </CardBody> */}
        </Card>
    );
};
