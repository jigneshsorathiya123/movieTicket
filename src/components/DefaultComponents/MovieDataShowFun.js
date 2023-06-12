import React, { useMemo } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { HomeTabStyles } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SF, SW, SH } from '../../utils';
import { Button } from '../commonComponents';

const MovieDataShowFun = props => {
  const { item, index, onPress } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);

  return (
    <View style={HomeTabStyless.MovieBoxWrap}>
      <TouchableOpacity
        style={HomeTabStyless.MoviewBannerWrap}
        onPress={() => onPress()}>
        <Image
          source={item.MoviewBanner}
          style={HomeTabStyless.MovieBannerImg}
          resizeMode="cover"
        />
        <View style={HomeTabStyless.MoviewlikeBox}>
          <Text style={HomeTabStyless.LikePerText}>{item.LikePer}</Text>
        </View>
      </TouchableOpacity>
      <View style={HomeTabStyless.MovieCradHeadBox}>
        <View>
          <Text style={HomeTabStyless.MovieNameText}>{t(item.MovieName)}</Text>
          <View style={HomeTabStyless.MovieDubInfor}>
            <Text style={HomeTabStyless.RateText}>{item.Rate}</Text>
            <View style={HomeTabStyless.DotStyle} />
            <Text
              style={[HomeTabStyless.RateText, { flex: 1 }]}
              numberOfLines={1}>
              {t(item.Lang)}
            </Text>
          </View>
          <View style={HomeTabStyless.MovieViewBox}>
            <Text style={HomeTabStyless.MovieView}>{item.Version}</Text>
          </View>
        </View>
        <View>
          <Button
            buttonStyle={HomeTabStyless.ButtonBookBTn}
            buttonTextStyle={HomeTabStyless.btnText}
            title={t('Book_Now')}
            onPress={() => onPress()}
          />
        </View>
      </View>
    </View>
  );
};
export default MovieDataShowFun;
