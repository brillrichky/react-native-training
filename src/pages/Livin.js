import {WingBlank} from '@ant-design/react-native';
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
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RegisterBottomSheet from '../components/RegisterBottomSheet';

const Livin = () => {
  const navigation = useNavigation();
  return (
    <View className="h-full bg-slate-200">
      <View className="justify-center pt-40">
        <Image
          source={require('../assets/logo-livin.png')}
          className="justify-end w-full h-56 mix-blend-multiply object-contain"
        />
      </View>
      <View className="pt-16 pb-7">
        <WingBlank size="lg">
          <TouchableHighlight
            onPress={() => navigation.navigate('Home')}
            className="bg-blue-600 mx-auto px-28 py-4 rounded-full border-2 border-gray-500"
            style={{elevation: 10}}>
            <View className="flex flex-row gap-3">
              <Icon name="finger-print" size={26} color={'white'} />
              <Text className="text-white text-xl">Login</Text>
            </View>
          </TouchableHighlight>
        </WingBlank>
      </View>
      <View className="py-1 px-9">
        <WingBlank size="lg">
          <View className="flex flex-row space-x-5">
            <View>
              <TouchableHighlight
                onPress={() => {}}
                className="bg-purple-500 mx-auto py-3 px-3 rounded-full"
                style={{elevation: 5}}>
                <View className="flex flex-row">
                  <Icon name="receipt-outline" size={30} color={'white'} />
                </View>
              </TouchableHighlight>
              <Text className="pt-3">Setor Tarik</Text>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {}}
                className="bg-orange-500 mx-auto py-3 px-3 rounded-full"
                style={{elevation: 5}}>
                <View className="flex flex-row">
                  <Icon name="wallet-sharp" size={30} color={'white'} />
                </View>
              </TouchableHighlight>
              <Text className="pt-3">e-money</Text>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {}}
                className="bg-yellow-500 mx-auto py-3 px-3 rounded-full"
                style={{elevation: 5}}>
                <View className="flex flex-row">
                  <Icon name="flash-outline" size={30} color={'white'} />
                </View>
              </TouchableHighlight>
              <Text className="pt-3">Quick Pick</Text>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {}}
                className="bg-cyan-500 mx-auto py-3 px-3 rounded-full"
                style={{elevation: 5}}>
                <View className="flex flex-row">
                  <Icon name="qr-code" size={30} color={'white'} />
                </View>
              </TouchableHighlight>
              <Text className="pt-3">QR Bayar</Text>
            </View>
          </View>
        </WingBlank>
      </View>
      <RegisterBottomSheet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'blue',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Livin;
