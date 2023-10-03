import {Card} from '@ant-design/react-native';
import {Text, View} from 'react-native';

const ListCard = props => {
  const {userData} = props;
  return (
    <View>
      {userData.map(value => {
        return (
          <View key={value.id} className="my-1">
            <Card>
              <Card.Header title={value.first_name} />
              <Card.Body>
                <View className="ml-4">
                  <Text>{value.email}</Text>
                </View>
              </Card.Body>
            </Card>
          </View>
        );
      })}
    </View>
  );
};

export default ListCard;
