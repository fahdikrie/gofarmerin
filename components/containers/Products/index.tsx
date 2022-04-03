import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Container,
} from '@chakra-ui/react';
import {
  COCONUT_PRODUCTS,
  OTHER_PRODUCTS,
  SPICES_PRODUCT,
} from 'data/products';
import ProductSection from './ProductSection';

export default function Products() {
  return (
    <>
      <Flex
        w={'full'}
        h={'40vh'}
        backgroundImage={'/images/spices1.jpeg'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-t, blackAlpha.600, blackAlpha.400)'}
          boxShadow={'0px 0px 10px 1px #cfcfcf'}
        >
          <Stack maxW={'2xl'} align={'center'} spacing={6}>
            <Text
              fontWeight={900}
              lineHeight={1.2}
              color={'#F0CF68'}
              fontFamily={'Playfair Display'}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              Our Products
            </Text>
          </Stack>
        </VStack>
      </Flex>
      <Container maxW={'5xl'} py={'3rem'}>
        <ProductSection data={COCONUT_PRODUCTS} title={'Coconut Products'} />
        <ProductSection data={SPICES_PRODUCT} title={'Spices Products'} />
        <ProductSection data={OTHER_PRODUCTS} title={'Other Products'} />
      </Container>
    </>
  );
}
