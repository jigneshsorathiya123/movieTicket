import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, TextInput } from "react-native";
import { HelpScreenStyles } from '../../styles';
import { Button, Spacing, ConfirmationAlert } from '../../components';
import { SH } from '../../utils';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const HelpScreen = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const { Colors } = useTheme();
  const HelpScreenStyless = useMemo(() => HelpScreenStyles(Colors), [Colors]);

  var alertdata = {
    'logout': t("Help_sand_mail_Successful"),
  }

  const onoknutton = () => {
    navigation.navigate(RouteName.HOME_TAB);
  }

  return (
    <View style={HelpScreenStyless.MinViewScreen}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={HelpScreenStyless.MainViewHelp}>
        <KeyboardAvoidingView enabled>
          <View style={HelpScreenStyless.HelpViewStyles}>
            <Spacing space={SH(30)} />
            <View style={HelpScreenStyless.MinContentView}>
              <View>
                <TextInput style={HelpScreenStyless.TextInputWidth} placeholder={t("Type_Your_Message")} placeholderTextColor="gray" />
              </View>
              <View>
                <Text style={HelpScreenStyless.TextInputeText}>{t("Help_paregraph")}</Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={HelpScreenStyless.ButtonStyle}>
        <Button onPress={() => {
          setAlertVisible(true);
          setAlertMessage(alertdata.logout);
        }} title={t("Help_sand_mail")} />
      </View>
      <ConfirmationAlert
        message={alertMessage}
        modalVisible={alertVisible}
        iconVisible={true}
        setModalVisible={setAlertVisible}
        onPressCancel={() => setAlertVisible(!alertVisible)}
        onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
        buttonminview={HelpScreenStyless.FlexCenterButton}
        buttonText={t("Ok")}
      />
    </View>
  );
};
export default HelpScreen;