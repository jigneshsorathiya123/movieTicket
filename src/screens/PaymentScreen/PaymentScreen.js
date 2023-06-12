import React, { useEffect, useMemo, useState } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { PaymentStyle } from '../../styles';
import images from '../../index';
import { RouteName } from '../../routes';
import { SF, Colors, Paymentdata } from '../../utils';
import {
  AppHeader,
  Container,
  PaymentTypeFun,
  Spacing,
} from '../../components';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MangePaymentMethode = props => {
  const { navigation, route } = props;
  const selectedSeat = route.params.selectedSeat;
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const PaymentStyles = useMemo(() => PaymentStyle(Colors), [Colors]);

  const [totalAmount, setTotalAmount] = useState(0);
  const paymentSuccess = () => {
    navigation.replace(RouteName.PAYMENT_SUCCESSFUL);
  };

  useEffect(() => {
    let total = 0;
    selectedSeat.map(x => {
      total += x.amount;
    });
    setTotalAmount(total);
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          horizontal
          data={selectedSeat}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  padding: 15,
                  height: 60,
                  borderRadius: 10,
                  borderWidth: 1,
                }}>
                <Text style={{ fontSize: 15, fontWeight: '600' }}>
                  {item.id}
                </Text>
              </View>
            );
          }}
        />
        <Text style={{paddingTop:10, fontSize: 15, fontWeight: '600' }}>
          Total Amount :- {totalAmount}
        </Text>
        <ScrollView style={PaymentStyles.ContentContainerStyle}>
          <View style={PaymentStyles.MinFlexView}>
            <View style={PaymentStyles.MinViewSigninScreen}>
              <Text style={PaymentStyles.CardTextStyle}>{t('Card')}</Text>
              <TouchableOpacity
                style={PaymentStyles.SetFlexRowArrowLeft}
                onPress={() =>
                  navigation.replace(RouteName.CREDIT_CARD_SCREEN)
                }>
                <View style={PaymentStyles.FlexRowCreditCard}>
                  <Image
                    source={images.creditcard_img}
                    resizeMode="center"
                    style={PaymentStyles.SetbgImage}
                  />
                  <Text style={PaymentStyles.CreditCardText}>
                    {t('Creadit_Debit_ATM_Cards')}
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={PaymentStyles.SetFlexRowArrowLeftTwo} />

              <TouchableOpacity
                style={[
                  PaymentStyles.FlexRowCreditCardTwo,
                  PaymentStyles.BottomBorder,
                ]}
                onPress={() => paymentSuccess()}>
                <View style={PaymentStyles.IconSetBorderWidth}>
                  <Image
                    source={images.paypal}
                    resizeMode="center"
                    style={PaymentStyles.SetbgImage}
                  />
                </View>
                <Text style={PaymentStyles.CreditCardText}>{t('Paypal')}</Text>
              </TouchableOpacity>

              <Text
                style={[
                  PaymentStyles.CardTextStyleTwo,
                  { color: Colors.theme_background_grape },
                ]}>
                {t('UPI')}
              </Text>

              <TouchableOpacity
                style={PaymentStyles.FlexRowCreditCardTwo}
                onPress={() => paymentSuccess()}>
                <View style={PaymentStyles.IconSetBorderWidth}>
                  <Image
                    source={images.Upi}
                    resizeMode="center"
                    style={PaymentStyles.SetbgImage}
                  />
                </View>
                <Text style={PaymentStyles.CreditCardText}>{t('UPI')}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={PaymentStyles.FlexRowCreditCardTwo}
                onPress={() => paymentSuccess()}>
                <View style={PaymentStyles.IconSetBorderWidth}>
                  <Image
                    source={images.Google_pay}
                    resizeMode="center"
                    style={PaymentStyles.SetbgImage}
                  />
                </View>
                <Text style={PaymentStyles.CreditCardText}>{t('G_pay')}</Text>
              </TouchableOpacity>

              <Text style={PaymentStyles.CardTextStyleThree}>
                {t('Wallets')}
              </Text>

              <FlatList
                data={Paymentdata}
                renderItem={({ item, index }) => (
                  <PaymentTypeFun
                    item={item}
                    index={index}
                    onPress={() => paymentSuccess()}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default MangePaymentMethode;
