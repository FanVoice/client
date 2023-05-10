import Slider from 'react-slick';
import { ReactNode } from "react";


type SliderProps = {
  dots?: boolean;
  appendDots?: (dots: ReactNode) => React.ReactElement;
  customPaging?: () => React.ReactElement;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  children: React.ReactNode[];
};

export const AppSlider = ({
  dots = true,
  appendDots = (dots) => (
    <div>
      <ul style={{ paddingLeft: '0', marginLeft: '0' }}> {dots}</ul>
    </div>
  ),
  infinite = true,
  speed = 500,
  slidesToShow = 1,
  slidesToScroll = 1,
  children,
}: SliderProps) => {
  return (
    <Slider dots={dots}
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