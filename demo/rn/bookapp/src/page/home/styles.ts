import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

export const container: ViewStyle = {
  flex: 1,
  paddingLeft: 10,
  paddingRight: 10,
  overflow: 'hidden',
  backgroundColor: '#f2f2f2',
};

export const homeTitle: ViewStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: 50,
  alignItems: 'center',
};

export const searchInput: ViewStyle = {
  borderRadius: 6,
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#f4f4f5',
  padding: 4,
  marginTop: 6,
  marginBottom: 6,
};

export const searchIcon: TextStyle = {
  fontFamily: 'iconfont',
  fontSize: 16,
  color: '#ccc',
  marginRight: 4,
};

export const contentNavigationItem: ViewStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 10,
};

export const multicolumnItem: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 60,
  width: 300,
  marginRight: 0,
  marginVertical: 16,
};

export const multicolumnImg: ImageStyle = {
  flex: 1,
};

export const multicolumnText: ViewStyle = {
  flex: 4,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
};
