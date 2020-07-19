import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { listDoctors } from '../../services/helpers';
import infoDoctor from '../../store/modules/doctor/action';
import Button from '../../components/Button';

import { Container } from './styles';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleListDoctors = async () => {
    setLoading(true);
    const { data } = await listDoctors();
    dispatch(infoDoctor(data));
    navigation.navigate('Doctor');
    setLoading(false);
  };

  return (
    <Container>
      <Button loading={loading} onPress={handleListDoctors}>
        Control Doctor's
      </Button>
    </Container>
  );
};

export default Home;
