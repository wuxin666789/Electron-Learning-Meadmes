import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StoreContext} from '../../../App';
import Icon from '../icon';
import * as style from './style';
const HeaderRight = ({navigation}) => {
  const store = React.useContext(StoreContext);

  return (
    <View style={style.topBarContainer}>
      <View style={style.returnTitle}>
        <Icon
          icon={'\ue60a'}
          style={style.returnBtn}
          onPress={() => navigation.goBack()}
        />
        <Text style={style.title}>RECEIVING LIST</Text>
      </View>
      <View style={style.alertSearch}>
        <TouchableOpacity style={{...style.alertSearchItem, marginRight: 10}}>
          <Icon icon={'\ue60a'} style={style.rightIcon} />
          <Text style={style.rightText}>Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.alertSearchItem}
          onPress={() => store && store.setIsSearch()}>
          <Icon icon={'\ue618'} style={style.rightIcon} />
          <Text style={style.rightText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderRight;
