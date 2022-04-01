/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import Image from 'next/image';

import { NavItemType, NAV_ITEMS } from './constants';
import useNavbarScroll from 'hooks/useNavbarScroll';
import useWindowSize from 'hooks/useWindowSize';

const NavLogoComponent = ({ width }: { width: number }) => {
  if (width > 767.9)
    return (
      <Image
        src={'/icons/logo/logo1.png'}
        alt={'logo1'}
        layout={'fixed'}
        width={134.6}
        height={36}
        priority
      />
    );
  else
    return (
      <Image
        src={'/icons/logo/logo2.png'}
        alt={'logo1'}
        layout={'fixed'}
        width={50}
        height={50}
        priority
      />
    );
};

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const isNavbarTransparent = useNavbarScroll();
  const { width } = useWindowSize();

  const useNavbarState = (state1: any, state2: any) =>
    isNavbarTransparent ? state1 : state2;

  return (
    <Box
      bg={isOpen ? 'white' : useNavbarState('transparent', 'white')}
      boxShadow={useNavbarState('unset', '0px 0px 10px 1px #817d7da0')}
      transition="all 0.3s ease-out"
      position={'fixed'}
      zIndex={'10'}
      w={'100vw'}
    >
      <Flex
        py={useNavbarState(
          { base: '1.25rem', md: '2.25rem' },
          { base: '0.75rem', md: '1rem' }
        )}
        minH={{ base: '4rem', md: '5rem' }}
        justifyContent={'space-between'}
        transition="all 0.3s ease-out"
        px={{ base: '1rem' }}
        align={'center'}
        maxW={'6xl'}
        mx={'auto'}
      >
        <Flex
          display={{ base: 'flex', md: 'none' }}
          position="absolute"
          mr={{ base: -2 }}
          right={'1rem'}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon color={isOpen ? 'gray.600' : 'white'} w={3} h={3} />
              ) : (
                <HamburgerIcon
                  color={isNavbarTransparent ? 'white' : 'gray.600'}
                  w={5}
                  h={5}
                />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex
          justifyContent={{ base: 'center', md: 'space-between' }}
          alignItems={'center'}
          w={'100%'}
        >
          {width && <NavLogoComponent width={width} />}

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const isNavbarTransparent = useNavbarScroll();

  const useNavbarState = (state1: string, state2: string) =>
    isNavbarTransparent ? state1 : state2;

  const linkColor = useNavbarState('white', 'gray.600');
  const linkHoverColor = useNavbarState('gray.200', 'gray.500');
  const popoverContentBgColor = useNavbarState('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontFamily={'Source Sans Pro'}
                fontWeight={600}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItemType) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: 'pink.50' }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={'white'} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItemType) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={'gray.600'}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.200'}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
