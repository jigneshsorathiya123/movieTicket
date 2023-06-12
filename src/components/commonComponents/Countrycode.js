import React, {useState, useMemo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Login} from '../../styles';
import {useTheme} from '@react-navigation/native';
import CountryPicker from 'react-native-country-picker-modal';
import {SF} from '../../utils';

const Countrycode = () => {
  const {Colors} = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const [callingCode, setCallingCode] = useState('+91');
  const [countryCode, setCountryCode] = useState('IN');
  const [withCallingCodeButton, setwithCallingCodeButton] = useState(true);
  const [withFlagButton, setwithFlagButton] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [showCountryModal, setShowCountryModal] = useState(false);

  const onSelect = country => {
    setCallingCode('+' + country?.callingCode[0]);
    setCountryCode(country.cca2);
  };
  return (
    <View>
      <TouchableOpacity
        style={Logins.countryCodePickerView}
        onPress={() => {
          setShowCountryModal(true);
        }}>
        <CountryPicker
          {...{
            countryCode,
            withCallingCodeButton,
            withFlagButton,
            withCallingCode,
            withFilter,
            onSelect,
          }}
          modalProps={{
            visible: showCountryModal,
          }}
          onClose={() => setShowCountryModal(false)}
          onOpen={() => setShowCountryModal(true)}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Countrycode;
