import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';

import PRODUCTS from 'data/products';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SCarousel = styled.div`
  display: block;
  margin: 0 auto;
  width: calc(273px * 1);

  @media (min-width: 860px) {
    width: calc((273px * 2) + (20px * 1));
  }

  @media (min-width: 1280px) {
    width: calc((273px * 3) + (20px * 2));
  }

  @media (min-width: 1440px) {
    width: calc((273px * 4) + (20px * 3));
  }
`;

const AboutCarousel = () => {
  return (
    <SCarousel>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          860: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {PRODUCTS.reverse().map((image, id) => (
          <SwiperSlide key={id}>
            <Box w="273px" h="273px">
              <Image layout="fill" src={image.src} alt={image.alt} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </SCarousel>
  );
};

export default AboutCarousel;
