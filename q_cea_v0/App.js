import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import { LinearGradient } from 'expo-linear-gradient';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAo2LrFjx-ufiz4b3TBtRdGxvQbnh-VBZw",
  authDomain: "queue-auth.firebaseapp.com",
  projectId: "queue-auth",
  storageBucket: "queue-auth.appspot.com",
  messagingSenderId: "41111950835",
  appId: "1:41111950835:web:b063108a026a1b184aae86",
  measurementId: "G-5S56JW86PG"
};

const app = initializeApp(firebaseConfig);

const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text>Dan - Done</Text>
      <Text>Kier - Done</Text>
      <Text>Seandrix - Done</Text>
      <Text>sample</Text>
      <Text>sample - Done</Text>
      <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#666"
      />

      <TouchableOpacity onPress={handleAuthentication} style={styles.button}>
        <Text style={styles.buttonText}>{isLogin ? 'SIGN IN' : 'SIGN UP'}</Text>
      </TouchableOpacity>
      <Text style={styles.toggleText}>
        {isLogin ? 'Forgot your password?' : ''}
      </Text>
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.toggleText}>
          {isLogin ? 'Create Account' : 'Already have an account? Sign In'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const AuthenticatedScreen = ({ user, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.emailText}>{user.email}</Text>
      <TouchableOpacity onPress={handleAuthentication} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        await signOut(auth);
      } else {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password);
        } else {
          await createUserWithEmailAndPassword(auth, email, password);
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <LinearGradient
      colors={['#597a5d', '#476745', '#2e5d33']} // Gradient colors
      start={{ x: 0, y: 0 }} // Start from top-left
      end={{ x: 1, y: 1 }}   // End at bottom-right
      style={styles.container}
    >


      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {user ? (
          <AuthenticatedScreen user={user} handleAuthentication={handleAuthentication} />
        ) : (
          <AuthScreen
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            handleAuthentication={handleAuthentication}
          />
        )}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContainer: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 28,
    color: '#000',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    minWidth: 250,
  },
  button: {
    backgroundColor: '#2e5d33',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  toggleText: {
    opacity: 0.5,
    color: '#000000',
    textAlign: 'center',
    marginTop: 10,
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});   
