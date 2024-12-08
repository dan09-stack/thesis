import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import CancelRequestScreen from './cancel request';

const WaitingScreen = () => {
  const [cancelRequested, setCancelRequested] = useState(false);

  const handleCancelRejection = () => {
    setCancelRequested(false);
  };

  if (cancelRequested) {
    return <CancelRequestScreen onReject={handleCancelRejection} />;
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
          <Text style={styles.thankYouText}>Thank You For Waiting</Text>
          <Text style={styles.subText}>People in front of you: 2</Text>
          <Text style={styles.ticketNumber}>YOUR TICKET NUMBER</Text>
          <Text style={styles.ticket}>CPE-0010</Text>
          <View style={styles.servingInfo}>
            <Text style={styles.nextServingText}>NEXT SERVING</Text>
            <Text style={styles.nowServingText}>NOW SERVING</Text>
          </View>
          <View style={styles.servingNumbers}>
            <Text style={styles.servingNumber}>ECE-0009</Text>
            <Text style={styles.servingNumber}>ARC-0008</Text>
          </View>
          <Text style={styles.waitingText}>PLEASE WAIT</Text>
          <TouchableOpacity style={styles.cancelButton} onPress={() => setCancelRequested(true)}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
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
    backgroundColor: '#d9d9d9',
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
    maxWidth: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 33,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  thankYouText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
  },
  ticketNumber: {
    fontSize: 16,
    color: '#f44336',
    marginBottom: 2,
    fontWeight: 'bold',
  },
  ticket: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  servingInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  nextServingText: {
    fontSize: 14,
    color: '#f44336',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  nowServingText: {
    fontSize: 14,
    color: '#f44336',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  servingNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  servingNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  waitingText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  cancelButton: {
    backgroundColor: '#2c6b2f',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  cancelText: {
    color: 'white',
    fontSize: 16,
  },
});

export default WaitingScreen;
