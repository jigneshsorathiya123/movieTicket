import React, {useState, useMemo} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Sidemenu} from '../../styles';
import {RouteName} from '../../routes';
import {ConfirmationAlert} from '../../components';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';

const CustomSidebarMenu = props => {
  const {t} = useTranslation();
  const {navigation} = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');

  const {Colors} = useTheme();
  const SidemenuStyle = useMemo(() => Sidemenu(Colors), [Colors]);

  var alertdata = {
    logout: t('Are_You_Sure_logout'),
  };
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
    okbutton;
  };
  const Onpressfunction = e => {
    navigation.toggleDrawer();
    navigation.navigate(e);
  };
  return (
    <ScrollView>
      <View style={SidemenuStyle.customslidebarmenu}>
        <TouchableOpacity
          style={SidemenuStyle.flexrowset}
          onPress={() => Onpressfunction(RouteName.HOME_TAB)}>
          <Text style={SidemenuStyle.hometextstyle}>{t('Home_Text')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={SidemenuStyle.flexrowset}
          onPress={() => Onpressfunction(RouteName.PROFILE_TAB)}>
          <Text style={SidemenuStyle.hometextstyle}>{t('Profile_Text')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={SidemenuStyle.flexrowset}
          onPress={() => Onpressfunction(RouteName.HELP_SCREEN)}>
          <Text style={SidemenuStyle.hometextstyle}>{t('Help_Text')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={SidemenuStyle.flexrowset}
          onPress={() => Onpressfunction(RouteName.SETTING_SCREEN)}>
          <Text style={SidemenuStyle.hometextstyle}>{t('Setting_Text')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={SidemenuStyle.flexrowset}
          onPress={() => Onpressfunction(RouteName.FAQ_SCREEN)}>
          <Text style={SidemenuStyle.hometextstyle}>{t('FAQ_Text')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={SidemenuStyle.flexrowset}
          onPress={() => Onpressfunction(RouteName.REVIEWS_SCREEN)}>
          <Text style={SidemenuStyle.hometextstyle}>{t('Reviews_Screen')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={SidemenuStyle.flexrowset}
          onPress={() => Onpressfunction(RouteName.NOTIFICTION_SCREEN)}>
          <Text style={SidemenuStyle.hometextstyle}>
            {t('Notification_Text')}
          </Text>
        </TouchableOpacity>
        <View style={SidemenuStyle.settingandlogout}>
          <TouchableOpacity
            style={SidemenuStyle.flexrowset}
            onPress={() => {
              setAlertVisible(true);
              setAlertMessage(alertdata.logout);
              Setokbutton('');
            }}>
            <Text style={SidemenuStyle.hometextstyle}>{t('Log_Out')}</Text>
          </TouchableOpacity>
        </View>
        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPressCancel={() => setAlertVisible(!alertVisible)}
          onPress={() => {
            setAlertVisible(!alertVisible), onoknutton();
          }}
          cancelButtonText={t('Cancel_Button')}
          buttonText={t('Ok')}
        />
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;
