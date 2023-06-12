import React, { useState, useMemo } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Creditcard } from '../../styles';
import { Button, Container, Spacing, AppHeader, Input } from '../../components';
import images from '../../index';
import { RouteName } from '../../routes';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SH } from '../../utils';

const CreditCardScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const [CardNumber, setCardNumber] = useState('');
  const [CvvNumber, setCvvNumber] = useState('');
  const { t } = useTranslation();

  const [name, setName] = useState('');

  const { Colors } = useTheme();
  const CreditcardStyle = useMemo(() => Creditcard(Colors), [Colors]);

  return (
    <Container>
      <Spacing />
      <AppHeader
        headerTitle={t('Credit_Card')}
        Iconname={true}
        onPress={() => navigation.replace(RouteName.PAYMENT_SCREEN)}
      />
      <View style={CreditcardStyle.MinStyleViewPhotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          ContentContainerStyle={CreditcardStyle.MainViewCreditCard}>
          <View style={CreditcardStyle.MinViewSigninScreen}>
            <View style={CreditcardStyle.SetWidthImage}>
              <Image
                source={images.creditcard_img}
                resizeMode="cover"
                style={CreditcardStyle.CreditCard}
              />
            </View>

            <View style={CreditcardStyle.SetStyleInputText}>
              <Text style={CreditcardStyle.TextStyle}>{t('Name')}</Text>
              <Input
                placeholder={t('John_Gooch')}
                value={name}
                onChangeText={text => setName(text)}
                style={CreditcardStyle.InputStyle}
              />
            </View>

            <Spacing space={SH(18)} />
            <View style={CreditcardStyle.SetStyleInputText}>
              <View style={CreditcardStyle.flexrowsetcemera}>
                <View>
                  <Text style={CreditcardStyle.TextStyle}>
                    {t('Card_Number')}
                  </Text>
                  <Input
                    placeholder="8644 4356 8243 8070"
                    keyboardType="numeric"
                    maxLength={16}
                    value={CardNumber}
                    onChangeText={text => setCardNumber(text)}
                    style={CreditcardStyle.InputStyle}
                  />
                </View>
              </View>
            </View>

            <View style={CreditcardStyle.FlexRowsetInput}>
              <View style={CreditcardStyle.SetStyleInputTextTwo}>
                <Text style={CreditcardStyle.TextStyle}>mm/yy</Text>
                <Input
                  placeholder="02/24"
                  onChangeText={text => setMobileNumber(text)}
                  value={mobileNumber}
                  maxLength={4}
                  keyboardType="numeric"
                  style={CreditcardStyle.InputStyle}
                />
              </View>
              <View style={CreditcardStyle.SetStyleInputTextTwo}>
                <Text style={CreditcardStyle.TextStyle}>cvv</Text>
                <Input
                  placeholder="502"
                  onChangeText={text => setCvvNumber(text)}
                  value={CvvNumber}
                  maxLength={3}
                  keyboardType="numeric"
                  style={CreditcardStyle.InputStyle}
                />
              </View>
            </View>
            <View style={CreditcardStyle.SetButtonStyle}>
              <Button
                title={t('Pay_with_Card')}
                onPress={() => navigation.replace(RouteName.PAYMENT_SUCCESSFUL)}
                buttonTextStyle={CreditcardStyle.SetButtonTextStyle}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default CreditCardScreen;
