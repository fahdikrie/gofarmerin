import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GalleryType } from 'data/products';

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
`;

const DetailProductCarousel = ({ data }: { data: GalleryType[] }) => {
  return (
    <SCarousel>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          860: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {data.reverse().map((image, id) => (
          <SwiperSlide key={id}>
            <Box w="240px" h="320px">
              <Image
                layout="fill"
                objectFit="cover"
                src={image.src}
                alt={image.alt}
                priority
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </SCarousel>
  );
};

export default DetailProductCarousel;
