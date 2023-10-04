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
import Livin from './Livin';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Login = props => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <>
          <View>
            <Livin/>
          </View>
        </>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Login;
