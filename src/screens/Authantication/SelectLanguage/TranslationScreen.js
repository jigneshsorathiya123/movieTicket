import React, {useState, useMemo} from 'react';
import '../SelectLanguage/i18n';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  Button,
  Container,
  DropDown,
  Lottie,
  Spacing,
} from '../../../components';
import {LanguageStyles} from '../../../styles';
import RouteName from '../../../routes/RouteName';
import images from '../../../index';
import {SH} from '../../../utils';
import {useTheme} from '@react-navigation/native';

const Translation = props => {
  const {navigation} = props;
  const {t, i18n} = useTranslation();
  const [Language, setLanguage] = useState('en');
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('en');

  const {Colors} = useTheme();
  const LanguageStyless = useMemo(() => LanguageStyles(Colors), [Colors]);

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
    {
      setValue(value);
      setIsFocus(false);
    }
  };

  const DataofDropdown = [
    {label: t('English'), value: 'en'},
    {label: t('Arabic'), value: 'ara'},
    {label: t('Spanish'), value: 'Spa'},
    {label: t('French'), value: 'Fr'},
  ];

  const confirmButton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
  };

  return (
    <Container>
      <View style={LanguageStyless.MinView}>
        <Lottie source={images.Languageanimation} />
        <Spacing space={SH(50)} />
        <View style={LanguageStyless.SelectTagWrap}>
          <Text style={LanguageStyless.SelectText}>{t('Select_Language')}</Text>
          <View
            style={
              isFocus
                ? LanguageStyless.TranslationDropdown
                : LanguageStyless.TranslationDropdownOpen
            }>
            <DropDown
              data={DataofDropdown}
              dropdownStyle={LanguageStyless.DropdownStyles}
              onChange={item => {
                changeLanguage(item.value);
              }}
              search
              maxHeight={SH(250)}
              searchPlaceholder="Search bar"
              IconStyle={LanguageStyless.IconStyle}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              labelField="label"
              valueField="value"
            />
          </View>
        </View>
        <Spacing space={SH(20)} />
        <View style={LanguageStyless.ConfirmButtonView}>
          <Button
            title={t('Confirm_Text')}
            onPress={confirmButton}
            buttonStyle={LanguageStyless.LoginButton}
          />
        </View>
      </View>
    </Container>
  );
};

export default Translation;
