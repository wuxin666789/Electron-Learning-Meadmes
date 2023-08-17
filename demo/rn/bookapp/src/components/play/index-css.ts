import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: '#666666',
    width: '80%',
    height: 40,
    position: 'absolute',
    bottom: 50,
    marginLeft: '10%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  songCover: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    position: 'absolute',
    left: 0,
    top: -5,
  },
});
