import React, { useMemo } from "react";
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { PaymentHistoryTabStyle } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const PaymentHistoryFun = (props) => {
    const { index, item, onPress } = props;
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const PaymentHistoryTabStyles = useMemo(() => PaymentHistoryTabStyle(Colors), [Colors]);

    return (
        <TouchableOpacity style={PaymentHistoryTabStyles.PaymentBoxPerent} onPress={() => onPress()}>
            <View style={PaymentHistoryTabStyles.PaymentBox}>
                <View>
                    <Image source={item.image} style={PaymentHistoryTabStyles.PaymentIcon} resizeMode='contain' />
                </View>
                <View style={PaymentHistoryTabStyles.payemnttimebox}>
                    <Text style={PaymentHistoryTabStyles.PayemnttranferheadText}>{t(item.paymenttype)}</Text>
                    <Text style={PaymentHistoryTabStyles.PaymentTimeText}>{item.Time}</Text>
                </View>
            </View>
            <View style={PaymentHistoryTabStyles.PaymentAounttextpadright}>
                <Text style={PaymentHistoryTabStyles.PaymentAounttext}>{item.Price}</Text>
                <Text style={[PaymentHistoryTabStyles.PayemntStatus, { color: item.Colour }]}>{t(item.Result)}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default PaymentHistoryFun;