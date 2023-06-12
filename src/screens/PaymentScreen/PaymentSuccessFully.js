import React, { useEffect, useMemo } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Payment } from '../../styles';
import { RouteName } from '../../routes';
import images from '../../index';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const PaytmSuccessFully = props => {
  const { navigation } = props;
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const PaymentStyle = useMemo(() => Payment(Colors), [Colors]);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      navigation.navigate(RouteName.HOME_SCREEN);
      clearInterval(interval);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={PaymentStyle.MinstyleViewPhotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        ContentContainerStyle={PaymentStyle.MainViewPaymentSuccess}>
        <View>
          <View>
            <View style={PaymentStyle.MinViewSigninScreen}>
              <TouchableOpacity style={PaymentStyle.Imagecebter}>
                <Image
                  source={images.payment}
                  resizeMode="center"
                  style={PaymentStyle.PaymentSuccesfullImg}
                />
              </TouchableOpacity>
              <View style={PaymentStyle.TextCenterView}>
                <Text style={PaymentStyle.TextCenterPayment}>
                  {t('PAYMENT_SUCCESSFULL')}
                </Text>
              </View>
              <Text style={PaymentStyle.TextCenterPaymentTwo}>
                {t('Your_Payment_Has_Been')}
              </Text>

              <TouchableOpacity style={PaymentStyle.FlexRowcoffiText}>
                <Text style={PaymentStyle.TotalQAmountPaid}>
                  {t('PAYED_BY')}
                </Text>
                <Text style={PaymentStyle.PriceTextSet}>{t('G_pay')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={PaymentStyle.FlexRowcoffiTextTwo}>
                <Text style={PaymentStyle.TotalQAmountPaid}>
                  {t('TRANCATION_DATE')}
                </Text>
                <Text style={PaymentStyle.PriceTextSet}>
                  22 Jan 2023,05:25 PM
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default PaytmSuccessFully;
