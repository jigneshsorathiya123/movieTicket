import React, {useMemo, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {HelpScreenStyles} from '../../styles';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const FaqQueFun = props => {
  const {item, index} = props;
  const {t} = useTranslation();

  const {Colors} = useTheme();
  const HelpScreenStyless = useMemo(() => HelpScreenStyles(Colors), [Colors]);

  const [show, setShow] = useState(null);
  const toggleHandler = id => {
    id === show ? setShow(null) : setShow(id);
  };

  return (
    <TouchableOpacity
      style={HelpScreenStyless.BgColorWhite}
      onPress={() => toggleHandler(item.id)}>
      <View>
        <View style={HelpScreenStyless.FlexRowArrowLeftThree}>
          <View style={HelpScreenStyless.FlexRowCreditCard}>
            <View style={HelpScreenStyless.TextWidth}>
              <Text style={HelpScreenStyless.CreditCardText}>
                {t(item.smalltext)}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {show === item.id && (
        <View>
          <View style={HelpScreenStyless.ParegraPhViewStyle}>
            <Text style={HelpScreenStyless.ParegraphTextHelp}>
              {t(item.paymentparegraph)}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};
export default FaqQueFun;
