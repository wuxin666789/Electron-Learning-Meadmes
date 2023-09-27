import {observer} from 'mobx-react';
import {useContext} from 'react';
import {Button, View, Text} from 'react-native';
import {StoreContext} from '../../../App';

const HomeScreen = observer(({navigation}) => {
  const state = useContext(StoreContext);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Button title="Go back" onPress={() => navigation.navigate('List')} /> */}

      <Button title="Decrement" onPress={() => state && state.setIsSearch()} />
      <Button title="GO" onPress={() => navigation.navigate('List')} />
      <Text>{state?.isSearch}</Text>
    </View>
  );
});

export default HomeScreen;
