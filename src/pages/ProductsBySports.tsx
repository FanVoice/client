import { useEffect, useState } from 'react';
import { CardList } from '../components/CardList';
import { productDataType } from '../utils/types';
import Api from '../utils/api';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { HeaderWithLogo } from '../components/HeaderWithLogo/HeaderWithLogo';

export const ProductBySports = () => {
    const [recommended, setRecommended] = useState<
        productDataType[] | undefined
    >(undefined);
    const api = new Api();
    const { slug } = useParams<{ slug?: string }>() || {};

    useEffect(() => {
        api.getRecommendedItems('sports', slug).then((res) => {
            if (res?.data) {
                setRecommended(res?.data);
            }
        });
    }, []);

    return (
        <>
            <HeaderWithLogo />
            <CardList data={recommended} component={ProductCard} />
        </>
    );
};
