import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as LeftIcon } from '@assets/svg/chevron/chevron_left.svg';
import { ReactComponent as RightIcon } from '@assets/svg/chevron/chevron_right.svg';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import '@components/Create/ImgSlider/style.css';

type SliderProps = {
  images: string[];
  onClickImgEditModal: () => void;
};

const ImgSlider = ({ images, onClickImgEditModal }: SliderProps) => {
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
            <SwiperSlide
              key={Math.floor(Math.random() * 1000)}
              style={{ border: '10px' }}
            >
              <img
                src={img}
                alt={img}
                style={{
                  width: '348px',
                  height: '348px',
                  backgroundPosition: 'center',
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
export default ImgSlider;
