import React, {useState, useMemo} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {HelpScreenStyles} from '../../styles';
import {FaqQueFun, Input, Spacing} from '../../components';
import {Faqdataset, SH, SF} from '../../utils';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';

const FAQScreen = () => {
  const {t} = useTranslation();
  const [Search, setSearch] = useState('');

  const {Colors} = useTheme();
  const HelpScreenStyless = useMemo(() => HelpScreenStyles(Colors), [Colors]);

  return (
    <View style={HelpScreenStyless.MinViewScreen}>
      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={HelpScreenStyless.MainViewReview}>
          <KeyboardAvoidingView enabled>
            <View style={HelpScreenStyless.BgWhiteView}>
              <View style={HelpScreenStyless.ChangeTheameBgColor}>
                <TouchableOpacity style={HelpScreenStyless.SetFileChnage}>
                  <View style={HelpScreenStyless.InputWidth}>
                    <Input
                      placeholder={t('Search_Text')}
                      onChangeText={value => setSearch(value)}
                      value={Search}
                      maxLength={10}
                      placeholderTextColor={Colors.black_text_color}
                      inputStyle={HelpScreenStyless.InputStyles}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={HelpScreenStyless.MinFlexView}>
              <View style={HelpScreenStyless.MinViewAllContent}>
                <Spacing space={SH(100)} />
                <FlatList
                  data={Faqdataset}
                  renderItem={({item, index}) => (
                    <FaqQueFun item={item} index={index} />
                  )}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  style={HelpScreenStyless.SetFlex}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};
export default FAQScreen;
