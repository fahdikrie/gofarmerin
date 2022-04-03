import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function ProductNotFound() {
  return (
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
            Product Not Found
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
