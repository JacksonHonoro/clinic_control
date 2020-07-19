import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  loading: boolean;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container loading={loading} {...rest}>
    {loading ? (
      <ActivityIndicator size="small" color="#999" />
    ) : (
      <ButtonText>{children}</ButtonText>
    )}
  </Container>
);

export default Button;
