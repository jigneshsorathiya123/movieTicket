import React, {useMemo} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {MovieDetailScreenStyle} from '../../styles';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const MovieTicketTimeFun = props => {
  const {
    data,
    onPress,
    textfirst,
    textmiddle,
    textlast,
    Cinemaname,
    kilometer,
  } = props;
  const {t} = useTranslation();

  const {Colors} = useTheme();
  const MovieDetailScreenStyles = useMemo(
    () => MovieDetailScreenStyle(Colors),
    [Colors],
  );

  const TicketTimeshowdataFun = (item, index) => {
    return (
      <TouchableOpacity
        style={MovieDetailScreenStyles.TimeBoxBorderWrap}
        onPress={() => onPress()}>
        <View style={MovieDetailScreenStyles.TimeBoxBorder}>
          <Text style={MovieDetailScreenStyles.MovieTimeText}>
            {item.MovieTime}
          </Text>
          <Text style={MovieDetailScreenStyles.MovietypeText}>
            {item.Movietype}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={MovieDetailScreenStyles.CinemaViewWrap}>
      <Text style={MovieDetailScreenStyles.movieCinematext}>{Cinemaname}</Text>
      <View style={MovieDetailScreenStyles.FlexRowbeet}>
        <View style={MovieDetailScreenStyles.FlexRow}>
          <Text style={MovieDetailScreenStyles.AddessText}>{textfirst}</Text>
          <View style={MovieDetailScreenStyles.DotStyle}></View>
          <Text style={MovieDetailScreenStyles.AddessText}>{textmiddle}</Text>
          <View style={MovieDetailScreenStyles.DotStyle}></View>
          <Text style={MovieDetailScreenStyles.AddessText}>{textlast}</Text>
        </View>
        <View style={MovieDetailScreenStyles.FlexRow}>
          <Text>{kilometer}</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({item, index}) => TicketTimeshowdataFun(item, index)}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
};
export default MovieTicketTimeFun;
