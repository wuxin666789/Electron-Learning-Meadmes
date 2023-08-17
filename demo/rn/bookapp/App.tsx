import {StatusBar, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DefaultTheme,
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {Home} from './src/page/home';
import Play from './src/components/play';

const Tab = createBottomTabNavigator();

const Fn = () => {
  return <Text style={{fontFamily: 'iconfont', fontSize: 36}}>{'\ue604'}</Text>;
};

const Kfc = () => {
  return <Text>kfc</Text>;
};

const NovelTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={(optionsProps: {
        route: RouteProp<ParamListBase, string>;
      }) => {
        let iconName: string;
        switch (optionsProps.route.name) {
          case '首页':
            iconName = '\ue62f';
            break;
          case '我的':
            iconName = '\ue628';
            break;
          default:
            iconName = '\ue62f';
        }
        return {
          tabBarActiveTintColor: '#22c55e',
          headerShown: false,
          tabBarIcon(props) {
            return (
              <Text
                style={{
                  fontFamily: 'iconfont',
                  fontSize: 18,
                  color: props.color,
                }}>
                {iconName}
              </Text>
            );
          },
        };
      }}>
      <Tab.Screen name="首页" component={Home} />
      <Tab.Screen name="我的" component={Kfc} />
    </Tab.Navigator>
  );
};

function App(): JSX.Element {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: '#fff',
    },
  };
  return (
    <View
      style={{
        height: '100%',

        position: 'relative',
      }}>
      <NavigationContainer theme={MyTheme}>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
        <NovelTabs />
        <Play />
      </NavigationContainer>
    </View>
  );
}

export default App;
