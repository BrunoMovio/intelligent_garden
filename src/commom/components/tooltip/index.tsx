import React from 'react';
import { Tooltip as ChackraTooltip, TooltipProps } from '@chakra-ui/react';

export const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <ChackraTooltip
      {...props}
      placement={props.placement || 'bottom'}
      closeDelay={300}
      bg="#DDE5E8"
      color="black"
    >
      {children}
    </ChackraTooltip>
  );
};
