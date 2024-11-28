import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground, Image, Modal, FlatList } from 'react-native';
import ProfileScreen from './profile';
import FacultyList from './faculty list';

import Icon1 from '../assets/profile.png';
import Icon2 from '../assets/home.png';
import Icon3 from '../assets/list2.png';

const RequestTicketScreen = () => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedConcern, setSelectedConcern] = useState('');
  const [isFacultyModalVisible, setIsFacultyModalVisible] = useState(false);
  const [isConcernModalVisible, setIsConcernModalVisible] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showFacultyList, setShowFacultyList] = useState(false);

  const faculties = ['Faculty 1', 'Faculty 2', 'Faculty 3', 'Faculty 4', 'Faculty 5', 'Faculty 6', 'Faculty 7'];
  const concerns = ['Enlistment', 'Grades', 'Study Plan', 'Enrollment'];

  if (showProfile) return <ProfileScreen />;
  if (showFacultyList) return <FacultyList />;

  return (
    <ImageBackground source={require('../assets/green p2.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.stepContainer}>
          <View style={styles.stepCircle}></View>
          <View style={styles.stepCircle}></View>
          <View style={styles.stepCircle}></View>
        </View>

        <Text style={styles.heading}>Request Ticket</Text>
        <Text style={styles.subheading}>Create your virtual queue</Text>

        <TouchableOpacity style={styles.modalTrigger} onPress={() => setIsFacultyModalVisible(true)}>
          <Text>{selectedFaculty || 'Select Faculty'}</Text>
        </TouchableOpacity>

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
              <TouchableOpacity style={styles.closeModalButton} onPress={() => setIsFacultyModalVisible(false)}>
                <Text style={styles.closeModalText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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
              <TouchableOpacity style={styles.closeModalButton} onPress={() => setIsConcernModalVisible(false)}>
                <Text style={styles.closeModalText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TextInput style={styles.textInput} placeholder="Other:" multiline />

        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestButtonText}>Request</Text>
        </TouchableOpacity>
      </View>

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
  container: {
    width: '90%',
    maxWidth: 600,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 12,
    marginBottom: 100,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  stepCircle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#2c6b2f',
    marginHorizontal: 5,
  },
  textInput: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
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
  modalTrigger: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
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
});

export default RequestTicketScreen;
