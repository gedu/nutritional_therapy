import { Dimensions, StyleSheet } from 'react-native';
import { Colors, typography } from '../../theme';

const { width } = Dimensions.get('window');
const cardHeight = 100;
const cardImage = 80;

export const styles = StyleSheet.create({
  card: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    elevation: 2,
    width: width * 0.8,
    height: cardHeight,
    backgroundColor: Colors.aliceBlue,
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardImage: {
    borderRadius: 8,
    width: cardImage,
    height: cardImage,
  },
  cardInfoContainer: {
    marginStart: 8,
  },
  cardAuthor: {
    ...typography.bodySmall,
    color: Colors.lightBlue,
  },
  cardTitle: {
    ...typography.bodyMedium,
    color: Colors.black,
  },
});
