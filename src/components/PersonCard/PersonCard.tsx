import { Card, CardHeader, Image } from '@chakra-ui/react';
import noPhoto from '../../assets/no-image.png';

import {
    cardHeadingStyles,
    cardImageStyles,
    cardStyles,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { CategoriesType } from '../../utils/types';

export const PersonCard = ({ data }: { data: CategoriesType }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        navigate(`${location.pathname}/${data.id}`);
    };

    return (
        <Card key={data.id} sx={cardStyles} onClick={handleClick}>
            <Image src={data.photo || noPhoto} alt={data.photo ? data.name : 'Изображение недоступно'} sx={cardImageStyles} />
            <CardHeader p="0" sx={cardHeadingStyles}>
                {data.name}
            </CardHeader>
            {/* TODO: Пока что бэк не умеет отдавать более полную информацию, поэтому прячем этот блок}

            {/* <CardBody sx={cardBodyStyles}>
                <Tag>{data.sport_type_name}</Tag>
                {data.type === 'athlete' ? <Tag>{data.club_name}</Tag> : null}
            </CardBody> */}
        </Card>
    );
};
