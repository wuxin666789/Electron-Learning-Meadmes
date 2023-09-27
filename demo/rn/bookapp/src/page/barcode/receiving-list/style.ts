import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export const tabNar: ViewStyle = {
  borderBottomColor: '#ccc',
  borderStyle: 'solid',
  borderBottomWidth: 1,
  backgroundColor: '#fff',
};

export const tabNarItem: TextStyle = {
  borderBottomColor: '#ccc',
  borderStyle: 'solid',
  borderBottomWidth: 0.1,
  display: 'flex',
  paddingRight: 15,
  paddingLeft: 15,
  paddingTop: 15,
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  shadowColor: 'rgba(0,0,0,0,5)',
  shadowOffset: {width: 2, height: 2},
  shadowOpacity: 1,
  shadowRadius: 4,
};

export const title: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 15,
  backgroundColor: '#fff',
};

export const tableTitle: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: 15,
};

export const order: TextStyle = {
  marginRight: 25,
  minWidth: 180,
};

export const process: TextStyle = {
  marginRight: 15,
  width: 60,
};

export const ltems: TextStyle = {
  marginRight: 15,
  width: 60,
};

export const difference: TextStyle = {
  marginRight: 15,
  width: 80,
};

export const time: TextStyle = {
  marginRight: 25,
  width: 90,
};

export const duration: TextStyle = {
  marginRight: 15,
  width: 80,
};

export const operator: TextStyle = {
  marginRight: 15,
};

export const redBgCircular: TextStyle = {
  backgroundColor: 'red',
  borderRadius: 100,
  width: 25,
  height: 25,
  color: '#fff',
  lineHeight: 25,
  textAlign: 'center',
  fontWeight: '400',
  borderWidth: 1,
  borderColor: '#fff',
  borderStyle: 'solid',
};

export const titleText: TextStyle = {
  fontWeight: 'bold',
};

export const bottomBorder: ViewStyle = {
  borderBottomColor: '#ccc',
  borderStyle: 'solid',
  borderBottomWidth: StyleSheet.hairlineWidth,
};

export const stoItem: ViewStyle = {
  paddingLeft: 30,
  paddingTop: 15,
  paddingBottom: 15,
  marginBottom: 15,
  borderRadius: 10,
  overflow: 'hidden',
};

export const contentData: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: 10,
  borderBottomColor: '#ccc',
  borderStyle: 'solid',
  borderBottomWidth: 0.8,
};

export const searchBox: ViewStyle = {
  padding: 10,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff',
};
