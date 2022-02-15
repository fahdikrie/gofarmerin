import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function TitleSection() {
  return (
    <Flex
      w={'full'}
      h={'90vh'}
      backgroundImage={'/images/cloves1.jpeg'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-t, blackAlpha.500, blackAlpha.600)'}
      >
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontFamily={'sans-serif'}
            fontSize={{ base: '3xl', md: '6xl' }}
          >
            Go Farmer Nusantara
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
            >
              Lihat Produk
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
