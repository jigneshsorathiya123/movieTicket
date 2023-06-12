import React, {useMemo} from 'react';
import {Modal, Text, View} from 'react-native';
import {Style} from '../../styles';
import {Button} from '../../components';
import propTypes from 'prop-types';
import {Colors} from '../../utils';
import {useTheme} from '@react-navigation/native';

function SweetaelertModal(props) {
  const {
    message,
    modalVisible,
    setModalVisible,
    buttonminview,
    onPress,
    onPressCancel,
    buttonText,
    cancelButtonText,
    iconVisible,
  } = props;

  const {Colors} = useTheme();
  const Styles = useMemo(() => Style(Colors), [Colors]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={Styles.setbgcolorgrsay}>
        <View style={Styles.CenteredView}>
          <View style={Styles.ModalView}>
            <View style={Styles.registertextset}>
              <Text style={Styles.settext}>{message}</Text>
            </View>
            <View style={[Styles.buttonminview, {...buttonminview}]}>
              <View style={Styles.setokbutton}>
                <Button
                  title={buttonText}
                  onPress={() => {
                    onPress && onPress();
                  }}
                />
              </View>
              {cancelButtonText ? (
                <View style={Styles.setokbutton}>
                  <Button
                    title={cancelButtonText}
                    onPress={() => {
                      onPressCancel();
                    }}
                  />
                </View>
              ) : null}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

SweetaelertModal.defaultProps = {
  message: '',
  setModalVisible: () => {},
  modalVisible: false,
  onPress: () => {},
  onPressCancel: () => {},
  buttonText: 'Ok',
  cancelButtonText: '',
  iconVisible: false,
};

SweetaelertModal.propTypes = {
  message: propTypes.string,
  setModalVisible: propTypes.func,
  modalVisible: propTypes.boolean,
  onPress: propTypes.func,
  onPressCancel: propTypes.func,
  buttonText: propTypes.string,
  cancelButtonText: propTypes.string,
  iconVisible: propTypes.boolean,
};

export default SweetaelertModal;
