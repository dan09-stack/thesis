import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have react-native-vector-icons or Expo
import RequestScreen from './request.jsx'; // Import the RequestScreen component

const RatingScreen = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false); // State to track submission
  const [showConfirmation, setShowConfirmation] = useState(false); // State for showing confirmation message

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = () => {
    // Validate if the user has selected a rating
    if (rating === 0) {
      Alert.alert("Error", "Please select a rating before submitting.");
      return;
    }

    // Show confirmation message
    setShowConfirmation(true);

    // Set a timeout to transition to the next screen after the confirmation message
    setTimeout(() => {
      setSubmitted(true);
      setShowConfirmation(false); // Hide confirmation message
    }, 1500); // Show confirmation for 1.5 seconds
  };

  // If submitted is true, show RequestScreen; otherwise, show the RatingScreen
  if (submitted) {
    return <RequestScreen />;
  }

  return (
    <ImageBackground
      source={require("../assets/green p2.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.card}>
        <Text style={styles.title}>Rate your consultation experience</Text>
        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleRating(star)}>
              <Ionicons
                name={star <= rating ? "star" : "star-outline"}
                size={32}
                color={star <= rating ? "#2F4F2F" : "#ccc"}
              />
            </TouchableOpacity>
          ))}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Comments/Suggestion:"
          placeholderTextColor="#ddd"
          value={comment}
          onChangeText={setComment}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for confirmation message */}
      <Modal
        transparent={true}
        visible={showConfirmation}
        animationType="fade"
        onRequestClose={() => setShowConfirmation(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowConfirmation(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modal}>
              <Text style={styles.confirmationMessage}>Thank you for your feedback!</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 22,
    color: "#333",
    textAlign: "center",
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 180,
    borderWidth: 1,
    borderColor: "#2F4F2F",
    borderRadius: 8,
    padding: 10,
    color: "#fff",
    backgroundColor: "#1C3D1C",
    textAlignVertical: "top",
  },
  button: {
    marginTop: 25,
    width: "50%",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#2F4F2F",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Darkened background
  },
  modal: {
    width: "80%",
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  confirmationMessage: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RatingScreen;
