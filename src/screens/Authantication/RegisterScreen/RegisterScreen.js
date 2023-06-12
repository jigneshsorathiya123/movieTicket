import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  Input,
  Button,
  CheckBox,
  Spacing,
  Countrycode,
} from '../../../components';
import { SH } from '../../../utils';
import { RouteName } from '../../../routes';
import { Login, Style } from '../../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const Register = props => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const Styles = useMemo(() => Style(Colors), [Colors]);

  const stateArray = {
    username: '',
    emailId: '',
    mobileNumber: '',
    textInputPassword: '',
    toggleCheckBox: false,
  };
  const [state, setState] = useState(stateArray);
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const onChangeText = (text, type) => {
    if (text === 'TextInputPassword')
      setPasswordVisibility(!passwordVisibility);
  };

  return (
    <View style={Logins.MinViewBgColor}>
      <ScrollView contentContainerStyle={Styles.ScrollViewStyle}>
        <View style={Logins.Container}>
          <View style={Styles.MinViewContent}>
            <View style={Logins.TopSpaceRegister}>
              <Text style={Logins.RegisterText}>{t('Sign_Up_Text')}</Text>
            </View>
            <View style={Logins.TopSpaceRegisterTwo}>
              <Text style={Logins.FirstNameTextStyle}>
                {t('Full_Name_Text')}
              </Text>
            </View>
            <Input
              placeholder={t('Enter_Your_Name')}
              onChangeText={text => setState({ ...state, username: text })}
              value={state.username}
            />
            <Spacing space={SH(20)} />
            <View style={Logins.TopSpaceRegisterTwo}>
              <Text style={Logins.FirstNameTextStyle}>
                {t('Mobile_number')}
              </Text>
            </View>
            <View style={Logins.MinVieCountry}>
              <View style={Logins.DropDownIconFlex}>
                <Countrycode />
              </View>
              <Input
                placeholder={t('Mobile_Number')}
                onChangeText={text =>
                  setState({ ...state, mobileNumber: text })
                }
                value={state.mobileNumber}
                maxLength={10}
                inputType="numeric"
                placeholderTextColor={Colors.gray_text_color}
                inputStyle={Logins.Inputstyle}
              />
            </View>
            <Spacing space={SH(20)} />
            <View style={Logins.TopSpaceRegisterTwo}>
              <Text style={Logins.FirstNameTextStyle}>{t('Email_Text')}</Text>
            </View>
            <Input
              placeholder={t('Enter_Your_Email')}
              onChangeText={text => setState({ ...state, emailId: text })}
              value={state.emailId}
              placeholderTextColor={Colors.gray_text_color}
            />
            <Spacing space={SH(20)} />
            <View style={Logins.TopSpaceRegisterTwo}>
              <Text style={Logins.FirstNameTextStyle}>
                {t('Password_Text')}
              </Text>
            </View>
            <View style={Styles.FlexRowPasswordInput}>
              <Input
                inputStyle={Logins.InputPassword}
                name="password"
                value={state.textInputPassword}
                placeholder={t('Password_Text')}
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor={Colors.gray_text_color}
                textContentType="newPassword"
                secureTextEntry={passwordVisibility}
                enablesReturnKeyAutomatically
                onChangeText={text =>
                  setState({ ...state, textInputPassword: text })
                }
              />
            </View>
            <Spacing space={SH(10)} />
            <View style={Logins.FlexRowChekBox}>
              <View>
                <CheckBox
                  disabled={false}
                  value={state.toggleCheckBox}
                  tintColors={{
                    true: Colors.theme_background_grape,
                    false: Colors.theme_background_grape,
                  }}
                  onValueChange={text =>
                    setState({ ...state, toggleCheckBox: text })
                  }
                />
              </View>
              <Text style={Logins.SimpleTextStyle}>
                {t('I_Agree_Text')}{' '}
                <Text style={Logins.borderbottomTwo}>
                  <Text
                    style={Logins.bluecolor}
                    onPress={() =>
                      Linking.openURL('https://myaccount.google.com/')
                    }>
                    {' '}
                    {t('Terms_Of_Service')}{' '}
                  </Text>
                </Text>
                {t('And_text')}{' '}
                <Text
                  onPress={() =>
                    Linking.openURL('https://myaccount.google.com/')
                  }
                  style={Logins.bluecolor}>
                  {t('Privacy_Policy')}
                </Text>
              </Text>
            </View>
            <Spacing space={SH(20)} />
            <View style={Logins.ButtonView}>
              <Button
                title={t('Sign_Up_Text')}
                onPress={() =>
                  navigation.navigate(RouteName.REGIATRAION_SUCCESSFULL)
                }
              />
            </View>
            <Spacing space={SH(20)} />
            <View style={Logins.TopSpace}>
              <View style={Logins.AlredyAndLoginBox}>
                <Text style={Logins.MemberTextStyle}>
                  {t('Already_Member')}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
                  <Text style={Logins.LoginScreenText}>{t('Login_Text')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Register;
