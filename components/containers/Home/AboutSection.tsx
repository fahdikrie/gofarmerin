import { Box, Text } from '@chakra-ui/react';
import { default as Products } from 'components/elements/AboutCarousel';

export default function AboutSection() {
  return (
    <Box
      id={'about'}
      h={'55vh'}
      bg={'#F0CF68'}
      textAlign={'center'}
      boxShadow={'0px 0px 10px 1px #cfcfcf'}
    >
      <Box maxW={'6xl'} mx={'auto'} py={'2rem'} h={'100%'}>
        <Text
          className={'section-title'}
          fontWeight={700}
          lineHeight={1.2}
          color={'green.800'}
          fontFamily={'sans-serif'}
          fontSize={{ base: 'xl', md: '3xl' }}
        >
          About Us
        </Text>

        <Text
          className={'section-about'}
          fontSize={{ base: 'xs', md: 'md' }}
          color={'#344B35'}
          fontWeight={600}
          mt={'1rem'}
          mx={'auto'}
          w={'80%'}
        >
          PT. Nusantara Farmer Jaya (Go Farmer Nusantara) is a supplier and
          exporter of agricultural products from Indonesia. We provide various
          types of agricultural products, especially coconut products, spices,
          and vegetables. Our company can also help you to get other good
          quality of the agricultural product.
        </Text>

        <Products />
      </Box>
    </Box>
  );
}
