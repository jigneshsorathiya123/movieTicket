import React, { useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, Image } from "react-native";
import { TicketScreenStyle } from '../../styles';
import { Button, Spacing, TicketScreenFun } from '../../components';
import { SH } from '../../utils';
import images from "../../index";
import { RouteName } from "../../routes";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const TicketScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const TicketScreenStyles = useMemo(() => TicketScreenStyle(Colors), [Colors]);

  return (
    <View style={[TicketScreenStyles.minstyleviewphotograpgy, TicketScreenStyles.bgColorset]}>
      <View style={TicketScreenStyles.setwidthsttyles}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          ContentContainerStyle={TicketScreenStyles.MainViewTicketScreen}>
          <KeyboardAvoidingView enabled>
            <View style={TicketScreenStyles.minflexview}>
              <View style={TicketScreenStyles.MinViewSigninScreen}>
                <Spacing space={SH(70)} />

                <View style={TicketScreenStyles.qrcodescanner}>
                  <View>
                    <Text style={TicketScreenStyles.qrcosetitlestyles}>{t("Movie_Name_Ticket")}</Text>
                    <Image source={images.QR_image} resizeMode={'contain'} style={TicketScreenStyles.imagestyleset} />
                    <Text style={TicketScreenStyles.ticketqrnumber}>( CBCE - 6098-53092 )</Text>
                  </View>
                </View>

                <View>
                  <Spacing space={SH(15)} />
                  <TicketScreenFun
                    textleftmain={t("Name")}
                    textleftsub={t("John_Gooch")}
                    textrightmain={t("Ticket_No")}
                    textrightsub={'#803'}
                  />
                  <Spacing space={SH(20)} />
                  <TicketScreenFun
                    textleftmain={t("Date")}
                    textleftsub={'Feb 17, 2023'}
                    textrightmain={t("Cinema")}
                    textrightsub={t("Ticket_Cinema")}
                  />
                  <Spacing space={SH(20)} />
                  <TicketScreenFun
                    textleftmain={t("Show")}
                    textleftsub={'07:10 PM'}
                    textrightmain={t("Class")}
                    textrightsub={t("Economy")}
                  />
                  <TicketScreenFun
                    textleftmain={t("Seat")}
                    textleftsub={'F - 18, 19'}
                    textrightmain={t("Ticket_Price")}
                    textrightsub={'₹ 570.00'}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={TicketScreenStyles.Buttonviewset}>
          <Button onPress={() => navigation.navigate(RouteName.HOME_TAB)} title={t("Download_Ticket")} />
        </View>
      </View>
    </View >
  );
};
export default TicketScreen;