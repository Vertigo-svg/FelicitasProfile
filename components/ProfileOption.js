import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProfileOption = ({ title, icon, isDarkMode, rightComponent, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]}
      onPress={onPress} // Add onPress prop to handle clicks
    >
      {/* Left component (Toggle switch or icon) */}
      <View style={styles.leftComponent}>
        {rightComponent ? rightComponent : <FontAwesome name={icon} size={24} color={isDarkMode ? 'white' : 'black'} />}
      </View>

      {/* Center the text */}
      <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>
        {title}
      </Text>

      {/* Right icon (optional chevron) */}
      {!rightComponent && (
        <FontAwesome name="chevron-right" size={24} color={isDarkMode ? 'white' : 'black'} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures proper spacing between elements
    paddingVertical: 15, // Vertical padding for the touch area
    paddingHorizontal: 20, // Horizontal padding for the touch area
    borderBottomWidth: 1,
  },
  darkOption: {
    borderBottomColor: '#333',
  },
  lightOption: {
    borderBottomColor: '#ccc',
  },
  optionText: {
    flex: 1, // Ensures the text takes the available space
    fontSize: 18,
    textAlign: 'center', // Center the text
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: 'black',
  },
  leftComponent: {
    marginRight: 10, // Adds space between the left component and the text
    justifyContent: 'center', // Center the icon vertically
  },
});

export default ProfileOption;