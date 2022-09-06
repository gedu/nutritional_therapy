import { Dimensions, StyleSheet } from 'react-native';
import { Colors, typography } from '../theme';

const { width } = Dimensions.get('window');
const cardHeight = 100;
const cardImage = 80;

export const styles = StyleSheet.create({
  root: {
    flex: 1,

    backgroundColor: Colors.lightBlue,
  },
  headerTitle: {
    padding: 16,
    ...typography.headlineLargeLight,
    color: Colors.black,
  },
  mealsContainer: {
    flex: 1,
  },
});
