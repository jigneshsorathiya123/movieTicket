import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  CategoryTab,
  FavouriteTab,
  HomeTab,
  MyBooking,
  PaymentHistory,
  Profile,
} from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { ColorPicker, CustomSidebarMenu } from '../components';
import RouteName from '../routes/RouteName';
import { Colors, SH, SF } from '../utils';
import { useTranslation } from 'react-i18next';
import images from '../images';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ paddingTop: 0 }}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScsreenTabAll"
      drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen
        name="HomeScsreenTabAll"
        options={{ headerShown: false }}
        component={HomeScsreenTabAll}
      />
    </Drawer.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Homese"
        component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;

function HomeTabScreenStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: t('Home_Text'),
          headerShown: true,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: SF(20),
            color: Colors.theme_background_grape,
          },
          headerStyle: {
            backgroundColor: Colors.bg_white,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerRight: () => <ColorPicker />,
        }}
      />
    </Stack.Navigator>
  );
}
function BookingTabScreenStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="MyBooking">
      <Stack.Screen
        name="MyBooking"
        component={MyBooking}
        options={{
          title: t('My_Booking'),
          headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: SF(20),
            color: Colors.theme_background_grape,
          },
          headerStyle: {
            backgroundColor: Colors.bg_white,
          },
          headerRight: () => <ColorPicker />,
        }}
      />
    </Stack.Navigator>
  );
}
function PaymentHistoryTabStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="PaymentHistory">
      <Stack.Screen
        name="PaymentHistory"
        component={PaymentHistory}
        options={{
          title: t('Payment_History'),
          headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.theme_background_grape,
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: Colors.bg_white,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileScreenStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: t('Profile_Text'),
          headerShown: true,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: SF(20),
            color: Colors.theme_background_grape,
          },
          headerStyle: {
            backgroundColor: Colors.white_text_color,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          // headerLeft: () => (
          //   <TouchableOpacity onPress={() => navigation.toggleDrawer()}>

          //   </TouchableOpacity>
          // ),
        }}
      />
    </Stack.Navigator>
  );
}
export function HomeScsreenTabAll() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Homes"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: Colors.theme_background_grape,
        inactiveTintColor: Colors.gray_text_color,
        activeBackgroundColor: Colors.white_text_color,
        labeled: true,
        labelStyle: {},
        tabStyle: {
          height: SH(49),
          backgroundColor: Colors.white_text_color,
          paddingTop: SH(0),
        },
      }}>
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarLabel: t('Home_Text'),
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={images.home} style={{ height: 30, width: 30 }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.BOOKING_TAB}
        component={BookingTabScreenStack}
        options={{
          tabBarLabel: t('My_Booking'),
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={images.book} style={{ height: 30, width: 30 }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.PAYMENT_HISTORY}
        component={PaymentHistoryTabStack}
        options={{
          tabBarLabel: t('Payment_History'),
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={images.payment}
                style={{ height: 30, width: 30 }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: t('Profile_Text'),
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={images.profile}
                style={{ height: 30, width: 30 }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
