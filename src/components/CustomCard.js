import {Card} from '@ant-design/react-native';
import CardBody from '@ant-design/react-native/lib/card/CardBody';
import CardHeader from '@ant-design/react-native/lib/card/CardHeader';
import {useState} from 'react';
import {View, Modal, Button, Text} from 'react-native';

const CustomCard = props => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{display: 'flex', justifyContent: 'center'}}>
      <Button
        onPress={e => {
          setModalVisible(true);
        }}
        title="Show Modal"
      />
      <View style={{padding:"30px"}}>
      <Modal visible={modalVisible}>
        <Button
          title="Go Back"
          onPress={e => {
            setModalVisible(false);
          }}
        />
        <View style={{padding:"30px"}}>
          <Card>
            <CardHeader title="This is title"></CardHeader>
            <CardBody>
              <View style={{height: 42}}>
                <Text style={{marginLeft: 16}}>Card Content</Text>
              </View>
            </CardBody>
          </Card>
        </View>
      </Modal>
      </View>
      
    </View>
  );
};

export default CustomCard;
