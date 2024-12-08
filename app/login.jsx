import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import CreateAccountScreen from './create account';
import RequestTicketScreen from './request';

const LoginScreen = ({ setIsLoginScreen }) => {
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    const tempErrors = {};

    if (!email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (
      !email.endsWith('.up@phinmaed.com') &&
      !email.endsWith('@gmail.com')
    ) {
      tempErrors.email = 'Invalid email address.';
    }

    if (!password.trim()) {
      tempErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters long.';
    }

    if (Object.keys(tempErrors).length === 0) {
      setIsLoggedIn(true);
    } else {
      setErrors(tempErrors);
    }
  };

  if (isCreateAccount) {
    return <CreateAccountScreen setIsCreateAccount={setIsCreateAccount} />;
  }

  if (isLoggedIn) {
    return <RequestTicketScreen />;
  }

  return (
    <ImageBackground
      source={require('../assets/green p2.jpg')}
      style={styles.background}
      imageStyle={{ resizeMode: 'cover' }}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>

        <TextInput
          style={[styles.input, errors.email && { borderColor: 'red' }]}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <TextInput
          style={[styles.input, errors.password && { borderColor: 'red' }]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsCreateAccount(true)}>
          <Text style={styles.linkText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => setIsLoginScreen(false)}
        >
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    width: '90%',
    maxWidth: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 50,
  },
  heading: {
    fontSize: 28,
    fontFamily: 'Roboto',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#2c6b2f',
    width: '30%',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    color: '#2c6b2f',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  goBackButton: {
    marginTop: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#2c6b2f',
    borderRadius: 5,
  },
  goBackText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default LoginScreen;
