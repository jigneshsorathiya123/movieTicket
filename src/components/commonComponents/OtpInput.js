import React, { useState, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Colors, SH, SW, SF } from '../../utils';

function Otp(props) {
    const { code, onCodeChanged } = props;

    const Styles = useMemo(() =>
        StyleSheet.create({
            minviewotpin: {
                width: SW(183),
                height: SH(40),
            },
            settextinputstyle: {
                width: SW(40),
                height: SH(40),
                padding: 0,
                color: Colors.black_text_color,
                fontSize: SF(24),
                borderColor: Colors.gray_text_color,
                fontWeight: '700',
                borderRadius: 7,
                marginHorizontal: SH(10)
            },
            setinputtexttwo: {
                width: SW(40),
                height: SH(40),
                padding: 0,
                borderWidth: SW(1),
                borderRadius: SW(7),
                borderColor: Colors.light_gray_text_color,
                fontSize: SF(28),
                fontWeight: '700',
                color: Colors.black_text_color,
                borderColor: Colors.black_text_color
            },
        })
    )
    return (
        <OTPInputView
            style={Styles.minviewotpin}
            pinCount={6}
            autoFocusOnLoad={false}
            code={code}
            onCodeChanged={(code) => onCodeChanged(code)}
            codeInputFieldStyle={Styles.settextinputstyle}
            codeInputHighlightStyle={Styles.setinputtexttwo}
        />
    )
}

Otp.defaultProps = {
    title: '',
    placeholder: '',
    titleStyle: {},
    inputStyle: {},
    onCodeChanged: () => { },
    onFocus: () => { },
    onBlur: () => { },
    value: '',
    textprops: {},
    inputprops: {},
    inputType: null,
};

Otp.propTypes = {
    title: propTypes.string,
    placeholder: propTypes.string,
    titleStyle: propTypes.shape({}),
    inputStyle: propTypes.shape({}),
    onCodeChanged: propTypes.func,
    value: propTypes.string,
    textprops: propTypes.object,
    inputprops: propTypes.object,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    inputType: propTypes.any,
};

export default Otp;
