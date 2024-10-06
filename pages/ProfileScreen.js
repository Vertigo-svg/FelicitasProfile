import React, { useState } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import ProfileHeader from '../components/ProfileHeader'; // Importing from components folder
import ProfileOption from '../components/ProfileOption'; // Importing from components folder
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importing icons

const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default is dark mode

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ProfileHeader isDarkMode={isDarkMode} />
      
      {/* User Stats */}
      <View style={styles.statsContainer}>
        <Text style={[styles.statText, isDarkMode ? styles.darkText : styles.lightText]}>230K</Text>
        <Text style={[styles.statLabel, isDarkMode ? styles.darkText : styles.lightText]}>Followers</Text>
        <Text style={styles.statSeparator}>|</Text>
        <Text style={[styles.statText, isDarkMode ? styles.darkText : styles.lightText]}>498</Text>
        <Text style={[styles.statLabel, isDarkMode ? styles.darkText : styles.lightText]}>Projects</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.optionsContainer}>
        <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>Profile</Text>
        <ProfileOption title="Manage User" icon="user" isDarkMode={isDarkMode} />
      </View>

      {/* Settings Section */}
      <View style={styles.optionsContainer}>
        <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>Settings</Text>
        <ProfileOption title="Notifications" icon="bell" isDarkMode={isDarkMode} />
        <ProfileOption title={isDarkMode ? "Light Mode" : "Dark Mode"} icon="moon-waning-crescent" 
          isDarkMode={isDarkMode} rightComponent={<MaterialCommunityIcons name={isDarkMode ? "moon-waning-crescent" : "white-balance-sunny"} size={24} color={isDarkMode ? '#fff' : '#000'} />} onPress={toggleDarkMode} />
        <ProfileOption title="Sign Out" icon="sign-out" isDarkMode={isDarkMode} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  darkBackground: {
    backgroundColor: '#000',
  },
  lightBackground: {
    backgroundColor: '#fff',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  statText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00FF00',
    paddingHorizontal: 10, // Added padding for spacing
  },
  statLabel: {
    color: '#333',
    marginHorizontal: 5,
  },
  statSeparator: {
    color: '#333',
  },
  optionsContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'left', // Align text to the left
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
});

export default ProfileScreen;
