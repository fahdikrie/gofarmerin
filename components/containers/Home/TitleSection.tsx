import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function TitleSection() {
  const router = useRouter();

  return (
    <Flex
      w={'full'}
      h={'70vh'}
      backgroundImage={'/images/cloves1.jpeg'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-t, blackAlpha.600, blackAlpha.400)'}
        boxShadow={'0px 0px 10px 1px #8f7833'}
      >
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          <Text
            fontWeight={900}
            lineHeight={1.2}
            color={'#F0CF68'}
            fontFamily={'Playfair Display'}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            Go Farmer Nusantara
          </Text>
          <Box
            color={'white'}
            textAlign={'center'}
            fontWeight={'600'}
            fontFamily={'Source Sans Pro'}
            fontSize={{ base: 'lg', md: 'xl' }}
            marginTop={'0.5rem!important'}
          >
            One stop solution for your agricultural product needs.
          </Box>
          <Stack direction={'row'}>
            <Button
              bg={'green.600'}
              rounded={'full'}
              color={'white'}
              fontFamily={'Source Sans Pro'}
              onClick={() => router.push('/products')}
              _hover={{ bg: 'green.700' }}
            >
              See Products
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
