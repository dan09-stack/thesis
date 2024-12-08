import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

import Icon1 from '../assets/profile.png';
import Icon2 from '../assets/home.png';
import Icon3 from '../assets/list2.png';
import LogoutIcon from '../assets/Log out.png';
import RequestScreen from './request.jsx';
import IndexScreen from './index.jsx';
import FacultyList from './faculty list';

const ProfileScreen = () => {
  const [showRequestScreen, setShowRequestScreen] = useState(false);
  const [showIndexScreen, setShowIndexScreen] = useState(false);
  const [showFacultyList, setShowFacultyList] = useState(false);

  if (showRequestScreen) return <RequestScreen />;
  if (showIndexScreen) return <IndexScreen setIsIndexScreen={setShowIndexScreen} />;
  if (showFacultyList) return <FacultyList />;

  return (
    <ImageBackground source={require('../assets/green p2.jpg')} style={styles.background}>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => setShowIndexScreen(true)}>
          <Image source={LogoutIcon} style={styles.logoutIcon} />
        </TouchableOpacity>

        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <Image source={require('../assets/profile.png')} style={styles.profileImage} />
            <Text style={styles.name}>[User's Name]</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>PHINMA Email: [Email Here]</Text>
            <Text style={styles.detailText}>Number: [Phone Number Here]</Text>
            <Text style={styles.detailText}>Student ID Number: [ID Number Here]</Text>
            <Text style={styles.detailText}>Course: [Course Here]</Text>
            <Text style={styles.detailText}>Password: [********]</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon} disabled={true}>
            <Image source={Icon1} style={[styles.iconImage, { opacity: 0.5 }]} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => setShowRequestScreen(true)}>
            <Image source={Icon2} style={styles.iconImage} />
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
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 280,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1f4e21',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  detailsContainer: {
    marginBottom: 15,
    alignItems: 'flex-start',
    width: '100%',
    paddingVertical: 20,
  },
  detailText: {
    fontSize: 15,
    color: '#f1f1f1',
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
  editButton: {
    backgroundColor: '#2c6b2f',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    position: 'absolute',
    right: 20,
    bottom: 230,
  },
  editButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
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
  logoutButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  logoutIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});

export default ProfileScreen;
