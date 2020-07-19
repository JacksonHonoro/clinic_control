import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { listDoctors } from '../../services/helpers';
import infoDoctor from '../../store/modules/doctor/action';
import BackButton from '../../components/BackButton';

import {
  Container,
  Header,
  Title,
  Body,
  AreaInfo,
  TextInfo,
  List,
  SubTitle,
  AreaButton,
  HeaderTop,
} from './styles';

const Doctor: React.FC = () => {
  const dispatch = useDispatch();
  const doctorInfo = useSelector((state) => state.doctor);
  const navigation = useNavigation();

  useEffect(() => {
    const loadDoctors = async () => {
      const { data } = await listDoctors();
      dispatch(infoDoctor(data));
    };
    loadDoctors();
  }, [doctorInfo]);

  const handleRegisterDoctor = () => {
    navigation.navigate('RegisterDoctorScreen');
  };

  return (
    <Container>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Header>
        <HeaderTop>
          <AreaButton>
            <TouchableOpacity>
              <TextInfo>Editar</TextInfo>
            </TouchableOpacity>
          </AreaButton>
          <AreaButton>
            <TouchableOpacity onPress={handleRegisterDoctor}>
              <TextInfo>Cadastrar</TextInfo>
            </TouchableOpacity>
          </AreaButton>
        </HeaderTop>
        <Title>Lista</Title>
      </Header>
      <Body>
        <AreaInfo>
          <SubTitle>Nome</SubTitle>
          <SubTitle>CRM</SubTitle>
        </AreaInfo>
        <List
          data={doctorInfo}
          keyExtractor={(value) => String(value.id)}
          renderItem={({ item }) => (
            <AreaInfo>
              <TextInfo>{item.name}</TextInfo>
              <TextInfo>{`${item.crm}-${item.crmuf}`}</TextInfo>
            </AreaInfo>
          )}
        />
      </Body>
    </Container>
  );
};
export default Doctor;
