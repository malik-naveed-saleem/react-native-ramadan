import React from 'react';
import {Modal, View, Text,StyleSheet} from 'react-native';
import styles from '../styles/ModalStyles';
// import styles from '../styles/UserArrayStyle';
const ModalLearning = () => {
  return (
    <View  >
      

      <Modal visible={false}>
        <View style={styles.modal_main_view}>
          <View style={styles.model_inner_view}>
            <Text style={styles.Model_text} >Model text</Text>
          </View>
        </View>
      </Modal>
      <Text style={styles.outText}>Out of Modal</Text>
    </View>
  );
};
export default ModalLearning;
