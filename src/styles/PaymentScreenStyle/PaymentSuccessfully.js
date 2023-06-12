import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

export default Payment = Colors =>
  StyleSheet.create({
    MinstyleViewPhotograpgy: {
      flexDirection: 'row',
      justifyContent: 'center',
      height: '100%',
      alignItems: 'center',
      backgroundColor: Colors.White_Colour,
    },
    MinViewSigninScreen: {
      width: '90%',
      marginHorizontal: '5%',
    },
    Imagecebter: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: SH(30),
    },
    PaymentSuccesfullImg: {
      width: SW(150),
      height: SH(150),
    },
    TextCenterView: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    TextCenterPayment: {
      textAlign: 'center',
      fontSize: SF(25),
      lineHeight: SH(30),
      fontWeight: '700',
      color: Colors.theme_background_grape,
    },
    TextCenterPaymentTwo: {
      textAlign: 'center',
      fontSize: SF(16),
      paddingHorizontal: SH(5),
      lineHeight: SH(20),
      color: Colors.TextGreyColor,
      borderBottomColor: Colors.gray_text_color,
      borderBottomWidth: SW(1),
      borderStyle: 'dashed',
      paddingVertical: SH(20),
      fontWeight: '600',
    },
    FlexRowcoffiText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: SW(1),
      borderStyle: 'dashed',
      paddingBottom: SH(10),
      marginBottom: SH(10),
      borderBottomColor: Colors.gray_text_color,
    },
    TotalQAmountPaid: {
      textAlign: 'center',
      fontSize: SF(12),
      color: Colors.gray_text_color,
      lineHeight: SH(30),
      fontWeight: '600',
    },
    PriceTextSet: {
      textAlign: 'center',
      fontSize: SF(12),
      color: Colors.black_text_color,
      lineHeight: SH(30),
      fontWeight: '600',
    },
    FlexRowcoffiTextTwo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: SH(10),
      marginBottom: SH(10),
    },
    MainViewPaymentSuccess: {
      width: '100%',
      height: 'auto',
    },
  });
