import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './login';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('../assets/fonts/Roboto-Black.ttf'),
    'Poppins': require('../assets/fonts/Poppins-Black.ttf'),
  });

  const [isLoginScreen, setIsLoginScreen] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsAppReady(true);
        SplashScreen.hideAsync();
      }
    }

    if (fontsLoaded) {
      prepareApp();
    }
  }, [fontsLoaded]);

  if (!isAppReady) {
    return (
      <View style={styles.splashScreen}>
        <ActivityIndicator size="large" color="#008000" />
        <Text style={styles.splashText}>Loading...</Text>
      </View>
    );
  }

  if (isLoginScreen) {
    return <LoginScreen setIsLoginScreen={setIsLoginScreen} />;
  }

  return (
    <ImageBackground
      source={require('../assets/green.jpg')}
      style={styles.backgroundImage}
      imageStyle={{ resizeMode: 'cover' }}
    >
      <View style={styles.container}>
        <Image source={require('../assets/finale.png')} style={styles.logo} />
        <Text style={styles.heading}>Welcome to Q-CEA App</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setIsLoginScreen(true)}
        >
          <Text style={styles.btnText}>Student</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setIsLoginScreen(true)}
        >
          <Text style={styles.btnText}>Faculty</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  splashText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#008000',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    width: '90%',
    maxWidth: 600,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,  
  },
  logo: {
    maxWidth: '100%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 28,
    fontFamily: 'Roboto',
    color: '#000000',
    textShadow: '2px 2px 20px black',
    marginBottom: 30,
  },
  btn: {
    width: '100%',
    padding: 15,
    fontSize: 16,
    backgroundColor: '#2c6b2f',
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
