import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as LeftIcon } from '@assets/svg/leftArrow.svg';
import { ReactComponent as RightIcon } from '@assets/svg/rightArrow.svg';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@components/common/ImgSlider/style.css';
import { Pagination, Navigation } from 'swiper/modules';

type SliderProps = {
  images: string[];
  onClickImgEditModal: any;
};

const ImgSlider = ({ images, onClickImgEditModal }: SliderProps) => {
  return (
    <div style={{ width: '348px', height: '348px', position: 'relative' }}>
      <LeftIcon
        className="prevBtn"
        style={{ position: 'absolute', top: '50%', zIndex: 100 }}
      />
      <RightIcon
        className="nextBtn"
        style={{ position: 'absolute', top: '50%', right: 0, zIndex: 100 }}
      />
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        navigation={{
          nextEl: '.nextBtn',
          prevEl: '.prevBtn',
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}
      >
        {images.map((img) => {
          return (
            <SwiperSlide>
              <img
                src={img}
                style={{ width: '348px', height: '348px' }}
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
