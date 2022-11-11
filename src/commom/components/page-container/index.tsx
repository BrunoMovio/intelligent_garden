import React from 'react';
import { Flex } from '@chakra-ui/layout';

export const PageContainer: React.FC = ({ children }) => {
  return (
    <Flex direction={'column'} minH="100vh">
      <Flex flex={1} direction={'column'} alignItems={'center'}>
        {children}
      </Flex>
    </Flex>
  );
};
