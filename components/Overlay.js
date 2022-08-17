import React from 'react';
import {TouchableOpacity, StyleSheet, Modal, View} from 'react-native';

const Overlay = ({onPress, children, show}) => {
  return (
    <Modal animationType='fade' onRequestClose={onPress} visible={show} transparent={true}>
      <TouchableOpacity style={styles.overlay} onPress={onPress} />
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Overlay;
