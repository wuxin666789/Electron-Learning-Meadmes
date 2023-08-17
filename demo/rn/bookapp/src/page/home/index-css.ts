import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden',
    backgroundColor: '#f2f2f2',
  },
  homeTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
  },
  searchInput: {
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f4f4f5',
    padding: 4,
    marginTop: 6,
    marginBottom: 6,
  },
  searchIcon: {
    fontFamily: 'iconfont',
    fontSize: 16,
    color: '#ccc',
    marginRight: 4,
  },
  contentNavigation: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  contentNavigationItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  multicolumnItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    width: 300,
    marginRight: 0,
    marginVertical: 16,
  },
  multicolumnImg: {
    flex: 1,
  },
  multicolumnText: {
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  },
});
