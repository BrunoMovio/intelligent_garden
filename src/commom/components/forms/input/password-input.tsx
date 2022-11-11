import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Input as CInput, InputProps as CInputProps } from '@chakra-ui/input';
import { Button, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import InputMask from 'react-input-mask';

import { FieldContainer } from '../field-container';

export interface InputProps extends CInputProps {
  mask?: string;
  label?: string;
  formKey?: string;
  helperText?: string;
}

export const PasswordInput: React.FC<InputProps> = ({
  formKey,
  label,
  mask,
  helperText,
  ...props
}) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <FieldContainer helperText={helperText} label={label} formKey={formKey}>
      {({ field }: any) => {
        return (
          <InputGroup>
            <InputMask mask={mask || ''} {...field}>
              <CInput
                id={formKey}
                bg={'#E3E8EB'}
                fontSize={'md'}
                type={show ? 'text' : 'password'}
                {...props}
              />
            </InputMask>
            <InputRightElement mx={'8px'} w={'min-content'}>
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        );
      }}
    </FieldContainer>
  );
};
