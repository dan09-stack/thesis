import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Modal, FlatList } from 'react-native';

const CreateAccountScreen = ({ setIsCreateAccount }) => {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [course, setCourse] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const courses = [
    { label: 'BS Architecture', value: 'course1' },
    { label: 'BS Computer Engineering', value: 'course2' },
    { label: 'BS Civil Engineering', value: 'course3' },
    { label: 'BS Electrical Engineering', value: 'course4' },
    { label: 'BS Electronics Engineering', value: 'course5' },
    { label: 'BS Mechanical Engineering', value: 'course6' },
  ];

  const validateFields = () => {
    let tempErrors = {};

    if (!name.trim()) tempErrors.name = 'Name is required.';
    const idNumberRegex = /^\d{2}-\d{4}-\d{5,6}$/;
    if (!idNumber.trim()) {
      tempErrors.idNumber = 'Student ID Number is required.';
    } else if (!idNumberRegex.test(idNumber)) {
      tempErrors.idNumber = 'Invalid ID Number format (e.g., 12-3456-78901).';
    }
    if (!course) tempErrors.course = 'Please select your course.';
    if (!phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (phone.length !== 11) {
      tempErrors.phone = 'Phone number must have 11 digits.';
    }
    if (!email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!email.endsWith('.up@phinmaed.com') && !email.endsWith('@gmail.com')) {
      tempErrors.email = 'Invalid email address.';
    }
    if (!password.trim()) {
      tempErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters long.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log({ name, idNumber, course, phone, email, password });
      setIsCreateAccount(false);
    }
  };

  const handlePhoneChange = (input) => setPhone(input.replace(/[^0-9]/g, ''));
  const handleIdNumberChange = (input) => setIdNumber(input.replace(/[^0-9\-]/g, ''));

  return (
    <ImageBackground
      source={require('../assets/green p2.jpg')}
      style={styles.background}
      imageStyle={{ resizeMode: 'cover' }}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Create Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Last Name, First Name MI"
          value={name}
          onChangeText={setName}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Student ID Number"
          keyboardType="numeric"
          value={idNumber}
          onChangeText={handleIdNumberChange}
        />
        {errors.idNumber && <Text style={styles.errorText}>{errors.idNumber}</Text>}

        <TouchableOpacity
          style={[styles.input, styles.picker]}
          onPress={() => setModalVisible(true)}
        >
          <Text>{course ? courses.find((c) => c.value === course).label : 'Select your course'}</Text>
        </TouchableOpacity>
        {errors.course && <Text style={styles.errorText}>{errors.course}</Text>}

        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeading}>Select Your Course</Text>
              <FlatList
                data={courses}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => {
                      setCourse(item.value);
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.modalItemText}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={handlePhoneChange}
        />
        {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

        <TextInput
          style={styles.input}
          placeholder="PHINMA Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>CREATE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.goBackButton} onPress={() => setIsCreateAccount(false)}>
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
  },
  heading: {
    fontSize: 28,
    marginBottom: 30,
    fontFamily: 'Roboto',
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    width: '100%',
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
  goBackButton: {
    marginTop: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#2c6b2f',
    borderRadius: 5,
  },
  goBackText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  picker: {
    justifyContent: 'center',
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
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  modalItemText: {
    fontSize: 16,
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2c6b2f',
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CreateAccountScreen;
