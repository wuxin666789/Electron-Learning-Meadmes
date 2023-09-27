import * as style from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  Animated,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TopBar from '../../../components/top-bar';

import useAction from './hook';
import Icon from '../../../components/icon';
import {Home} from '../../home';
import {TabRouter} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import A from '../../a';

const ReceivingList = () => {
  const {receivingList, statusBg, tabNar, isActive, isSearch, setIsActive} =
    useAction();

  let _List: ScrollView | null = null;

  const Tab = createMaterialTopTabNavigator();

  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [Dimensions.get('window').width, 0], // 可根據需要調整起始和結束位置
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View>
      <TopBar />
      <View style={style.title}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#3f86fa',
            tabBarInactiveTintColor: 'black',
            tabBarIndicatorStyle: {backgroundColor: '#3f86fa'},
          }}>
          {receivingList.map(item => {
            return (
              <Tab.Screen
                name={item.title}
                component={A}
                initialParams={{
                  name: item.title,
                }}
              />
            );
          })}
        </Tab.Navigator>
      </View>

      <Animated.View style={{transform: [{translateX}]}}>
        <View style={style.title}>
          <View>
            <Text>Operator</Text>
            <Text style={style.titleText}>BRYAN.L</Text>
          </View>
          <View>
            <Text>Warehouse</Text>
            <Text style={style.titleText}>1200</Text>
          </View>
          <View>
            <Text>File Date</Text>
            <Text style={style.titleText}>FRI 12/24/2021</Text>
          </View>
        </View>
        {isSearch && (
          <View style={style.searchBox}>
            <View
              style={{
                width: '80%',
                borderWidth: StyleSheet.hairlineWidth,
                borderStyle: 'solid',
                borderColor: '#ccc',
                borderRadius: 6,
                height: 40,
                paddingLeft: 10,
                paddingRight: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon icon={'\ue618'} style={{color: '#ccc'}} />
              <TextInput />
            </View>
            <TouchableOpacity
              onPress={() => console.log('Button pressed')}
              style={{backgroundColor: 'transparent', width: '20%'}}>
              <Text style={{color: '#3f86fa', textAlign: 'center'}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={{}}>
          <ScrollView
            style={(style.tableTitle, {margin: 10})}
            scrollEventThrottle={16}
            bounces={false}
            ref={ref => (_List = ref)}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <Text style={{...style.order, marginRight: 40}}>
              Queue No. Truck(driver)&order
            </Text>
            <Text style={style.process}>Process</Text>
            <Text style={style.ltems}>ltems</Text>
            <Text style={style.difference}>Difference</Text>
            <Text style={style.time}>Time</Text>
            <Text style={style.duration}>Duration(M)</Text>
            <Text style={style.operator} onLayout={e => console.log(e)}>
              Operator
            </Text>
          </ScrollView>
          <ScrollView
            style={{height: 500}}
            showsVerticalScrollIndicator={false}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={e =>
                _List &&
                _List.scrollTo({
                  x: e.nativeEvent.contentOffset.x,
                  y: 0,
                  animated: false,
                })
              }
              style={{margin: 10}}>
              <FlatList
                data={receivingList[isActive].data}
                showsHorizontalScrollIndicator={false}
                style={style.bottomBorder}
                renderItem={({item, index}) => (
                  <View
                    style={{
                      ...style.stoItem,
                      backgroundColor: statusBg[item.status],
                    }}>
                    <View style={style.contentData}>
                      <Text style={{...style.order, color: '#3f86fa'}}>
                        {item.truckOrder.truck}
                      </Text>
                      <Text style={style.process}>{item.process}</Text>
                      <View style={style.ltems}>
                        <Text style={style.redBgCircular}>{item.items}</Text>
                      </View>
                      <Text style={style.difference}>{item.difference}</Text>
                      <View>
                        <Text style={style.time}>
                          Sign In:{item.time.signIn}
                        </Text>
                        <Text style={style.time}>Start:{item.time.start}</Text>
                        <Text style={style.time}>
                          Finish:{item.time.finish}
                        </Text>
                      </View>
                      <Text style={style.duration}>{item.duration}</Text>
                      <Text style={style.operator}>{item.operator}</Text>
                    </View>
                    {item.truckOrder.order.map(orderItem => {
                      return (
                        <Text
                          style={{
                            marginTop: 10,
                          }}>
                          {orderItem}
                        </Text>
                      );
                    })}
                  </View>
                )}
                keyExtractor={(item, index) => item.operator + index}
              />
            </ScrollView>
          </ScrollView>
        </View>
      </Animated.View>
    </View>
  );
};

export default ReceivingList;
