import { Box, Text } from '@chakra-ui/react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

export default function FAQSection() {
  return (
    <Box
      id={'faq'}
      h={'fit-content'}
      bg={'#F0CF68'}
      textAlign={'center'}
      boxShadow={'0px 0px 10px 1px #cfcfcf'}
    >
      <Box maxW={'6xl'} mx={'auto'} pt={'2rem'} pb={'2.5rem'} h={'100%'}>
        <Text
          className={'faq-title'}
          fontWeight={900}
          lineHeight={1.2}
          color={'green.800'}
          fontFamily={'Playfair Display'}
          fontSize={{ base: '2xl', md: '4xl' }}
          textDecoration={'underline'}
        >
          Frequently Asked Questions
        </Text>

        <Box className={'faq'} mt={{ base: '2rem', md: '4rem' }}>
          <Accordion bg={'white'} borderRadius={'20px'} overflow={'hidden'}>
            <AccordionItem>
              <h2>
                <AccordionButton bg={'gray.100'}>
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton bg={'gray.100'}>
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}
