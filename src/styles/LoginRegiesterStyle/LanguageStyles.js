
import { StyleSheet } from 'react-native';
import { SF, SH, SW, Colors, Fonts } from '../../utils';

export default LanguageStyles = (Colors) => StyleSheet.create({
  DropdownStyles: {
    borderWidth: SW(0),
    padding: SH(0),
    paddingVertical: SH(0),
    width: '100%',
    borderRightWidth: SW(1),
    borderRadius: SW(0),
    borderRightColor: Colors.gray_text_color,
    minHeight: 'auto',
    paddingRight: SH(10),
    backgroundColor: Colors.white_text_color,
    paddingHorizontal: SH(15),
    borderRadius: SW(100)
  },
  DropdownStylestwo: {
    borderWidth: SW(0),
    padding: SW(0),
    paddingVertical: SH(0),
    width: "100%",
    borderRightWidth: SW(1),
    borderRadius: SW(0),
    borderRightColor: Colors.light_gray_text_color,
    minHeight: 'auto',
    paddingRight: SH(10),
    backgroundColor: Colors.white_text_color,
    paddingHorizontal: SH(15),
    borderRadius: SW(100)
  },
  DropdownStylesLead: {
    fontSize: SF(22),
  },
  TranslationDropdown: {
    width: '100%',
  },
  TranslationDropdowntwo: {
    width: '100%',
  },
  TranslationDropdownOpen: {
    width: '100%',
  },
  TranslationDropdownOpentwo: {
    width: '70%',
  },
  SelectText: {
    fontSize: SF(25),
    paddingBottom: SH(15),
    color: Colors.black_text_color,
    fontWeight: '500'
  },
  Settingtext: {
    fontSize: SF(18),
    paddingBottom: SH(10),
    color: Colors.black_text_color,
    fontWeight: '500',
    paddingTop: SH(10),
    fontFamily: Fonts.Poppins_Medium,
  },
  MinView: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white_text_color,
  },
  ImageSet: {
    width: SW(100),
    height: SH(100),
    borderRadius: SW(200),
  },
  imagsetview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  DropdownStyles: {
    borderWidth: SW(1),
    padding: SW(0),
    paddingVertical: SH(5),
    width: '100%',
    borderRightWidth: SW(1),
    borderRightColor: Colors.gray_text_color,
    minHeight: 'auto',
    paddingRight: SH(10),
    backgroundColor: Colors.white_text_color,
    paddingHorizontal: SH(15),
    borderRadius: SW(100)
  },
  DropdownStylestwo: {
    borderWidth: SW(0),
    padding: SW(0),
    paddingVertical: SH(5),
    width: "100%",
    borderRightWidth: SW(1),
    borderRightColor: Colors.light_gray_text_color,
    minHeight: 'auto',
    paddingRight: SH(10),
    backgroundColor: Colors.white_text_color,
    paddingHorizontal: SH(15),
    borderRadius: SW(100)
  },
  DropdownStylesLead: {
    fontSize: SF(20),
  },
  TranslationDropdown: {
    width: '100%',
  },
  TranslationDropdowntwo: {
    width: '100%',
  },
  TranslationDropdownOpen: {
    width: '70%',
  },
  TranslationDropdownOpentwo: {
    width: '70%',
  },
  SelectTagWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  ConfirmButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    paddingTop: SH(12)
  },
  LoginButton: {
    paddingVertical: SH(0),
    width: '100%',
    borderRadius: SW(200)
  },

});
