import { Box, Text } from '@chakra-ui/react';

export default function OurValuesSection() {
  return (
    <Box
      id={'our-values'}
      h={'fit-content'}
      bg={'#F0CF68'}
      textAlign={'center'}
      boxShadow={'0px 0px 10px 1px #cfcfcf'}
    >
      <Box maxW={'6xl'} mx={'auto'} pt={'2rem'} pb={'2.5rem'} h={'100%'}>
        <Text
          className={'our-values-title'}
          fontWeight={900}
          lineHeight={1.2}
          color={'green.800'}
          fontFamily={'Playfair Display'}
          fontSize={{ base: '2xl', md: '4xl' }}
          textDecoration={'underline'}
        >
          Our Values
        </Text>

        <Box className={'our-values'} mt={{ base: '2rem', md: '4rem' }}></Box>
      </Box>
    </Box>
  );
}
