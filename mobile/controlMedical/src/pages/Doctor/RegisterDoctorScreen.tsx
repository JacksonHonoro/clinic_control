import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import { registerDoctor } from '../../services/helpers';

import { Container, Header, Title, Body } from './stylesRegisterDoctor';

const RegisterDoctorScreen: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [crm, setCrm] = useState('');
  const [crmuf, setCrmuf] = useState('');

  const handleRegister = async () => {
    const dataReg = {
      name,
      crm,
      crmuf,
    };

    registerDoctor(dataReg)
      .then((res) => {
        Alert.alert(
          'Cadastrado com sucesso!',
          `Nome: ${res.data.name} CRM: ${crm}-${crmuf}, cadastrado!`,
        );
        navigation.goBack();
      })
      .catch((err) => {
        Alert.alert('Already Register!', err.response.data.message);
      });
  };

  return (
    <Container>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Header>
        <Title>Cadastro de Médico</Title>
      </Header>
      <Body>
        <Input
          icon="user"
          placeholder="Digite seu nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          icon="tag"
          placeholder="Digite seu CRM"
          value={crm}
          onChangeText={(text) => setCrm(text)}
        />
        <Input
          icon="map-pin"
          placeholder="Digite a UF do CRM"
          value={crmuf}
          onChangeText={(text) => setCrmuf(text)}
          returnKeyType="send"
          onSubmitEditing={handleRegister}
        />
        <Button onPress={handleRegister}>Cadastrar</Button>
      </Body>
    </Container>
  );
};

export default RegisterDoctorScreen;
