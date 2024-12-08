import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import RequestScreen from './request.jsx';
import ProfileScreen from './profile';

import Icon1 from '../assets/profile.png';
import Icon2 from '../assets/home.png';
import Icon3 from '../assets/list2.png';

const FacultyList = () => {
  const [showRequestScreen, setShowRequestScreen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const facultyData = [
    { name: 'A', status: 'ONLINE' },
    { name: 'B', status: 'OFFLINE' },
    { name: 'C', status: 'OFFLINE' },
    { name: 'D', status: 'OFFLINE' },
    { name: 'E', status: 'ONLINE' },
    { name: 'F', status: 'ONLINE' },
    { name: 'G', status: 'ONLINE' },
    { name: 'H', status: 'ONLINE' },
    { name: 'I', status: 'ONLINE' },
    { name: 'J', status: 'ONLINE' },
  ];

  const renderFaculty = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.name}>{item.name}</Text>
      <Text
        style={[
          styles.status,
          { color: item.status === 'ONLINE' ? '#00FF00' : '#FF0000' },
        ]}
      >
        {item.status}
      </Text>
    </View>
  );

  if (showRequestScreen) return <RequestScreen />;
  if (showProfile) return <ProfileScreen />;

  return (
    <ImageBackground
      source={require('../assets/green p2.jpg')}
      style={styles.background}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.listContainer}>
          <Text style={styles.title}>LIST OF FACULTY</Text>
          <View style={styles.header}>
            <Text style={[styles.headerText, { flex: 1 }]}>NAME</Text>
            <Text style={[styles.headerText, { flex: 1 }]}>STATUS</Text>
          </View>
          <FlatList
            data={facultyData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderFaculty}
            style={styles.list}
          />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setShowProfile(true)}
          >
            <Image source={Icon1} style={styles.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setShowRequestScreen(true)}
          >
            <Image source={Icon2} style={styles.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} disabled={true}>
            <Image source={Icon3} style={[styles.iconImage, { opacity: 0.5 }]} />
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  listContainer: {
    backgroundColor: '#1f4e21',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    width: '90%',
    height: '80%',
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto',
    marginBottom: 10,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 5,
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  status: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  iconImage: {
    width: 50,
    height: 35,
    resizeMode: 'contain',
  },
  icon: {
    marginHorizontal: 50,
    marginVertical: 10,
  },
});

export default FacultyList;
