import { List } from '@chakra-ui/react';

export const CardList = <T extends {}>({
    data,
    component,
}: {
    data?: T[] | undefined;
    component: React.ComponentType<{ data: T }>;
}) => {
    return (
        <List pt="20px" display="flex" flexDir="column" gap="20px">
            {data?.map((card) => {
                const Component = component;
                return <Component data={card} />;
            })}
        </List>
    );
};
