import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";
import { Colors } from '../utils';

const Stack = createNativeStackNavigator();

import { RouteName, SideNavigator } from '../routes';

import {
  LoginScreen, RegisterScreen, OtpVeryfiveScreen,
  SplashScreen, RegistrationSuccessful,
  Swiperscreen, TranslationScreen,
  ForgotPassword, MovieDetailsScreen, MovieBookingScreen,
  PaymentScreen, CreditCardScreen, PaymentSuccessFully, TicketScreen
} from '../screens';

const RootNavigator = props => {

  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors
  };
  const [colorValue, setColorValue] = useState(MyTheme)
  useEffect(() => {
    if (Colors.length != 0 && colorrdata != "") {
      Colors.theme_background_grape = colorrdata;
      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors
      };
      setColorValue(MyThemeNew)
    }
  }, [colorrdata, Colors])
  return (
    <NavigationContainer theme={colorValue}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={RouteName.REGISTER_SCREEN} component={RegisterScreen} />
        <Stack.Screen name={RouteName.HOME_SCREEN} component={SideNavigator} />
        <Stack.Screen name={RouteName.REGIATRAION_SUCCESSFULL} component={RegistrationSuccessful} />
        <Stack.Screen name={RouteName.OTP_VERYFY_SCREEN} component={OtpVeryfiveScreen} />
        <Stack.Screen name={RouteName.SWIPER_SCREEN} component={Swiperscreen} />
        <Stack.Screen name={RouteName.SELECT_LANGUAGE} component={TranslationScreen} />
        <Stack.Screen name={RouteName.FORGOT_PASSSWWORD} options={{ headerShown: false, headerShadowVisible: false }} component={ForgotPassword} />
        <Stack.Screen name={RouteName.MOVIE_DETAIL_SCREEN} options={{ headerShown: false, headerShadowVisible: false }} component={MovieDetailsScreen} />
        <Stack.Screen name={RouteName.MOVIE_BOOK_SCREEN} options={{ headerShown: false, headerShadowVisible: false }} component={MovieBookingScreen} />
        <Stack.Screen name={RouteName.PAYMENT_SCREEN} options={{ headerShown: false, headerShadowVisible: false }} component={PaymentScreen} />
        <Stack.Screen name={RouteName.CREDIT_CARD_SCREEN} options={{ headerShown: false, headerShadowVisible: false }} component={CreditCardScreen} />
        <Stack.Screen name={RouteName.PAYMENT_SUCCESSFUL} options={{ headerShown: false, headerShadowVisible: false }} component={PaymentSuccessFully} />
        <Stack.Screen name={RouteName.TICKET_SCREEN} options={{ headerShown: false, headerShadowVisible: false }} component={TicketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;