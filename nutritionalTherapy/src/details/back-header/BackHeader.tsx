import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { backIcon } from '../../../assets/images';
import { NavigationProps } from '../../router';
import { styles } from '../DetailsPage.style';

type BackHeaderProps = {
  navigation: NavigationProps['Details']['navigation'];
};

export const BackHeader = ({ navigation }: BackHeaderProps) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.backHeaderContainer}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Image style={styles.backIcon} source={backIcon} resizeMode="cover" />
      </TouchableOpacity>
    </View>
  );
};
