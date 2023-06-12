import { StyleSheet } from 'react-native';
import { Fonts, SF, SH, SW } from '../../utils';

export default customStyles = (Colors) => StyleSheet.create({
  SpContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeView: {
    width: '100%'
  },
  SptextStyle: {
    color: Colors.light_green,
    fontSize: SF(45),
    fontFamily: Fonts.Poppins_Medium
  },
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SH(17),
    position: 'relative',
  },
  ModalView: {
    width: '100%',
    backgroundColor: Colors.bg_white,
    borderRadius: SH(15),
    paddingVertical: SH(20),
    paddingHorizontal: SW(20),
    alignItems: "center",
    shadowColor: Colors.shadow_color,
    shadowOffset: {
      width: SW(0),
      height: SH(2)
    },
    shadowOpacity: 0.25,
    shadowRadius: SW(4),
    elevation: 5,
  },
  modalbuttonClose: {
    alignItems: "flex-end",
    position: 'absolute',
    right: SW(20),
    top: SH(20)
  },
});