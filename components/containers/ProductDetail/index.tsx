/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Container,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { ProductType } from 'data/products';
import Image from 'next/image';

export default function ProductDetail({ data }: { data: ProductType }) {
  return (
    <>
      <Flex
        w={'full'}
        h={'40vh'}
        backgroundImage={data?.src}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-t, blackAlpha.800, blackAlpha.700)'}
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
              {data?.name}
            </Text>
          </Stack>
        </VStack>
      </Flex>

      <Container maxW={'5xl'} py={'3rem'} textAlign={'center'}>
        <Text
          fontFamily={'Playfair Display'}
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', md: '4xl' }}
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
          {data?.name}
        </Text>

        <Box
          mt={'2rem'}
          w={{ base: '300px', md: '450px' }}
          h={{ base: '300px', md: '450px' }}
          d={'block'}
          mx={'auto'}
          p={'2px'}
          bg={'#F0CF68'}
          borderRadius={'3px'}
        >
          {data && (
            <Image
              src={data?.src}
              alt={data?.alt}
              layout={'responsive'}
              width={'1'}
              height={'1'}
            />
          )}
        </Box>

        <Text
          mt={'2rem'}
          fontFamily={'Source Sans Pro'}
          maxW={'90%'}
          mx={'auto'}
        >
          {data?.desc}
        </Text>

        <Text
          mt={'2rem'}
          fontFamily={'Playfair Display'}
          fontSize={{ base: 'xl', md: '2xl' }}
        >
          Quantity
        </Text>

        <TableContainer maxW={'xl'} mx={'auto'} textAlign={'center'}>
          <Table>
            <TableCaption>Quantity based on container size</TableCaption>
            <Thead>
              <Tr>
                <Th>Container Size</Th>
                <Th isNumeric>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>20 ft</Td>
                <Td isNumeric>{data?.quantity['20ft']}</Td>
              </Tr>
              <Tr>
                <Td>40 ft</Td>
                <Td isNumeric>{data?.quantity['40ft']}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Text
          mt={'2rem'}
          fontFamily={'Playfair Display'}
          fontSize={{ base: 'xl', md: '2xl' }}
        >
          Specifications
        </Text>

        {data?.specification && (
          <TableContainer maxW={'xl'} mx={'auto'} textAlign={'center'}>
            <Table>
              <TableCaption>Product specification</TableCaption>
              <Thead>
                <Tr>
                  <Th>Container Size</Th>
                  <Th isNumeric>Quantity</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Object.entries(data?.specification as any).map(
                  ([key, value], id) => (
                    <Tr key={id}>
                      <Td>{key}</Td>
                      <Td isNumeric>{value as string}</Td>
                    </Tr>
                  )
                )}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
}
