import { Box, Button, Text } from '@chakra-ui/react';
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
      <Box maxW={'6xl'} mx={'auto'} pt={'2rem'} pb={'2.5rem'} h={'100%'}>
        <Text
          className={'about-title'}
          fontWeight={700}
          lineHeight={1.2}
          color={'green.800'}
          fontFamily={'Playfair Display'}
          fontSize={{ base: 'xl', md: '3xl' }}
        >
          {ABOUT_TITLE}
        </Text>

        <Text
          className={'about-description'}
          fontSize={{ base: 'md', md: 'lg' }}
          color={'#344B35'}
          fontFamily={'Source Sans Pro'}
          fontWeight={400}
          mt={'1rem'}
          mx={'auto'}
          w={'80%'}
        >
          {ABOUT_CONTENT}
        </Text>

        <Box className={'about-products'} mt={'2rem'}>
          <Products />
        </Box>

        <Button
          mt={'1.5rem'}
          bg={'green.600'}
          rounded={'full'}
          color={'white'}
          fontFamily={'Source Sans Pro'}
          _hover={{ bg: 'green.700' }}
        >
          See All Products
        </Button>
      </Box>
    </Box>
  );
}
