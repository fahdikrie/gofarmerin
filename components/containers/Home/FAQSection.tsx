import { Box, Text } from '@chakra-ui/react';

export default function FAQSection() {
  return (
    <Box
      id={'faq'}
      h={'fit-content'}
      bg={'#9A481F'}
      textAlign={'center'}
      boxShadow={'0px 0px 10px 1px #7a4125'}
    >
      <Box maxW={'6xl'} mx={'auto'} pt={'2rem'} pb={'2.5rem'} h={'100%'}>
        <Text
          className={'faq-title'}
          fontWeight={900}
          lineHeight={1.2}
          color={'#F0CF68'}
          fontFamily={'Playfair Display'}
          fontSize={{ base: '2xl', md: '4xl' }}
          textDecoration={'underline'}
        >
          Frequently Asked Questions
        </Text>

        <Box className={'faq'} mt={{ base: '2rem', md: '4rem' }}></Box>
      </Box>
    </Box>
  );
}
