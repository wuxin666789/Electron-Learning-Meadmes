import {observer} from 'mobx-react';
import * as style from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  Animated,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';

import useAction from './hook';

import {useContext, useEffect} from 'react';
import React from 'react';
import Search from '../../components/searchInt';
import {StoreContext} from '../../../App';

const ReceivingList = observer(() => {
  const {receivingList, statusBg, isActive} = useAction();

  let _List: ScrollView | null = null;

  const store = useContext(StoreContext);

  const Tab = createMaterialTopTabNavigator();

  function B() {
    return (
      <View>
        <Text>AAAA</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={{...style.title, height: 80}}>
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
                component={B}
                initialParams={{
                  name: item.title,
                }}
              />
            );
          })}
        </Tab.Navigator>
      </View>

      <View>
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
        {store && store.isSearch && <Search />}
        <View>
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
                data={
                  store?.searchKey
                    ? receivingList[isActive].data.filter(item =>
                        item.truckOrder.truck.includes(store?.searchKey),
                      )
                    : receivingList[isActive].data
                }
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
      </View>
    </View>
  );
});

export default ReceivingList;
