import React, { useMemo } from "react";
import { View, FlatList } from "react-native";
import { PaymentHistoryTabStyle } from '../../../styles';
import { RouteName } from "../../../routes";
import { useTheme } from '@react-navigation/native';
import { PaymentHistoryData } from "../../../utils";
import { PaymentHistoryFun } from "../../../components";

const HistoryTab = (props) => {
    const { navigation } = props;

    const { Colors } = useTheme();
    const PaymentHistoryTabStyles = useMemo(() => PaymentHistoryTabStyle(Colors), [Colors]);

    return (
        <View style={[PaymentHistoryTabStyles.MinStyleViewPhotograpgyTwo, PaymentHistoryTabStyles.bgColorset]}>
            <View style={PaymentHistoryTabStyles.minflexview}>
                <View style={PaymentHistoryTabStyles.ContainerAppointmentWrap}>
                    <View style={PaymentHistoryTabStyles.PaymentBoxwrap}>
                        <FlatList
                            data={PaymentHistoryData}
                            numColumns={1}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                <PaymentHistoryFun
                                    item={item}
                                    index={index}
                                    onPress={() => navigation.navigate(RouteName.TICKET_SCREEN)}
                                />}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </View>
        </View >
    );
};
export default HistoryTab;