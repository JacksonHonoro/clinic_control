import React, { useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  icon: string;
}

const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <Icon name={icon} size={18} color={isFocused ? '#ff9000' : '#999'} />
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#999"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default Input;
