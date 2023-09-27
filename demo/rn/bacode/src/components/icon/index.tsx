import {GestureResponderEvent, Text, TextStyle} from 'react-native';

export interface IconProps {
  icon: string;
  style?: TextStyle;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Icon = (props: IconProps) => {
  const {style, icon, onPress} = props;
  return (
    <Text style={{fontFamily: 'iconfont', ...style}} onPress={onPress}>
      {icon}
    </Text>
  );
};
export default Icon;
