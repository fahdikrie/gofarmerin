import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';

export default function TitleSection() {
  return (
    <Flex
      w={'full'}
      h={'80vh'}
      backgroundImage={'/images/cloves1.jpeg'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-t, blackAlpha.600, blackAlpha.400)'}
        boxShadow={'0px 0px 10px 1px #6e5509'}
      >
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          <Text
            fontWeight={700}
            lineHeight={1.2}
            color={'#F0CF68'}
            fontFamily={'sans-serif'}
            fontSize={{ base: '3xl', md: '6xl' }}
          >
            Go Farmer Nusantara
            <Text d={'inline'} fontSize={{ base: '1xl', md: '2xl' }}>
              ®
            </Text>
          </Text>
          <Box
            color={'white'}
            fontWeight={'600'}
            fontSize={{ base: 'lg', md: 'xl' }}
            marginTop={'0.5rem!important'}
          >
            Your one stop solution for agricultural product needs.
          </Box>
          <Stack direction={'row'}>
            <Button
              bg={'green.600'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'green.700' }}
            >
              Lihat Produk
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
