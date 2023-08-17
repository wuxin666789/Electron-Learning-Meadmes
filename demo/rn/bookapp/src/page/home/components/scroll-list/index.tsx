import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {FlatListType} from '../..';
import {SongListType} from '../../hook';

export const FlatListComponent = (props: {
  type: FlatListType;
  list: SongListType[];
}) => {
  const {list} = props;

  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <View key={item.singer} style={styles.item}>
            <Image style={styles.image} source={{uri: item.cover}} />
            <Text style={styles.title}>{item.singer}</Text>
          </View>
        )}
        keyExtractor={item => item.songName}
        horizontal
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
  },

  item: {
    backgroundColor: '#2dbded',
    marginHorizontal: 16,
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
    paddingVertical: 3,
  },
  image: {
    flex: 4,
  },
});
