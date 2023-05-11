import Slider from 'react-slick';
import { ReactNode } from 'react';

type SliderProps = {
    dots?: boolean;
    appendDots?: (dots: ReactNode) => React.ReactElement;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    children: React.ReactNode[] | ReactNode;
};
const dotsComponent = (dots: ReactNode) => (
    <div>
        <ul style={{ paddingLeft: '0', marginLeft: '0' }}> {dots}</ul>
    </div>
);
export const AppSlider = ({
    // Наличие точек, которые показывают на каком слайде находимся
    dots = true,
    // Добавление разметки точек
    appendDots = dotsComponent,
    // После последнего слайда переходим ли снова на первый
    infinite = true,
    // Плавность переключения картинок
    speed = 500,
    // Сколько слайдов показывается
    slidesToShow = 1,
    // На сколько слайдов переворачиваем при прокрутке
    slidesToScroll = 1,
    children,
}: SliderProps) => {
    return (
        <Slider
            dots={dots}
            infinite={infinite}
            speed={speed}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
            appendDots={appendDots}
        >
            {children}
        </Slider>
    );
};
