import React, { useMemo } from 'react';
import { View, FlatList } from 'react-native';
import { MyBookingTabStyle } from '../../../styles';
import { MyBookingFun } from '../../../components';
import { MyBookingData } from '../../../utils';
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';

const SavedJobsList = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const MyBookingTabStyles = useMemo(() => MyBookingTabStyle(Colors), [Colors]);

  return (
    <View style={MyBookingTabStyles.MinViewScreen}>
      <FlatList
        data={MyBookingData}
        numColumns={1}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) =>
          <MyBookingFun
            item={item}
            index={index}
            onPress={() => navigation.navigate(RouteName.TICKET_SCREEN)}
          />}
        keyExtractor={item => item.id}
        contentContainerStyle={MyBookingTabStyles.FlatListStylestwo}
      />
    </View>
  );
};
export default SavedJobsList;