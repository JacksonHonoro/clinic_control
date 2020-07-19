import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

const BackButton: React.FC = ({ ...rest }) => (
  <Container {...rest}>
    <Icon name="arrow-left" size={30} color="#999" />
  </Container>
);

export default BackButton;
