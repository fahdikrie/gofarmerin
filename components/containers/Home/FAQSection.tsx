import { Box, Text } from '@chakra-ui/react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import FAQ from 'data/faq';

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
          <Accordion
            maxW={'80%'}
            mx={'auto'}
            bg={'white'}
            borderRadius={'20px'}
            overflow={'hidden'}
          >
            {FAQ.map(({ question, answer }, id) => (
              <AccordionItem key={id}>
                <h2>
                  <AccordionButton
                    bg={'gray.100'}
                    _focus={{
                      outline: 'none',
                      boxShadow: 'none',
                    }}
                  >
                    <Box
                      flex="1"
                      textAlign="left"
                      fontFamily={'Source Sans Pro'}
                      fontWeight={'600'}
                      fontSize={'lg'}
                    >
                      {question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  fontFamily={'Source Sans Pro'}
                  lineHeight={'2'}
                >
                  {answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}
