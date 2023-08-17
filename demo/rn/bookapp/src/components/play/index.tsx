import {useEffect} from 'react';
import {Text, View} from 'react-native';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import {Style} from './index-css';
const Play = () => {
  const playerState = usePlaybackState();
  useEffect(() => {
    console.log(playerState);
  }, [playerState]);
  return (
    <View style={Style.container}>
      <View style={Style.songCover}></View>
      <View
        style={{
          marginLeft: 60,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <View>
          <Text style={{fontSize: 14, color: 'blue'}}>啊啊啊啊啊</Text>
        </View>
        <View style={{marginRight: 10, display: 'flex', flexDirection: 'row'}}>
          <Text
            onPress={() => {
              (playerState as unknown as string) === 'paused'
                ? TrackPlayer.play()
                : TrackPlayer.pause();
            }}
            style={{
              fontFamily: 'iconfont',
              fontSize: 24,
              color: 'blue',
              marginRight: 15,
            }}>
            {(playerState as unknown as string) === 'paused'
              ? '\ue6af'
              : '\ue6b1'}
          </Text>
          <Text style={{fontFamily: 'iconfont', fontSize: 24, color: 'blue'}}>
            {'\ue6c5'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Play;
