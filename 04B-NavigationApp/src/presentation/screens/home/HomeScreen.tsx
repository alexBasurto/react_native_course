import React, {useEffect} from 'react';
import {/* Pressable, Text, */ Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {type NavigationProp, useNavigation, DrawerActions} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import type {RootStackParams} from '../../routes/StackNavigator';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: 'Inicio',
  //     headerLeft: () => (
  //       <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
  //         <Text>Menu</Text>
  //       </Pressable>
  //     ),
  //   });
  // }, []);

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      {/* <Pressable
        onPress={() => navigation.navigate('Products' as never)}
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>Productos</Text>
      </Pressable> */}

      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Productos"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Ajustes"
      />
    </View>
  );
};
