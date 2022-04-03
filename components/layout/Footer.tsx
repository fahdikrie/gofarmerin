import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  COCONUT_PRODUCTS,
  OTHER_PRODUCTS,
  SPICES_PRODUCT,
} from 'data/products';

const ListHeader = ({
  children,
  isHidden,
}: {
  children: ReactNode;
  isHidden?: boolean;
}) => {
  return (
    <Text
      fontWeight={'600'}
      visibility={isHidden ? 'hidden' : 'visible'}
      display={{ base: isHidden ? 'none' : 'block', md: 'block' }}
      fontSize={'lg'}
      mb={2}
    >
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  const router = useRouter();

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10} fontFamily={'Source Sans Pro'}>
        <SimpleGrid
          templateColumns={{ sm: '1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image
                src={'/icons/logo/logo1.png'}
                alt={'logo1'}
                layout={'fixed'}
                width={134.6}
                height={36}
                priority
              />
            </Box>
            <Text fontSize={'lg'} fontWeight={'600'}>
              PT. Nusantara Farmer Jaya
            </Text>
            <Text fontSize={'md'} whiteSpace={'pre-wrap'}>
              Phone/WhatsApp: +62 812 1130 4700 ptnusantarafarmerjaya@gmail.com
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Spices Products</ListHeader>
            {SPICES_PRODUCT.map((el, id) => (
              <Text
                key={id}
                cursor={'pointer'}
                onClick={() => router.push(`/products/${el.params.product}`)}
              >
                {el.name}
              </Text>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Coconut Products</ListHeader>
            {COCONUT_PRODUCTS.map((el, id) => (
              <Text
                key={id}
                cursor={'pointer'}
                onClick={() => router.push(`/products/${el.params.product}`)}
              >
                {el.name}
              </Text>
            ))}{' '}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Other Products</ListHeader>
            {OTHER_PRODUCTS.map((el, id) => (
              <Text
                key={id}
                cursor={'pointer'}
                onClick={() => router.push(`/products/${el.params.product}`)}
              >
                {el.name}
              </Text>
            ))}{' '}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Our Socials</ListHeader>
            <Link href={'https://www.instagram.com/gofarmernusantara/'}>
              Instagram
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
