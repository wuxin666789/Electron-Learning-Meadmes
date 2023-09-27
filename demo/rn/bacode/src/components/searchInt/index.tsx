import React from 'react';
import {useContext} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {StoreContext} from '../../../App';
import Icon from '../icon';

const Search = () => {
  const store = React.useContext(StoreContext);
  return (
    <View
      style={{
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
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
        <TextInput
          maxLength={30}
          onSubmitEditing={({nativeEvent: {text}}) =>
            store && store.setSearchKey(text ?? '')
          }
        />
      </View>

      <TouchableOpacity
        onPress={() => store && store.setIsSearch()}
        style={{backgroundColor: 'transparent', width: '20%'}}>
        <Text style={{color: '#3f86fa', textAlign: 'center'}}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
