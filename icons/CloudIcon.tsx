import React from 'react';
import {Box} from '../styles/box';
import {Svg} from '../styles/svg';

export const CloudIcon = () => {
   return (
      <Box
         css={{
            width: 'auto',
            height: 'fit-content',
         }}
      >
         <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <Svg.Path
               css={{
                  fill: '$accents9',
               }}
               d="M17 9a4 4 0 0 0-.93.12 5 5 0 0 0-9 2.09A3 3 0 1 0 6 17h11a4 4 0 0 0 0-8"
            ></Svg.Path>
         </Svg>
      </Box>
   );
};
