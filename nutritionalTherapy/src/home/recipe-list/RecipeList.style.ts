import { Dimensions, StyleSheet } from 'react-native';
import { Colors, typography } from '../../theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  card: {
    width: width * 0.8,
    height: width * 0.8,
  },
  cardImage: {
    flex: 1,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  cardTitle: {
    position: 'absolute',
    paddingStart: 8,
    bottom: 16,
    left: 8,
    right: 8,
    ...typography.bodyMedium,
    color: Colors.white,
    backgroundColor: Colors.black30,
  },
});
