import React, {useEffect} from 'react';
import {Image, StatusBar, SafeAreaView, Alert,Text,ImageBackground,} from 'react-native';
import styles from './styles';
import { appImages } from '../../shared/theme/assets';

const Splash = ({  navigation}:any) => {
  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = async () => {
    setTimeout(() => {
      // navigation.replace('Login');
    }, 500);
  };

  return (
    <>
      <SafeAreaView style={styles.Container}>
      <ImageBackground
      source={appImages.Splash}
      style={styles.backgImg}
      >
        <Image
        source={appImages.SplashTxt}
        style={styles.Imgtxt}
        />

      </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default Splash;
