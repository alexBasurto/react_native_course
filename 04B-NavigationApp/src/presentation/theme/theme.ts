import {StyleSheet} from 'react-native';

export const globalColors = StyleSheet.create({
  primary: '#7037eb',
  secondary: '#f72585',
  terciary: '#3a0ca3',
  success: '#4cc9f0',
  warning: '#fca311',
  danger: '#e71d36',
  dark: '#22223b',

  background: '#fff',
});

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
  },

  primaryButton: {
    backgroundColor: globalColors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  },
});
