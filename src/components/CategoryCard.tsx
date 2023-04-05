import { Card, CardBody, CardHeader, Image } from "@chakra-ui/react";

export type CategoryCardProps = {
    src: string;
    title: string;
}
export const CategoryCard = ({ src, title }: CategoryCardProps) => {
    return (<Card w='154px' p='20px 0' display='flex' flexDir='column' alignItems='center' gap='20px' >
        <CardBody w='100%' p='0' display='flex' justifyContent='center' >
            <Image
                src={src}
                alt={title}
                m='0'
            />
        </CardBody>
        <CardHeader p='0' fontSize='md' fontWeight='bold'>{title}</CardHeader>
    </Card>);
}

