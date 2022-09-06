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
  recipeTitle: {
    paddingVertical: 16,
    paddingStart: 16,
    ...typography.headlineMedium,
    color: Colors.black,
  },
  recipeContainer: {
    paddingVertical: 16,
    backgroundColor: Colors.white,
    borderTopStartRadius: 16,
  },
});
