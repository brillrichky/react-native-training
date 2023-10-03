import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {WingBlank, Card} from '@ant-design/react-native';
import style from './styles/style';
import {useEffect, useState} from 'react';
import AppBar from './components/AppBar';
import axios from 'axios';
import ListCard from './components/ListCard';
import Livin from './pages/Livin';

const App = () => {
  const [userData, setUserData] = useState(null);
  const getAllUsers = async () => {
    const res = await axios.get('https://reqres.in/api/users');
    setTimeout(() => {
      setUserData(res.data.data);
    }, 3000);
  };

  useEffect(()=>{
    getAllUsers();
  },[])
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Livin/>
          {/* <AppBar getAllUsers={getAllUsers} />
          <WingBlank size="lg">
            {userData ? (
              <ListCard userData={userData}/>
            ) : (
              <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" />
              </View>
            )}
          </WingBlank> */}
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default App;
