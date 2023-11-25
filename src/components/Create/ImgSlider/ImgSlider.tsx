import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as LeftIcon } from '@/assets/svg/chevron/chevron_left.svg';
import { ReactComponent as RightIcon } from '@/assets/svg/chevron/chevron_right.svg';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import './style.css';
import { v4 as uuid } from 'uuid';

type SliderProps = {
  images: string[];
  onClickImgEditModal: () => void;
};

export const ImgSlider = ({ images, onClickImgEditModal }: SliderProps) => {
  return (
    <div style={{ width: '348px', height: '348px', position: 'relative' }}>
      <LeftIcon
        className="prevBtn"
        style={{
          position: 'absolute',
          top: '50%',
          zIndex: 100,
          left: '10px',
          cursor: 'pointer',
        }}
      />
      <RightIcon
        className="nextBtn"
        style={{
          position: 'absolute',
          top: '50%',
          zIndex: 100,
          right: '10px',
          cursor: 'pointer',
        }}
      />
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        navigation={{
          nextEl: '.nextBtn',
          prevEl: '.prevBtn',
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {images.map((img) => {
          return (
            <SwiperSlide key={uuid()} style={{ border: '10px' }}>
              <img
                src={img}
                alt={img}
                style={{
                  width: '348px',
                  height: '348px',
                  backgroundPosition: 'center',
                  borderRadius: '20px',
                }}
                onClick={onClickImgEditModal}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
