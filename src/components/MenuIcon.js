import Icon from 'react-native-vector-icons/Ionicons';
import React, {useCallback, useMemo, useRef} from 'react';
import {
  Image,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const MenuIcon = ({icon, text, menuStyle = "mx-auto py-3 px-3 rounded-full", onPress = () => {}}) => {
  return (
    <View>
      <TouchableHighlight
        onPress={onPress}
        className={menuStyle}
        style={{elevation: 5}}>
        <View className="flex flex-row">
          <Icon name={icon} size={30} color={'white'} />
        </View>
      </TouchableHighlight>
      <Text className="pt-3">{text || "-"}</Text>
    </View>
  );
};

export default MenuIcon;
