import { Box, Text } from '@chakra-ui/react';
import { default as Products } from 'components/elements/AboutCarousel';
import { ABOUT_CONTENT, ABOUT_TITLE } from './constants';

export default function AboutSection() {
  return (
    <Box
      id={'about'}
      h={'fit-content'}
      bg={'#F0CF68'}
      textAlign={'center'}
      boxShadow={'0px 0px 10px 1px #cfcfcf'}
    >
      <Box maxW={'6xl'} mx={'auto'} py={'2rem'} h={'100%'}>
        <Text
          className={'about-title'}
          fontWeight={700}
          lineHeight={1.2}
          color={'green.800'}
          fontFamily={'sans-serif'}
          fontSize={{ base: 'xl', md: '3xl' }}
        >
          {ABOUT_TITLE}
        </Text>

        <Text
          className={'about-description'}
          fontSize={{ base: 'xs', md: 'md' }}
          color={'#344B35'}
          fontWeight={600}
          mt={'1rem'}
          mx={'auto'}
          w={'80%'}
        >
          {ABOUT_CONTENT}
        </Text>

        <Box className={'about-products'} mt={'2rem'}>
          <Products />
        </Box>
      </Box>
    </Box>
  );
}
