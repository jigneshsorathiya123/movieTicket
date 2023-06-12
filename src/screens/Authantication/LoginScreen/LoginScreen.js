import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Button, Container, Input, Spacing } from '../../../components';
import { RouteName } from '../../../routes';
import { Style, Login } from '../../../styles';
import { SH, SF, SW } from '../../../utils';
import { useTheme } from '@react-navigation/native';
import images from '../../../index';
import { useTranslation } from 'react-i18next';

const LoginScreen = props => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const { t } = useTranslation();

  const Logins = useMemo(() => Login(Colors), [Colors]);
  const Styles = useMemo(() => Style(Colors), [Colors]);

  const stateArray = {
    mobileNumber: '',
    textInputPassword: '',
  };
  const [state, setState] = useState(stateArray);
  const [passwordVisibility, setpasswordVisibility] = useState(true);

  const onChangeText = text => {
    if (text === 'TextInputPassword')
      setpasswordVisibility(!passwordVisibility);
  };

  const OnRegisterPress = () => {
    navigation.navigate(RouteName.REGISTER_SCREEN);
  };

  return (
    <Container>
      <View style={Logins.MinViewScreen}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Styles.ScrollViewTestHeight}>
          <View style={Logins.Container}>
            <View style={Styles.MinViewContent}>
              <Text style={Logins.LoginText}>{t('Login_Text')}</Text>
              <Spacing space={SH(20)} />
              <View style={Logins.InputSpaceView}>
                <Input
                  placeholder={t('Mobile_Number')}
                  onChangeText={text =>
                    setState({ ...state, mobileNumber: text })
                  }
                  value={state.mobileNumber}
                  inputType="numeric"
                  maxLength={10}
                  placeholderTextColor={Colors.gray_text_color}
                />
              </View>
              <Spacing space={SH(20)} />

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
              <View style={Logins.ViewTextStyle}>
                <Text style={Logins.TextStyle}>
                  {t('Dont_Have_Account')}{' '}
                  <Text
                    style={Logins.registerTextStyle}
                    onPress={() => OnRegisterPress()}>
                    {' '}
                    {t('Register_Text')}
                  </Text>
                </Text>
              </View>
              <Spacing space={SH(20)} />
              <View style={Logins.LoginButton}>
                <Button
                  title={t('Login_Text')}
                  onPress={() =>
                    navigation.navigate(RouteName.OTP_VERYFY_SCREEN)
                  }
                />
              </View>
              <Spacing space={SH(10)} />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(RouteName.FORGOT_PASSSWWORD)
                }>
                <Text style={Logins.ForgetPasswordStyles}>
                  {t('Forgot_Password')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
export default LoginScreen;
