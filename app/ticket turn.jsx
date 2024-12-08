import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import RatingScreen from './rating';

const TicketTurnScreen = () => {
  const [showRatingScreen, setShowRatingScreen] = useState(false);

  const handleDonePress = () => {
    setShowRatingScreen(true);
  };

  if (showRatingScreen) {
    return <RatingScreen />;
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
            <View style={[styles.progressStep, styles.completed]} />
            <View style={[styles.progressStep, styles.active]} />
          </View>
          <View style={styles.labels}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Create your virtual queue</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Relax and wait for your turn</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.labelActive}>Your turn is up!</Text>
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
          <Text style={styles.turnText}>IT'S YOUR TURN!</Text>
          <Text style={styles.proceedText}>Please proceed to <Text style={{ fontWeight: 'bold' }}>TABLE NO. 1</Text></Text>
          <TouchableOpacity style={styles.doneButton} onPress={handleDonePress}>
            <Text style={styles.doneButtonText}>Done</Text>
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
    marginTop: 150,
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
    maxWidth: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 25,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 50,
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
  turnText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  proceedText: {
    fontSize: 18,
    marginBottom: 10,
  },
  doneButton: {
    backgroundColor: '#2c6b2f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TicketTurnScreen;
