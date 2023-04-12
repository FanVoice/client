import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Image,
    Tag,
} from '@chakra-ui/react';


type AuthletsCardProps = {
    title: string;
    src: string;
};

export const AuthletsCard = ({ title, src }: AuthletsCardProps) => {
    return (
        <Card>
            <CardBody>
                <Image src={src} alt={title} />
            </CardBody>
            <CardHeader>{title}</CardHeader>
            <CardFooter>
                <Tag>Футболист</Tag>
                <Tag>Название клуба</Tag>
            </CardFooter>
        </Card>
    );
};
