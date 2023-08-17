import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {FlatListComponent} from './components/scroll-list';
import SwiperComponent from './components/swiper';
import useAction from './hook';
import TrackPlayer from 'react-native-track-player';

import {Style} from './index-css';
import {useEffect, useState} from 'react';
import {setupPlayer, addTracks} from '../../../service';

export enum FlatListType {
  SingleRow, //单列滚动a
  Multicolumn, //多列滚动
}

export const Home = () => {
  const {contentNavigationData, songList, songSheetList} = useAction();
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks();
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  return (
    <View style={Style.container}>
      <View style={Style.homeTitle}>
        <Text>音乐</Text>
        <Text style={{fontFamily: 'iconfont', fontSize: 24}}>{'\ue62f'}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '65%'}}>
        <View style={Style.searchInput}>
          <Text style={Style.searchIcon}>{'\ue618'}</Text>
          <TextInput />
        </View>
        <View style={{height: 200, paddingTop: 4, paddingBottom: 4}}>
          <SwiperComponent />
        </View>
        <View>
          <FlatList
            horizontal
            data={contentNavigationData}
            renderItem={({item}) => (
              <View style={Style.contentNavigationItem}>
                <Text style={{fontFamily: 'iconfont', fontSize: 24}}>
                  {item.icon}
                </Text>
                <Text>{item.text}</Text>
              </View>
            )}
            keyExtractor={(item: {icon: string; text: string}) => item.text}
          />
        </View>
        <Text>{'大家都在听'}</Text>
        <Swiper style={{height: 300}} showsPagination={false}>
          {songList.map(item => {
            return (
              <View>
                {item.map(i => {
                  return (
                    <View key={i.singer} style={Style.multicolumnItem}>
                      <Image
                        style={Style.multicolumnImg}
                        source={{uri: i.cover}}
                        resizeMethod="resize"
                        width={60}
                        height={60}
                        borderRadius={6}
                      />
                      <View style={Style.multicolumnText}>
                        <Text>{i.singer}</Text>
                        <Text>{i.songName}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </Swiper>
        <FlatListComponent
          type={FlatListType.Multicolumn}
          list={songSheetList}
        />
        <SafeAreaView style={styles.container}>
          <Button
            title="Play"
            color="#777"
            onPress={() => {
              TrackPlayer.play();
            }}
          />
          <Button title="sp" color="#777" onPress={() => setupPlayer()} />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#112',
  },
});
