import { Dimensions, StyleSheet } from 'react-native';
import { Colors, typography } from '../../theme';

const { width } = Dimensions.get('window');
const cardHeight = 130;
const cardImage = 110;

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
    flexShrink: 1,
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
