import React, {createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import ReceivingList from './src/pages/receiving-list';
import HomeScreen from './src/pages/home';
import HeaderRight from './src/components/header-right';
import Store from './store';

export const StoreContext = createContext<Store | null>(null);

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const [isActive, setIsActive] = React.useState();
  const store = new Store();
  return (
    <StoreContext.Provider value={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: HeaderRight,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="List" component={ReceivingList} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreContext.Provider>
  );
}

export default App;
