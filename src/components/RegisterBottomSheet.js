import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {WingBlank, Card} from '@ant-design/react-native';
import {useEffect, useState, useRef, useMemo} from 'react';

const RegisterBottomSheet = props => {
  const snapPoints = useMemo(() => ['15%', '75%'], []);

  const bottomSheetRef = useRef(null);
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const [savedData, setSavedData] = useState([]);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      keyboardBehavior="extend"
      backgroundStyle={{
        backgroundColor:"white"
      }}
      containerStyle={{
        opacity:1,
      }}>
      <View
        style={styles.contentContainer}
        className="flex justify-center text-center py-2">
        <Text className="font-bold text-xl text-center text-blue-800">
          Form Simple React Native
        </Text>
        <Text className=" text-sm text-center">
          Sehabis Register jangan lupa klik Login
        </Text>
        <View className="pt-10">
          <WingBlank size="lg">
            <View>
              <Text>Email</Text>
              <TextInput
                editable
                ref={nameRef}
                // onChangeText={text => (nameRef.current = text)}
                value={nameRef.current}
                style={{padding: 10}}
                className="border border-slate-500"
              />
            </View>
          </WingBlank>
        </View>
        <View className="pt-5">
          <WingBlank size="lg">
            <View>
              <Text>Password</Text>
              <TextInput
                editable
                ref={passRef}
                // onChangeText={text => (nameRef.current = text)}
                value={passRef.current}
                style={{padding: 10}}
                className="border border-slate-500"
              />
            </View>
          </WingBlank>
        </View>
        <View className="pt-5">
          <WingBlank size="lg">
            <View>
              <Button
                editable
                title="Simpan"
                style={{padding: 10}}
                className="border border-slate-500"
              />
            </View>
          </WingBlank>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default RegisterBottomSheet;
