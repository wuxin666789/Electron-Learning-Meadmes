import React from 'react';
import {Text, View} from 'react-native';
import Icon from '../icon';
import * as style from './style';

const TopBar = () => {
  return (
    <View style={style.topBarContainer}>
      <View style={style.returnTitle}>
        <Icon icon={'\ue60a'} style={style.returnBtn} />
        <Text style={style.title}>RECEIVING LIST</Text>
      </View>
      <View style={style.alertSearch}>
        <View style={{...style.alertSearchItem, marginRight: 10}}>
          <Icon icon={'\ue60a'} style={style.rightIcon} />
          <Text style={style.rightText}>Alert</Text>
        </View>
        <View style={style.alertSearchItem}>
          <Icon icon={'\ue618'} style={style.rightIcon} />
          <Text style={style.rightText}>Search</Text>
        </View>
      </View>
    </View>
  );
};

export default TopBar;
