import React, { useState, useEffect } from 'react';
import RouteName from './RouteName';
import { CustomSidebarMenu, AppHeader } from '../components';
import { Colors, SF, SW, SH } from '../utils';
import { DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { TabNavigator } from '../routes';
import {
  SettingsScreen, HelpScreen, FAQScreen, ReviewsScreen, NotificationScreen
} from '../screens';

const SideNavigator = (props) => {
  const { t } = useTranslation();
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors
  };
  const [colorValue, setColorValue] = useState(MyTheme)
  useEffect(() => {
    if (Colors.length != 0 && colorrdata != "") {
      Colors.theme_backgound = colorrdata;
      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors
      };
      setColorValue(MyThemeNew)
    }

  }, [colorrdata, Colors])
  return (
    <Drawer.Navigator theme={colorValue} drawerContent={(props) => <CustomSidebarMenu {...props} />} screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: Colors.white_text_color,
        width: SW(270),
      }
    }}
    >
      <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />

      <Drawer.Screen
        name={RouteName.HELP_SCREEN} component={HelpScreen}
        options={{
          headerShown: true,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Help_Text")} />,
          headerTintColor: Colors.theme_background_grape,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background_grape,
            fontSize: SF(20),
            fontWeight: '700'
          },
          headerStyle: {
            backgroundColor: Colors.bg_white,
          },
        }}
      />
      <Drawer.Screen
        name={RouteName.FAQ_SCREEN} component={FAQScreen}
        options={{
          headerShown: true,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("FAQ_Text")} />,
          headerTintColor: Colors.theme_background_grape,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background_grape,
            fontSize: SF(20),
            fontWeight: '700'
          },
          headerStyle: {
            backgroundColor: Colors.bg_white,
          },
        }}
      />
      <Drawer.Screen
        name={RouteName.NOTIFICTION_SCREEN} component={NotificationScreen}
        options={{
          headerShown: true,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Notification_Text")} />,
          headerTintColor: Colors.theme_background_grape,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background_grape,
            fontSize: SF(20),
            fontWeight: '700'
          },
          headerStyle: {
            backgroundColor: Colors.bg_white,
          },
        }}
      />
      <Drawer.Screen
        name={RouteName.REVIEWS_SCREEN} component={ReviewsScreen}
        options={{
          headerShown: true,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Reviews_Screen")} />,
          headerTintColor: Colors.theme_background_grape,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background_grape,
            fontSize: SF(20),
            fontWeight: '700'
          },
          headerStyle: {
            backgroundColor: Colors.bg_white,
          },
        }}
      />
      <Drawer.Screen
        name={RouteName.SETTING_SCREEN} component={SettingsScreen}
        options={{
          headerShown: true,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Setting_Text")} />,
          headerTintColor: Colors.theme_background_grape,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background_grape,
            fontSize: SF(20),
            fontWeight: '700'
          },
          headerStyle: {
            backgroundColor: Colors.bg_white,
          },
        }}
      />
    </Drawer.Navigator>

  );
}
export default SideNavigator;