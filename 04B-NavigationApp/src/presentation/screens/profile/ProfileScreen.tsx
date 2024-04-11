import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {useNavigation, DrawerActions} from '@react-navigation/native';

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();

  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        marginTop: top + 20,
        paddingHorizontal: 20,
      }}>
      <Text>Profile Screen</Text>

      <PrimaryButton label="Abrir menú" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)} />
    </View>
  );
};
