import React, { useMemo } from "react";
import { Text, View } from 'react-native';
import { HomeTabStyles } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const PopularCinemaFun = (props) => {
    const { item, index, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);

    return (
        <View style={HomeTabStyless.MovieTicketFilterBox}>
            <Text style={HomeTabStyless.FilterNameText}>{t(item.FilterName)}</Text>
        </View>
    )
}
export default PopularCinemaFun;