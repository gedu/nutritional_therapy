import { Dimensions, StyleSheet } from 'react-native';
import { Colors, typography } from '../theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  backButton: {
    padding: 16,
  },
  backHeaderContainer: {
    height: 56,
    backgroundColor: Colors.white,
  },
  backIcon: {
    width: 32,
    height: 32,
  },
  imageHeader: {
    width,
    height: 300,
  },
  title: {
    ...typography.headlineMedium,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
    color: Colors.black,
  },
  description: {
    ...typography.bodyMedium,
    color: Colors.black,
    padding: 16,
  },
  starContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  starIcon: {
    width: 16,
    height: 16,
    marginEnd: 8,
  },
  ratingTitle: {
    ...typography.bodySmall,
    color: Colors.grey,
  },
});
