import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>Settings Screen</Text>
      <PrimaryButton onPress={() => navigator.goBack()} label="Regresar" />
      <PrimaryButton
        onPress={() => navigator.dispatch(StackActions.popToTop())}
        label="Regresar a Home"
      />
    </View>
  );
};
