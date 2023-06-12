import React, { useState, useMemo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HomeTabStyles } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const MovieLanguageTypeFun = props => {
  const { item, index, selecteditem, setSelecteditem } = props;
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);

  return (
    <TouchableOpacity
      style={
        index === selecteditem
          ? HomeTabStyless.MovieTicketFilterBoxTwo
          : HomeTabStyless.MovieTicketFilterBox
      }
      onPress={() => {
        setSelecteditem(index);
      }}>
      <Text
        style={
          index === selecteditem
            ? HomeTabStyless.FilterNameTextTwo
            : HomeTabStyless.FilterNameText
        }>
        {t(item.FilterName)}
      </Text>
    </TouchableOpacity>
  );
};
export default MovieLanguageTypeFun;
