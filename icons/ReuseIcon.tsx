import React from 'react';
import {Box} from '../styles/box';
import {Svg} from '../styles/svg';

export const ReuseIcon = () => {
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
               d="M25,19c-1.7,0-3-1.3-3-3s1.3-3,3-3h1V8h-6V7
	c0-1.7-1.3-3-3-3s-3,1.3-3,3v1H8v5H7c-1.7,0-3,1.3-3,3s1.3,3,3,3h1v5h6v1c0,1.7,1.3,3,3,3s3-1.3,3-3v-1h6v-5H25z"
            ></Svg.Path>
         </Svg>
      </Box>
   );
};
