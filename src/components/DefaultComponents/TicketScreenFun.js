import React, { useMemo } from "react";
import { View, Text } from 'react-native';
import { TicketScreenStyle } from '../../styles';
import { useTheme } from '@react-navigation/native';

const TicketScreenFun = (props) => {
    const { textleftmain, textrightmain, textleftsub, textrightsub } = props;
    const { Colors } = useTheme();
    const TicketScreenStyles = useMemo(() => TicketScreenStyle(Colors), [Colors]);

    return (
        <View style={TicketScreenStyles.Flexviewnametitle}>
            <View>
                <Text style={TicketScreenStyles.nametextstyles}>{textleftmain}</Text>
                <Text style={TicketScreenStyles.nametextstylestwo}>{textleftsub}</Text>
            </View>

            <View>
                <Text style={TicketScreenStyles.nametextstyles}>{textrightmain}</Text>
                <Text style={TicketScreenStyles.nametextstylestwo}>{textrightsub}</Text>
            </View>
        </View>
    )
}
export default TicketScreenFun;