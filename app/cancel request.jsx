import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import RequestTicketScreen from './request';

const CancelRequestScreen = ({ onReject }) => {
  const [isCanceled, setIsCanceled] = useState(false);

  const handleCancel = () => {
    setIsCanceled(true);
    console.log("Queue canceled");
  };

  if (isCanceled) {
    return <RequestTicketScreen />;
  }

  return (
    <ImageBackground
      source={require('../assets/green p2.jpg')}
      style={styles.background}
    >
      <View style={styles.contentWrapper}>
        <View style={styles.progressBarContainer}>
          <View style={styles.connectorLine} />
          <View style={styles.progressBar}>
            <View style={[styles.progressStep, styles.completed]} />
            <View style={[styles.progressStep, styles.active]} />
            <View style={styles.progressStep} />
          </View>
          <View style={styles.labels}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Create your virtual queue</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.labelActive}>Relax and wait for your turn</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Your turn is up!</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.confirmationText}>Confirm queue cancellation?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleCancel}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onReject}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  progressBarContainer: {
    alignItems: 'center',
    marginTop: 120,
    marginBottom: 10,
  },
  connectorLine: {
    position: 'absolute',
    top: 10,
    width: '90%',
    height: 8,
    backgroundColor: 'rgba(217, 217, 217, 0.6)',
    zIndex: 1,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    zIndex: 1,
  },
  progressStep: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#e0e0e0',
  },
  completed: {
    backgroundColor: '#d9d9d9',
  },
  active: {
    backgroundColor: '#ffffff',
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 13,
  },
  labelContainer: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    color: '#b0b0b0',
    fontSize: 14,
    textAlign: 'center',
  },
  labelActive: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmationText: {
    fontSize: 43,
    marginBottom: 90,
    marginTop: 90,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#2c6b2f',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default CancelRequestScreen;
