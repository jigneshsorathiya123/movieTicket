import React, { useEffect, useMemo } from 'react';
import { View, StatusBar, Image } from 'react-native';
import images from '../../index';
import { Style } from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { RouteName } from '../../routes';
import { Colors } from '../../utils';
import { useSelector } from "react-redux";
import { useTheme } from '@react-navigation/native';

const SplashScreen = (props) => {
    const { navigation } = props;
    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    const { Colors } = useTheme();
    const Styles = useMemo(() => Style(Colors), [Colors]);

    StatusBar.setBackgroundColor(Colors.bg_white);

    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('user_id').then((value) =>
                navigation.replace(RouteName.SWIPER_SCREEN)
            );
        }, 200);
        {
            colorrdata != '' ?
                dispatch(color_picker_set_action(colorrdata))
                :
                dispatch(color_picker_set_action(Colors.theme_background_grape))
        }
    }, []);
    return (
        <View style={Styles.SplashMinView}>
            <View style={Styles.MinViewStyleSplash}>
                <Image source={images.movie_icon} style={Styles.SplashImageStyle} resizeMode='center' />
            </View>
        </View>
    );
};
export default SplashScreen;