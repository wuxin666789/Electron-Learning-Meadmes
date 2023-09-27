import {StatusBar, TextStyle, ViewStyle} from 'react-native';

export const topBarContainer: ViewStyle = {
  backgroundColor: '#3f86fa',
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 10,
  display: 'flex',
  flexDirection: 'row',
  paddingTop: StatusBar.currentHeight,
  justifyContent: 'space-between',
};

export const returnTitle: ViewStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
};

export const returnBtn: TextStyle = {
  fontSize: 28,
  color: '#fff',
  marginRight: 16,
};

export const alertSearch: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
};

export const alertSearchItem: ViewStyle = {
  display: 'flex',
  alignItems: 'center',
};

export const title: TextStyle = {
  fontSize: 20,
  color: '#fff',
};

export const rightIcon: TextStyle = {
  fontSize: 18,
  color: '#fff',
};

export const rightText: TextStyle = {
  fontSize: 14,
  color: '#fff',
};
