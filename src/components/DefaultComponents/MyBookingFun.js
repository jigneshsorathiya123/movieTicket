import React, { useState, useMemo } from "react";
import { View, TouchableOpacity, FlatList, Text, Image } from 'react-native';
import { MyBookingTabStyle } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { Spacing } from "../commonComponents";
import { useTranslation } from "react-i18next";

const MyBookingFun = (props) => {
    const { index, item, onPress } = props;
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const MyBookingTabStyles = useMemo(() => MyBookingTabStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => onPress()} style={MyBookingTabStyles.MinBgColorWhite}>
            <View style={MyBookingTabStyles.FlexRow}>
                <View style={MyBookingTabStyles.DevelperStyles}>
                    <View style={MyBookingTabStyles.ImagWidthTextFlex}>
                        <View style={MyBookingTabStyles.ImageViewStyles}>
                            <Image source={item.image} style={MyBookingTabStyles.Imagestyles} />
                        </View>

                        <View style={MyBookingTabStyles.TextViewTop} >
                            <Text style={MyBookingTabStyles.DevelperText}>{t(item.text)}</Text>
                            <Spacing />
                            <Text style={MyBookingTabStyles.DevelperTextTwo}>{t(item.Class)}</Text>
                        </View>
                    </View>
                </View>

                <View style={MyBookingTabStyles.Widthfifty}>
                    <Text style={MyBookingTabStyles.DevelperTexttwo}>{item.salerytext}</Text>
                    <Text style={MyBookingTabStyles.Normalsmalltexttwo}>{t("Screen")} {item.countryname} {item.Type}</Text>
                    <Text style={MyBookingTabStyles.Normalsmalltexttwo}>{t(item.Cinema)}</Text>
                </View>

            </View>
            <View style={MyBookingTabStyles.Twobuttonflexview}>
                <View style={MyBookingTabStyles.Statusbutton}>
                    <Text style={MyBookingTabStyles.Openbuttontextstyles}>{item.buttontext}</Text>
                </View>
                <View>
                    <Text style={MyBookingTabStyles.Fulltimetextstyle}>{item.fulltimetext} {t("Tickets")}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default MyBookingFun;