import React, { useMemo } from 'react';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';
import { MovieBookScreenStyle } from '../../styles';
import { useTheme } from '@react-navigation/native';

const MovieTicketSeatList = props => {
  const { data, linename, selectedSeat, setSelectedSeat } = props;

  const { Colors } = useTheme();
  const MovieBookScreenStyles = useMemo(
    () => MovieBookScreenStyle(Colors),
    [Colors],
  );

  const MovieShowSeatBookFun11 = (item, index) => {
    const check = selectedSeat.findIndex(x => {
      return x.id === item.id;
    });
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setSelectedSeat(item);
          }}
          style={
            check !== -1
              ? MovieBookScreenStyles.MovieShowSeatActiveBoxWrap
              : MovieBookScreenStyles.MovieShowSeatBoxWrap
          }>
          <View style={MovieBookScreenStyles.MovieShowSeatBox} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={[
        MovieBookScreenStyles.FlexRow,
        MovieBookScreenStyles.PaddLeftSet,
      ]}>
      <View style={MovieBookScreenStyles.TextMonthWrap}>
        <Text style={MovieBookScreenStyles.TextMonth}>{linename}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => MovieShowSeatBookFun11(item, index)}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={MovieBookScreenStyles.contentContainerStyle}
      />
    </View>
  );
};
export default MovieTicketSeatList;
