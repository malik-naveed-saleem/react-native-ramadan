import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  FlatList,
  Modal,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/UserArrayStyle';
const bioData = [

  {
    key: 0,
    name: 'ayaan',
  },
  {
    key: 1,
    name: 'malik',
  },
  {
    key: 2,
    name: 'naveed',
  },
  {
    key: 3,
    name: 'saleem',
  },
  {
    key: 4,
    name: 'malik',
  },
  {
    key: 5,
    name: 'ali',
  },
  {
    key: 6,
    name: 'john',
  },
  {
    key: 7,
    name: 'smith',
  },
  {
    key: 8,
    name: 'babar',
  },
  {
    key: 9,
    name: 'maxwell',
  },
  {
    key: 10,
    name: 'malik',
  },
];
const UserArray = () => {
  const [data, setData] = useState(bioData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onPressItem = () => {
    setIsModalVisible(true);
    // setData(named)
  };
  const changeMOdalView = (bool, id) => {
    const result = data.filter(index => {
      return id=== index;
    });
    console.log(`result`, result);

    setData(result);
    setIsModalVisible(bool);
  };
  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={({item}) => {
          console.log(item.name);
          return (
            <>
              <TouchableOpacity onPress={() => onPressItem()}>
                <Text style={[styles.uerText]}> {item.name}</Text>
              </TouchableOpacity>
              <Modal
                visible={isModalVisible}
                animationType="fade"
                transparent={true}
                onReqChange={() => changeMOdalView(false,key)}>
                <View style={styles.main_viewModal}>
                  <View style={styles.modal_view}>
                    <Text style={styles.modal_text}>{item.name}</Text>
                    <View style={styles.button_view}>
                      <TouchableOpacity
                        onPress={() => setIsModalVisible(false)}>
                        <Text style={styles.cancle_button}>Cancle</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </>
          );
        }}
      />
    </ScrollView>
  );
};
export default UserArray;
