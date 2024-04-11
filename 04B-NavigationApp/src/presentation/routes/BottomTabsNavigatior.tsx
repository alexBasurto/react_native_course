import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {Tab2Screen} from '../screens/tabs/Tab2Screen';
import {Tab3Screen} from '../screens/tabs/Tab3Screen';
import {TopTabsNavigator} from './TopTabsNavigator';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        //headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
        
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'TAB 1',
          tabBarIcon: ({color}) => <IonIcon name="accessibility" color={color} />,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'TAB 2',
          tabBarIcon: ({color}) => <IonIcon name="airplane" color={color} />,
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'TAB 3',
          tabBarIcon: ({color}) => <IonIcon name="bar-chart" color={color} />,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
