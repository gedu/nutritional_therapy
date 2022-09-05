import { Dimensions, StyleSheet } from 'react-native';
import { Colors, typography } from '../theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: height * 0.15,
    color: Colors.black,
    ...typography.headlineLarge,
  },
  animationContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  animationItem: {
    width: width * 0.3,
    height: height * 0.3,
  },
});
