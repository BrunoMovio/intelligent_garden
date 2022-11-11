import React from 'react';
import { TooltipProps } from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import { Tooltip } from '.';

export const DescriptionTooltip: React.FC<Partial<TooltipProps>> = ({
  ...props
}) => {
  return (
    <Tooltip {...props} hasArrow>
      <QuestionOutlineIcon position={'absolute'} top={'0px'} right={'4px'} />
    </Tooltip>
  );
};
