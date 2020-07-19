import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import store from './store';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#312e38" />
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
          <Routes />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
