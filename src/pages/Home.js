import {ScrollView, ActivityIndicator, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import {View, WingBlank} from '@ant-design/react-native';
import ListCard from '../components/ListCard';
import AppBar from '../components/AppBar';
import axios from 'axios';

const Home = props => {
  const [userData, setUserData] = useState(null);
  const getAllUsers = async () => {
    const res = await axios.get('https://reqres.in/api/users');
    setTimeout(() => {
      setUserData(res.data.data);
    }, 3000);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <ScrollView>
      <AppBar />
      <WingBlank size="lg">
        {userData ? (
          <ListCard userData={userData} />
        ) : (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </WingBlank>
    </ScrollView>
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

export default Home;
