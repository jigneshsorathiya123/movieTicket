import React, { useMemo, useState } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { HomeTabStyles } from '../../../styles';
import { RouteName } from '../../../routes';
import {
  MovieDataShowFun,
  MovieLanguageTypeFun,
  PopularCinemaFun,
  RecommendedMovieFun,
  UpcomingMovieFun,
} from '../../../components';
import {
  MoviewFilterBoxdata,
  UpcomingMoviewData,
  RecommendedMovies,
  PopulatCinemasData,
  MoviewShowData,
} from '../../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const MoviScreen = props => {
  const { navigation } = props;
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);
  const [selecteditem, setSelecteditem] = useState(0);

  return (
    <View style={HomeTabStyless.MinStyleViewPhotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={HomeTabStyless.ContentContainerStyle}>
        <View style={HomeTabStyless.MinFlexView}>
          <View style={HomeTabStyless.MinViewSigninScreen}>
            <View style={HomeTabStyless.PadHor}>
              <View style={HomeTabStyless.MoviewFilterBoxStyle}>
                <FlatList
                  data={MoviewFilterBoxdata}
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

              <View style={HomeTabStyless.BihSlider}>
                <FlatList
                  data={MoviewShowData}
                  renderItem={({ item, index }) => (
                    <MovieDataShowFun
                      item={item}
                      index={index}
                      onPress={() => {
                        navigation.navigate(RouteName.MOVIE_DETAIL_SCREEN, {
                          selected: item,
                        });
                      }}
                    />
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default MoviScreen;
