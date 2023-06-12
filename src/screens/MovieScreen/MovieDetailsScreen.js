import React, { useState, useMemo } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { MovieDetailScreenStyle } from '../../styles';
import { RouteName } from '../../routes';
import {
  SF,
  TicketTimeshowdata,
  TicketTimeshowdata1,
  TicketTimeshowdata2,
} from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { MovieTicketTimeFun, Spacing, VideoMovie } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';

const MovieDetailsScreen = props => {
  const { navigation, route } = props;
  const selected = route.params.selected;
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const MovieDetailScreenStyles = useMemo(
    () => MovieDetailScreenStyle(Colors),
    [Colors],
  );

  const OnBookScreen = () => {
    navigation.navigate(RouteName.MOVIE_BOOK_SCREEN);
  };

  const [liked, setLiked] = useState();

  const MobileSelect = (item, index) => {
    return (
      <View style={MovieDetailScreenStyles.MovieHeadBoxWrap}>
        <View style={MovieDetailScreenStyles.MovieHeadBox}>
          <Image
            source={item.img}
            resizeMode="contain"
            style={MovieDetailScreenStyles.MovieIcon}
          />
          <View style={MovieDetailScreenStyles.CityMainBox}>
            <Text style={MovieDetailScreenStyles.CityText}>
              {t(item.Cityfrom)}
            </Text>
            <Text style={MovieDetailScreenStyles.CityText}>
              {t(item.Cityto)}
            </Text>
          </View>
        </View>
        <View style={MovieDetailScreenStyles.MovieHeadBoxLast}>
          <TouchableOpacity style={MovieDetailScreenStyles.MovieiconBox}>
            <Text style={MovieDetailScreenStyles.PlaceNameText}>
              {t(item.PlaceName)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              MovieDetailScreenStyles.MovieiconBox,
              MovieDetailScreenStyles.padLeft,
            ]}>
            <Text style={MovieDetailScreenStyles.PlaceNameText}>
              {t(item.SearchText)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={MovieDetailScreenStyles.minstyleviewphotograpgyTow}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={MovieDetailScreenStyles.contentContainerStyle}>
        <View style={MovieDetailScreenStyles.minflexview}>
          <View style={MovieDetailScreenStyles.minviewsigninscreen}>
            {/* <VideoMovie /> */}
            <Image
              source={selected.MoviewBanner}
              style={{
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').width,
              }}
            />
            <View>
              <View style={MovieDetailScreenStyles.MoviewlikeBoxDetails}>
                <View style={MovieDetailScreenStyles.FlexRow}>
                  <Text style={MovieDetailScreenStyles.LikePerText}>
                    {selected.MovieName}
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      MovieDetailScreenStyles.MovieNameText,
                      MovieDetailScreenStyles.Textwhite,
                    ]}>
                    {selected.LikePer}
                  </Text>
                  <View style={MovieDetailScreenStyles.MovieDubInfor}>
                    <Text
                      style={[
                        MovieDetailScreenStyles.RateText,
                        MovieDetailScreenStyles.Textwhite,
                      ]}>
                      {t('Rating')}
                    </Text>
                    <View
                      style={[
                        MovieDetailScreenStyles.DotStyle,
                        MovieDetailScreenStyles.WhiteDot,
                      ]}></View>
                    <Text
                      style={[
                        MovieDetailScreenStyles.RateText,
                        MovieDetailScreenStyles.Textwhite,
                      ]}>
                      30.5 K
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={MovieDetailScreenStyles.MrtopSet}>
              <View style={MovieDetailScreenStyles.MoviewticketBookflex}>
                <View style={MovieDetailScreenStyles.MonthBoxrotatestyle}>
                  <Text style={MovieDetailScreenStyles.Monthrotatestyle}>
                    {t('MAR')}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => setLiked(0)}
                  style={
                    liked === 0
                      ? MovieDetailScreenStyles.MonthActiveBox
                      : MovieDetailScreenStyles.MonthBox
                  }>
                  <Text
                    style={
                      liked === 0
                        ? MovieDetailScreenStyles.MonthDayTextActive
                        : MovieDetailScreenStyles.MonthDayText
                    }>
                    {t('Mon')}
                  </Text>
                  <Text
                    style={
                      liked === 0
                        ? MovieDetailScreenStyles.MonthDayActiveTextNumber
                        : MovieDetailScreenStyles.MonthDayTextNumber
                    }>
                    31
                  </Text>
                </TouchableOpacity>
                <View style={MovieDetailScreenStyles.MonthBoxrotatestyle}>
                  <Text style={MovieDetailScreenStyles.Monthrotatestyle}>
                    {t('APR')}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => setLiked(1)}
                  style={
                    liked === 1
                      ? MovieDetailScreenStyles.MonthActiveBox
                      : MovieDetailScreenStyles.MonthBox
                  }>
                  <Text
                    style={
                      liked === 1
                        ? MovieDetailScreenStyles.MonthDayTextActive
                        : MovieDetailScreenStyles.MonthDayText
                    }>
                    {t('Tue')}
                  </Text>
                  <Text
                    style={
                      liked === 1
                        ? MovieDetailScreenStyles.MonthDayActiveTextNumber
                        : MovieDetailScreenStyles.MonthDayTextNumber
                    }>
                    01
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setLiked(2)}
                  style={
                    liked === 2
                      ? MovieDetailScreenStyles.MonthActiveBox
                      : MovieDetailScreenStyles.MonthBox
                  }>
                  <Text
                    style={
                      liked === 2
                        ? MovieDetailScreenStyles.MonthDayTextActive
                        : MovieDetailScreenStyles.MonthDayText
                    }>
                    {t('Wednesday')}
                  </Text>
                  <Text
                    style={
                      liked === 2
                        ? MovieDetailScreenStyles.MonthDayActiveTextNumber
                        : MovieDetailScreenStyles.MonthDayTextNumber
                    }>
                    02
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Spacing />

            <MovieTicketTimeFun
              data={TicketTimeshowdata}
              Cinemaname={t('Inox_World')}
              textfirst={t('Food_Provide')}
              textmiddle={t('Online_Pay')}
              textlast={t('More_Info')}
              onPress={() => OnBookScreen()}
              kilometer={'6 km'}
            />

            <MovieTicketTimeFun
              data={TicketTimeshowdata1}
              Cinemaname={t('Galaxy')}
              textfirst={t('Parking')}
              textmiddle={t('Online_Pay')}
              textlast={t('More_Info')}
              onPress={() => OnBookScreen()}
              kilometer={'11 km'}
            />

            <MovieTicketTimeFun
              data={TicketTimeshowdata2}
              Cinemaname={t('Cosmo_INOX')}
              textfirst={t('Parking')}
              textmiddle={t('Recliners')}
              textlast={t('More_Info')}
              onPress={() => OnBookScreen()}
              kilometer={'07 km'}
            />

            <MovieTicketTimeFun
              data={TicketTimeshowdata}
              Cinemaname={t('Cosmo_MovieDetail')}
              textfirst={t('More_Info')}
              textmiddle={t('Super_Accepted')}
              textlast={t('More_Info')}
              onPress={() => OnBookScreen()}
              kilometer={'03 km'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailsScreen;
