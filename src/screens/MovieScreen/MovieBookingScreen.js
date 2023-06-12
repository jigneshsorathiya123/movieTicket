import React, { useState, useMemo } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { MovieBookScreenStyle } from '../../styles';
import { RouteName } from '../../routes';
import {
  Button,
  MovieTicketSeatList,
  MovieLanguageTypeFun,
} from '../../components';
import { TicketTimeshowdata, TicketPriceData } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MovieBookingScreen = props => {
  const { navigation } = props;
  const [time, setTime] = useState(0);
  const { t } = useTranslation();
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [selecteditem, setSelecteditem] = useState(0);

  const { Colors } = useTheme();
  const MovieBookScreenStyles = useMemo(
    () => MovieBookScreenStyle(Colors),
    [Colors],
  );

  const getSeatArr = () => {
    const Arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    const withSeat = Arr.map(x => {
      let price = 0;
      if (x === 'A') {
        price = 100;
      } else if (x === 'B') {
        price = 200;
      } else if (x === 'C') {
        price = 300;
      } else if (x === 'D') {
        price = 400;
      } else if (x === 'E') {
        price = 500;
      } else if (x === 'F') {
        price = 600;
      } else if (x === 'G') {
        price = 700;
      } else if (x === 'H') {
        price = 800;
      } else if (x === 'I') {
        price = 900;
      }

      let temp = [];

      for (let index = 1; index <= 10; index++) {
        temp.push({
          linename: x,
          seat: `${x}${index}`,
          id: `${x}${index}`,
          amount: price,
        });
      }
      return temp;
    });
    return withSeat;
  };

  const handleSeatSelection = selected => {
    const check = selectedSeat.findIndex(x => {
      return x.id === selected.id;
    });
    const temp = [...selectedSeat];
    if (check === -1) {
      temp.push(selected);
    } else {
      temp.splice(check, 1);
    }
    setSelectedSeat(temp);
  };

  const TicketTimeshowdataFun = (item, index) => {
    return (
      <TouchableOpacity
        style={
          time == index
            ? [
                MovieBookScreenStyles.TimeBoxBorderBookWrap,
                {
                  backgroundColor: Colors.gray_text_color,
                  borderColor: Colors.black_text_color,
                },
              ]
            : MovieBookScreenStyles.TimeBoxBorderBookWrap
        }
        onPress={() => {
          setTime(index);
        }}>
        <View style={MovieBookScreenStyles.TimeBoxBorderBook}>
          <Text
            style={
              time == index
                ? [
                    MovieBookScreenStyles.MovieTimeText,
                    { color: Colors.white_text_color },
                  ]
                : [MovieBookScreenStyles.MovieTimeText]
            }>
            {item.MovieTime}
          </Text>
          <Text
            style={
              time == index
                ? [
                    MovieBookScreenStyles.MovietypeText,
                    { color: Colors.white_text_color },
                  ]
                : MovieBookScreenStyles.MovietypeText
            }>
            {item.Movietype}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={MovieBookScreenStyles.minstyleviewphotograpgyTow}>
      <View>
        <View
          style={[
            MovieBookScreenStyles.MovieHeadBoxWrap,
            MovieBookScreenStyles.BgSet,
          ]}>
          <View style={MovieBookScreenStyles.MovieTicketHeadBox}>
            <View style={MovieBookScreenStyles.CityMainBox}>
              <Text style={MovieBookScreenStyles.CityText}>{t('Charlie')}</Text>
              <Text style={MovieBookScreenStyles.CinemaNameText}>
                {t('Inox_World')}
              </Text>
            </View>
          </View>
          <View style={MovieBookScreenStyles.MovieTicketHeadBoxLastTwo}>
            <TouchableOpacity
              style={[
                MovieBookScreenStyles.ShareiconSet,
                MovieBookScreenStyles.padLeft,
              ]}>
              <Text style={MovieBookScreenStyles.ShareiconSetText}>
                {t('Search')}
              </Text>
              <Text style={MovieBookScreenStyles.ShareiconSetText}>
                {t('Seat_map')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            MovieBookScreenStyles.FlexRow,
            MovieBookScreenStyles.PaddLeftSet,
          ]}>
          <View>
            <Text style={MovieBookScreenStyles.TextMonth}>{t('Wed')}</Text>
            <Text style={MovieBookScreenStyles.TextMonthDay}>{t('Feb')}</Text>
          </View>
          <FlatList
            data={TicketTimeshowdata}
            renderItem={({ item, index }) => TicketTimeshowdataFun(item, index)}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={
              MovieBookScreenStyles.contentContainerStyleTwo
            }
          />
        </View>

        <View style={MovieBookScreenStyles.PriceFlatlist}>
          <FlatList
            data={TicketPriceData}
            renderItem={({ item, index }) => (
              <MovieLanguageTypeFun
                item={item}
                index={index}
                selecteditem={selecteditem}
                setSelecteditem={setSelecteditem}
              />
            )}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
      </View>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={MovieBookScreenStyles.contentContainerStyle}>
        <View style={MovieBookScreenStyles.minflexview}>
          <View style={MovieBookScreenStyles.minviewsigninscreen}>
            <View>
              <MovieTicketSeatList
                linename={'A'}
                data={getSeatArr()[0]}
                selectedSeat={selectedSeat}
                setSelectedSeat={handleSeatSelection}
              />
            </View>
            <View>
              <MovieTicketSeatList
                linename={'B'}
                data={getSeatArr()[1]}
                selectedSeat={selectedSeat}
                setSelectedSeat={handleSeatSelection}
              />
            </View>
            <View>
              <MovieTicketSeatList
                linename={'C'}
                data={getSeatArr()[2]}
                selectedSeat={selectedSeat}
                setSelectedSeat={handleSeatSelection}
              />
            </View>
            <View>
              <MovieTicketSeatList
                linename={'D'}
                data={getSeatArr()[3]}
                selectedSeat={selectedSeat}
                setSelectedSeat={handleSeatSelection}
              />
            </View>
            <View>
              <MovieTicketSeatList
                linename={'E'}
                data={getSeatArr()[4]}
                selectedSeat={selectedSeat}
                setSelectedSeat={handleSeatSelection}
              />
            </View>
            <View>
              <MovieTicketSeatList
                linename={'F'}
                data={getSeatArr()[5]}
                selectedSeat={selectedSeat}
                setSelectedSeat={handleSeatSelection}
              />
            </View>
            <View>
              <MovieTicketSeatList
                linename={'G'}
                data={getSeatArr()[6]}
                selectedSeat={selectedSeat}
                setSelectedSeat={handleSeatSelection}
              />
            </View>
            <View>
              <MovieTicketSeatList
                linename={'H'}
                data={getSeatArr()[7]}
                selectedSeat={selectedSeat}
                setSelectedSeat={handleSeatSelection}
              />
            </View>
            <View>
              <MovieTicketSeatList
                linename={'I'}
                data={getSeatArr()[8]}
                selectedSeat={selectedSeat}
                setSelectedSeat={handleSeatSelection}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={MovieBookScreenStyles.BookBtnwrap}>
        <Button
          title={t('Proceed_to_payment')}
          buttonStyle={MovieBookScreenStyles.BtnBotmMr}
          onPress={() =>
            navigation.navigate(RouteName.PAYMENT_SCREEN, {
              selectedSeat: selectedSeat,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};
export default MovieBookingScreen;
