import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import the icon library

const ProfileHeader = ({ isDarkMode }) => {
  return (
    <View style={[styles.header, isDarkMode ? styles.darkHeader : styles.lightHeader]}>
      <Image
        style={styles.backgroundImage}
        source={require('../assets/bg3.gif')}
      />
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require('../assets/Profile.jpg')}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.name, styles.darkText]}>
            Gabriel
          </Text>
          <Text style={[styles.surname, isDarkMode ? styles.darkText : styles.blackText]}>
            Felicitas
          </Text>
          <View style={styles.statusContainer}>
            <MaterialCommunityIcons name="check-circle" size={20} color="#00FF00" />
            <Text style={[styles.status, isDarkMode ? styles.darkText : styles.lightText]}>
              Active
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  backgroundImage: {
    position: 'absolute',
    top: -25,
    left: 0,
    right: 0,
    height: '75%',
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 90,
    marginHorizontal: 20,
    padding: 10,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#fff',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 0,
    alignSelf: 'flex-start',
    marginTop: 10,
    color: 'white', // Set color to white for Gabriel
  },
  surname: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  statusContainer: {
    flexDirection: 'row', // Row direction for icon and text
    alignItems: 'center', // Center the items vertically
    marginTop: 5,
  },
  status: {
    color: '#00FF00',
    marginLeft: 5, // Space between icon and text
    fontSize: 18,
  },
  darkHeader: {
    backgroundColor: '#333',
  },
  lightHeader: {
    backgroundColor: 'transparent',
  },
  darkText: {
    color: 'white', // Color for dark mode
  },
  lightText: {
    color: 'black', // Color for light mode
  },
  blackText: {
    color: 'black', // Default color for surname
  },
});

export default ProfileHeader;
