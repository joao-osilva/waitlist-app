"use client";
import {Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {CloudIcon} from '../icons/CloudIcon';
import {TestIcon} from '../icons/TestIcon';
import {ReuseIcon} from '../icons/ReuseIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features = () => {
   return (
      <>
         <Box
            css={{
               px: '$6',
               pb: '$14',
            }}
         >
            <Flex
               align={'center'}
               justify={'center'}
               wrap={'wrap'}
               css={{
                  gap: '1rem',
                  pt: '$14',
               }}
            >
               <Text
                  css={{
                     fontSize: '24px',
                  }}
               >
                  Foundational AI agents manifest
               </Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     color: '$accents8',
                     textAlign: 'center',
                     fontSize: '18px',
                  }}
               >
                  Foundational AI agents are built with the purpose to reduce effort duplication, increase knowledge sharing and unlock a more composable approach to complex AI systems. A set of core design principles can be used to steer its implementation:
               </Text>
               <Card css={{mw: '450px'}}>
                  <Card.Body>                     
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5 weight={'medium'}>
                              Bounded context
                           </Text>
                           <Text 
                              span
                              css={{
                                 color: '$accents8',
                              }}
                           >
                              Single responsibility enables finer-grained and 
                              decoupled solutions with more deterministic outcomes
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '450px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <CloudIcon />
                        <Flex direction={'column'}>
                           <Text h5 weight={'medium'}>
                              Accessible as a service
                           </Text>
                           <Text 
                              span
                              css={{
                                 color: '$accents8',
                              }}
                           >
                              Functionalities exposed as services (API) allows easier consumption, 
                              hiding implementation details, dependencies and complexities
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
            <Flex
               align={'center'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  gap: '1rem',
                  pt: '$8',
               }}
            >
               <Card css={{mw: '450px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <TestIcon />
                        <Flex direction={'column'}>
                           <Text h5 weight={'medium'}>
                              Testable and measurable
                           </Text>
                           <Text 
                              span
                              css={{
                                 color: '$accents8',
                              }}
                           >
                              Standardized input/output schema and task decomposition into 
                              smaller goals bring order to the chaos and quantifiable progress
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '450px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <ReuseIcon />
                        <Flex direction={'column'}>
                           <Text h5 weight={'medium'}>
                              Built for reuse
                           </Text>
                           <Text 
                              span
                              css={{
                                 color: '$accents8',
                              }}
                           >
                              Modularity increases reusability by enabling composition, 
                              which can drastically decrease time-to-market
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
         </Box>
      </>
   );
};
