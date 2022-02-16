import { Box, Text } from '@chakra-ui/react';

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
          fontWeight={700}
          lineHeight={1.2}
          color={'green.600'}
          fontFamily={'sans-serif'}
          fontSize={{ base: 'xl', md: '3xl' }}
        >
          About Us
        </Text>
      </Box>
    </Box>
  );
}
