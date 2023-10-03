import {Drawer, List, WhiteSpace} from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import {ScrollView, Text, View, Button} from 'react-native';
import {Pressable} from 'react-native';

const AppBar = props => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <View
        className={
          'bg-slate-500 justify-center w-full h-20 align-middle items-center'
        }
        style={{flexDirection: 'row'}}>
        <View className={'w-10'} style={{flex: 1}}>
          <View className="self-center">
            <Pressable
              onPress={e => {
                props.getAllUsers();
              }}>
              <View>
                <Icon name="menu" size={25.0} color={'white'} />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={{flex: 3, alignSelf: 'center'}}>
          <Text className={'text-center text-white text-xl'}>
            To Do List App
          </Text>
        </View>
        <View className={'bg-transparent'} style={{flex: 1}}>
          <View className="self-center">
            <Pressable
              onPress={e => {
                setShowDrawer(!showDrawer);
              }}>
              <View>
                <Icon name="logout" size={25.0} color={'white'} />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      {showDrawer ? (
        <View className={'bg-red-500 h-20'}>
          <Text>TES</Text>
        </View>
      ) : (
        ''
      )}
    </>
  );
};

export default AppBar;
