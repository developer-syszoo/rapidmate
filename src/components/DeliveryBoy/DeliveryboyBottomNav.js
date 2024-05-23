import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../colors';
import DeliveryboyHome from './DeliveryboyHome';
import Planning from './Planning';
import DeliveryboyHistory from './DeliverboyHistory';
import DeliveryBoySignup from './DeliveryBoySignup';
import DeliveryPackageRequest from './DeliveryPackageRequest';

const Bottom = createBottomTabNavigator();
const DeliveryboyBottomNav = ({navigation}) => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        key="DeliveryBoySignup"
        name="Home"
        component={DeliveryBoySignup}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <AntDesign
                name="home"
                size={22}
                color="#B5B3B2"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? 'purple' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        key="Planning"
        name="Planning"
        component={Planning}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name="calendar-outline"
                size={25}
                color="#B5B3B2"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: tabInfo.focused ? 'purple' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        key="DeliveryPackageRequest"
        name="Requst"
        component={DeliveryPackageRequest}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Feather
                name="package"
                size={25}
                color="#B5B3B2"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: tabInfo.focused ? 'purple' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        key="DeliveryboyHistory"
        name="History"
        component={DeliveryboyHistory}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name="timer-outline"
                size={25}
                color="#B5B3B2"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: tabInfo.focused ? 'purple' : 'black',
                }}
              />
            );
          },
        }}
      />
      {/* <Bottom.Screen
        key="Settings"
        name="Account"
        component={Settings}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Settings')}
              style={{paddingLeft: 10}}>
              <MaterialIcons
                name="keyboard-backspace"
                size={30}
                color={colors.text}
              />
            </TouchableOpacity>
          ),
          headerTitle: 'Settings',
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
          },
          headerTintColor: colors.text,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FBFAF5',
            borderBottomWidth: 0,
            elevation: 0,
          },
          tabBarIcon: tabInfo => {
            return (
              <AntDesign
                name="user"
                size={25}
                color="#B5B3B2"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: tabInfo.focused ? 'purple' : 'black',
                }}
              />
            );
          },
        }}
      /> */}
    </Bottom.Navigator>
  );
};

export default DeliveryboyBottomNav;
