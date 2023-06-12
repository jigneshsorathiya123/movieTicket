import React, { useMemo } from "react";
import { View, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import { HomeTabStyles } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const UpcomingMoviewFunc = (props) => {
    const { item, index, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);

    return (
        <TouchableOpacity style={HomeTabStyless.UpMovieBoxWrap} onPress={() => onPress()}>

            <View style={HomeTabStyless.UpMoviewBannerWrap}>
                <View style={HomeTabStyless.UpMoviewLinearGradiant} >
                    <ImageBackground source={item.UpcomMoviewBanner} resizeMode='cover' style={HomeTabStyless.OverLay} />
                    <View style={HomeTabStyless.UpcomMovieBannerImgBox}>
                        <Image source={item.UpcomMoviewBanner} style={HomeTabStyless.UpcomMovieBannerImg} resizeMode='cover' />
                    </View>
                </View>
            </View>

            <View style={HomeTabStyless.MovieCradHeadBox}>
                <View>
                    <View >
                        <Text style={HomeTabStyless.UpHeadOnewText}>{t(item.lang)}</Text>
                        <View style={HomeTabStyless.langtext}><Text>{t(item.UpHeadOnew)}</Text></View>
                        <Text style={HomeTabStyless.EntertainmanetText}>{t(item.Entertainmanet)}</Text>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    )
}
export default UpcomingMoviewFunc;