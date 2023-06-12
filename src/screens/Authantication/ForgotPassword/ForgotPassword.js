import React, {useState, useMemo} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Login} from '../../../styles';
import {
  Button,
  ConfirmationAlert,
  Spacing,
  AppHeader,
  Input,
} from '../../../components';
import {SH} from '../../../utils';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import {RouteName} from '../../../routes';

const ForgotPassword = props => {
  const {t} = useTranslation();
  const {Colors} = useTheme();
  const {navigation} = props;
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const [email, setEmailValidError] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  var alertdata = {
    logout: t('Email_Successfull'),
  };

  return (
    <View style={Logins.TopView}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Logins.MainViewForgot}>
        <AppHeader
          onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}
          Iconname={true}
          headerTitle={t('Forget_Password')}
        />
        <View style={Logins.TabMinView}>
          <View>
            <View style={Logins.InputUnderLine}>
              <Input
                placeholder={t('Enter_Email')}
                inputStyle={Logins.InputTextStyle}
                onChangeText={e => setEmailValidError(e)}
                keyboardType={'email-address'}
                value={email}
              />
            </View>
            <Spacing space={SH(20)} />
            <Text style={Logins.SeTextStyleForget}>
              <Text style={Logins.StarColor}> * </Text>{' '}
              {t('We_Well_Sand_Message')}
            </Text>
            <Spacing space={SH(20)} />
            <Button
              onPress={() => {
                setAlertVisible(true);
                setAlertMessage(alertdata.logout);
              }}
              title={t('Submitbutton')}
            />

            <ConfirmationAlert
              message={alertMessage}
              buttonminview={Logins.CenterButton}
              modalVisible={alertVisible}
              setModalVisible={setAlertVisible}
              onPressCancel={() => setAlertVisible(!alertVisible)}
              onPress={() => {
                setAlertVisible(!alertVisible);
              }}
              iconVisible={true}
              buttonText={t('Ok')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ForgotPassword;
