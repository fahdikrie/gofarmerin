import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';

export default function EmpowerIndonesianFarmerSection() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 12, md: 20 }}
        direction={'column'}
      >
        <Stack textAlign={'center'}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              fontFamily={'Playfair Display'}
              as={'span'}
              position={'relative'}
              color={'green.900'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#F0CF68',
                zIndex: -1,
              }}
            >
              Empowering
            </Text>
            <br />
            <Text
              as={'span'}
              color={'green.600'}
              fontFamily={'Playfair Display'}
            >
              Indonesian Farmer
            </Text>
          </Heading>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/images/farmer1.jpeg'}
            />
          </Box>
        </Flex>
        <Stack textAlign={'center'}>
          <Text
            color={'gray.700'}
            fontSize={'lg'}
            fontFamily={'Source Sans Pro'}
          >
            We strive to empower Indonesian farmers and bring Indonesian
            agricultural products to the world.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
