import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import ProfileScreen from './profile';
import FacultyList from './faculty list';
import WaitingScreen from './waiting';

import Icon1 from '../assets/profile.png';
import Icon2 from '../assets/home.png';
import Icon3 from '../assets/list2.png';

const RequestTicketScreen = () => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedConcern, setSelectedConcern] = useState('');
  const [otherText, setOtherText] = useState('');
  const [isFacultyModalVisible, setIsFacultyModalVisible] = useState(false);
  const [isConcernModalVisible, setIsConcernModalVisible] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showFacultyList, setShowFacultyList] = useState(false);
  const [showWaitingScreen, setShowWaitingScreen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission tracking

  const faculties = ['Faculty 1', 'Faculty 2', 'Faculty 3', 'Faculty 4', 'Faculty 5', 'Faculty 6', 'Faculty 7'];
  const concerns = ['Enlistment', 'Grades', 'Study Plan', 'Enrollment'];

  if (showProfile) return <ProfileScreen />;
  if (showFacultyList) return <FacultyList />;
  if (showWaitingScreen) return <WaitingScreen />;

  const handleRequest = () => {
    setIsSubmitted(true);
    if (selectedFaculty && (selectedConcern || otherText.trim() !== '')) {
      setShowWaitingScreen(true); // Proceed to the waiting screen
    }
  };

  return (
    <ImageBackground source={require('../assets/green p2.jpg')} style={styles.background}>

      {/* Main Content Wrapper */}
      <View style={styles.contentWrapper}>
        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          {/* Connecting Line */}
          <View style={styles.connectorLine} />

          {/* Progress Steps */}
          <View style={styles.progressBar}>
            <View style={[styles.progressStep, styles.active]} />
            <View style={styles.progressStep} />
            <View style={styles.progressStep} />
          </View>

          <View style={styles.labels}>
            <View style={styles.labelContainer}>
              <Text style={styles.labelActive}>Create your virtual queue</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Relax and wait for your turn</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Your turn is up!</Text>
            </View>
          </View>
        </View>
      <View style={styles.container}>
        <Text style={styles.heading}>Request Ticket</Text>

        {/* Select Faculty */}
        <TouchableOpacity style={styles.modalTrigger} onPress={() => setIsFacultyModalVisible(true)}>
          <Text>{selectedFaculty || 'Select Faculty'}</Text>
        </TouchableOpacity>
        {isSubmitted && !selectedFaculty && <Text style={styles.errorText}>Please select a faculty.</Text>}

        <Modal visible={isFacultyModalVisible} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Faculty</Text>
              <FlatList
                data={faculties}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => {
                      setSelectedFaculty(item);
                      setIsFacultyModalVisible(false);
                    }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.closeModalButton}
                onPress={() => setIsFacultyModalVisible(false)}
              >
                <Text style={styles.closeModalText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Select Concern */}
        <TouchableOpacity style={styles.modalTrigger} onPress={() => setIsConcernModalVisible(true)}>
          <Text>{selectedConcern || 'Select Concern'}</Text>
        </TouchableOpacity>

        <Modal visible={isConcernModalVisible} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Concern</Text>
              <FlatList
                data={concerns}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => {
                      setSelectedConcern(item);
                      setIsConcernModalVisible(false);
                    }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.closeModalButton}
                onPress={() => setIsConcernModalVisible(false)}
              >
                <Text style={styles.closeModalText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Other Text Field */}
        <TextInput
          style={styles.textInput}
          placeholder="Other:"
          multiline
          value={otherText}
          onChangeText={setOtherText}
        />
        {isSubmitted && !selectedConcern && otherText.trim() === '' && (
          <Text style={styles.errorText}>
            Please select a concern or fill in the "Other" field.
          </Text>
        )}

        {/* Request Button */}
        <TouchableOpacity style={styles.requestButton} onPress={handleRequest}>
          <Text style={styles.requestButtonText}>Request</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon} onPress={() => setShowProfile(true)}>
          <Image source={Icon1} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} disabled>
          <Image source={Icon2} style={[styles.iconImage, { opacity: 0.5 }]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => setShowFacultyList(true)}>
          <Image source={Icon3} style={styles.iconImage} />
        </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'flex-start', // Align content at the top of the screen
    alignItems: 'center', // Center content horizontally
    width: '100%', // Take full screen width
  },
  progressBarContainer: {
    alignItems: 'center',
    marginTop: 120,
    marginBottom: 10,
  },
  connectorLine: {
    position: 'absolute',
    top: 10,
    width: '90%', // Adjust to match container width
    height: 8, // Slightly thinner line for a cleaner look
    backgroundColor: 'rgba(217, 217, 217, 0.6)',
    zIndex: 1,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%', // Adjust width to match the container
    zIndex: 1,
  },
  progressStep: {
    width: 30, // Circle size
    height: 30, // Circle size
    borderRadius: 15, // Circle shape
    backgroundColor: '#d9d9d9',
  },
  completed: {
    backgroundColor: '#d9d9d9', // Completed step color
  },
  active: {
    backgroundColor: '#ffffff', // Active step color
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Match the container width
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
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  heading: {
    fontSize: 28,
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  textInput: {
    width: '100%',
    height: 100,
    backgroundColor: '#2c6b2f',
    color: 'white',
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
  requestButton: {
    backgroundColor: '#2c6b2f',
    width: '100%',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  requestButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  modalTrigger: {
    width: '100%',
    height: 40,
    backgroundColor: '#2c6b2f',
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c6b2f',
  },
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closeModalButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#2c6b2f',
    borderRadius: 5,
  },
  closeModalText: {
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  icon: {
    marginHorizontal: 50,
    marginVertical: 10,
  },
  iconImage: {
    width: 50,
    height: 35,
    resizeMode: 'contain',
  },
});

export default RequestTicketScreen;
