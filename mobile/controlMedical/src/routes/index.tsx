import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Doctor from '../pages/Doctor';
import RegisterDoctorScreen from '../pages/Doctor/RegisterDoctorScreen';

const Nav = createStackNavigator();

const Routes: React.FC = () => (
  <Nav.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Nav.Screen name="Home" component={Home} />
    <Nav.Screen name="Doctor" component={Doctor} />
    <Nav.Screen name="RegisterDoctorScreen" component={RegisterDoctorScreen} />
  </Nav.Navigator>
);

export default Routes;
