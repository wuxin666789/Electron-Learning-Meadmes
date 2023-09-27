import {Text, TextStyle} from 'react-native';

export interface IconProps {
  icon: string;
  style: TextStyle;
}

const Icon = (props: IconProps) => {
  const {style, icon} = props;
  return <Text style={{fontFamily: 'iconfont', ...style}}>{icon}</Text>;
};
export default Icon;
