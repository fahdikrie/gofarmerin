/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { ProductType } from 'data/products';
import Image from 'next/image';
import Link from 'next/link';
import { Key } from 'react';

export default function ProductSection({
  data,
  title,
}: {
  data: ProductType[];
  title: string;
}) {
  return (
    <Box py={'1.5rem'} textAlign={{ base: 'center', lg: 'left' }}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '2xl', md: '4xl' }}
      >
        <Text as={'span'} color={'green.600'} fontFamily={'Playfair Display'}>
          {title}
        </Text>
      </Heading>

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={4}
        mt={'2rem'}
        justifyItems={{ base: 'center', lg: 'initial' }}
      >
        {data.map((el: ProductType, id: Key) => (
          <Link href={el.url} passHref key={id}>
            <GridItem
              w={'280px'}
              h={'280px'}
              key={id}
              cursor={'pointer'}
              bg={'#F0CF68'}
              d={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              borderRadius={'2px'}
            >
              <Image width="273" height="273" src={el.src} alt={el.alt} />
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}
