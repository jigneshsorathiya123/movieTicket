import React, {useMemo} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {HomeTabStyles} from '../../styles';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const RecommendedMovieFun = props => {
  const {item, index, onPress} = props;
  const {t} = useTranslation();
  const {Colors} = useTheme();
  const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);

  return (
    <View style={HomeTabStyless.SetbgColorViewTime}>
      <TouchableOpacity
        style={HomeTabStyless.FlexRowseCenterImage}
        onPress={() => onPress()}>
        <Image
          style={HomeTabStyless.ImgStyleProduct}
          resizeMode="cover"
          source={item.image}
        />
      </TouchableOpacity>

      <View style={HomeTabStyless.TextView}>
        <Text style={HomeTabStyless.NameTextTwo}>
          {item.nameofproduct} {t('Votes')}
        </Text>
      </View>
    </View>
  );
};
export default RecommendedMovieFun;
